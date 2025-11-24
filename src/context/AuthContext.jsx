import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signUp as firebaseSignUp, signIn as firebaseSignIn, logout as firebaseLogout } from '../services/auth';
import {
    createUserProfile,
    getUserProfile,
    getUserCredits,
    deductCredit as deductUserCredit,
    addCredits as addUserCredits,
    validateReferralCode,
    applyReferralBonus
} from '../services/userService';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [credits, setCredits] = useState(0);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        // Listen to Firebase auth state changes
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                try {
                    // Get user profile from Firestore
                    const profile = await getUserProfile(firebaseUser.uid);
                    setUserProfile(profile);
                    setUser({
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName || profile.displayName,
                        photoURL: firebaseUser.photoURL || profile.photoURL
                    });
                    setCredits(profile.credits || 0);
                } catch (error) {
                    console.error('Error loading user profile:', error);
                    setUser(null);
                    setUserProfile(null);
                }
            } else {
                setUser(null);
                setUserProfile(null);
                setCredits(0);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const fetchCredits = async () => {
        if (user) {
            try {
                const userCredits = await getUserCredits(user.uid);
                setCredits(userCredits);
            } catch (error) {
                console.error('Failed to fetch credits:', error);
            }
        }
    };

    const login = async (email, password) => {
        try {
            const firebaseUser = await firebaseSignIn(email, password);
            // Auth state listener will handle the rest
            return { success: true, user: firebaseUser };
        } catch (error) {
            let errorMessage = 'Login failed';

            // Firebase error code handling
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many failed attempts. Please try again later';
            } else if (error.code === 'auth/invalid-credential') {
                errorMessage = 'Invalid email or password';
            }

            return {
                success: false,
                error: errorMessage
            };
        }
    };

    const signup = async (userData) => {
        try {
            // Create Firebase user
            const firebaseUser = await firebaseSignUp(
                userData.email,
                userData.password,
                userData.name
            );

            // Create Firestore user profile
            await createUserProfile(firebaseUser.uid, {
                displayName: userData.name,
                email: userData.email,
                photoURL: firebaseUser.photoURL
            });

            // Handle referral code if provided
            if (userData.referralCode) {
                const referrerId = await validateReferralCode(userData.referralCode);
                if (referrerId) {
                    await applyReferralBonus(firebaseUser.uid, referrerId);
                }
            }

            // Auth state listener will handle the rest
            return { success: true, user: firebaseUser };
        } catch (error) {
            let errorMessage = 'Signup failed';

            // Firebase error code handling
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'An account with this email already exists';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'Password should be at least 6 characters';
            }

            return {
                success: false,
                error: errorMessage
            };
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const firebaseUser = result.user;

            // Check if user profile exists, create if not
            try {
                await getUserProfile(firebaseUser.uid);
            } catch (error) {
                // User profile doesn't exist, create it
                await createUserProfile(firebaseUser.uid, {
                    displayName: firebaseUser.displayName,
                    email: firebaseUser.email,
                    photoURL: firebaseUser.photoURL
                });
            }

            return { success: true, user: firebaseUser };
        } catch (error) {
            let errorMessage = 'Google sign-in failed';

            if (error.code === 'auth/popup-closed-by-user') {
                errorMessage = 'Sign-in cancelled';
            } else if (error.code === 'auth/popup-blocked') {
                errorMessage = 'Popup blocked by browser';
            }

            return {
                success: false,
                error: errorMessage
            };
        }
    };

    const logout = async () => {
        try {
            await firebaseLogout();
            // Auth state listener will handle clearing state
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const deductCredit = async () => {
        if (user) {
            try {
                await deductUserCredit(user.uid);
                setCredits(prev => Math.max(0, prev - 1));
            } catch (error) {
                console.error('Error deducting credit:', error);
            }
        }
    };

    const addCredits = async (amount) => {
        if (user) {
            try {
                await addUserCredits(user.uid, amount);
                await fetchCredits();
            } catch (error) {
                console.error('Error adding credits:', error);
            }
        }
    };

    const value = {
        user,
        credits,
        loading,
        login,
        signup,
        logout,
        signInWithGoogle,
        deductCredit,
        fetchCredits,
        addCredits,
        isAuthenticated: !!user,
        userProfile
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Protected Route Component
export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}>
                Loading...
            </div>
        );
    }

    if (!isAuthenticated) {
        window.location.href = '/login';
        return null;
    }

    return children;
};

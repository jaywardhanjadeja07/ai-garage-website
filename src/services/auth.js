import { auth } from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    updateProfile
} from 'firebase/auth';

// Sign up new user with email and password
export const signUp = async (email, password, displayName = null) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Update display name if provided
        if (displayName) {
            await updateProfile(userCredential.user, { displayName });
        }

        return userCredential.user;
    } catch (error) {
        console.error("Sign up error:", error.message);
        throw error;
    }
};

// Sign in existing user with email and password
export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Sign in error:", error.message);
        throw error;
    }
};

// Sign in with Google
export const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        return userCredential.user;
    } catch (error) {
        console.error("Google sign in error:", error.message);
        throw error;
    }
};

// Sign out
export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Sign out error:", error.message);
        throw error;
    }
};

// Send password reset email
export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        console.error("Password reset error:", error.message);
        throw error;
    }
};

// Listen to auth state changes
export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};

// Get current user
export const getCurrentUser = () => {
    return auth.currentUser;
};

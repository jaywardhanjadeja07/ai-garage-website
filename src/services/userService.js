import { db } from './firebase';
import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    increment,
    serverTimestamp,
    collection,
    query,
    where,
    getDocs
} from 'firebase/firestore';

// Generate a unique referral code
const generateReferralCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};

// Create user profile on signup
export const createUserProfile = async (userId, userData) => {
    try {
        const referralCode = generateReferralCode();
        const userProfile = {
            displayName: userData.displayName || userData.name || '',
            email: userData.email,
            photoURL: userData.photoURL || null,
            credits: 3, // Default credits for new users
            referralCode: referralCode,
            referredBy: userData.referredBy || null,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        };

        await setDoc(doc(db, 'users', userId), userProfile);
        return userProfile;
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }
};

// Get user profile
export const getUserProfile = async (userId) => {
    try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error('User profile not found');
        }
    } catch (error) {
        console.error('Error getting user profile:', error);
        throw error;
    }
};

// Update user profile
export const updateUserProfile = async (userId, updates) => {
    try {
        const docRef = doc(db, 'users', userId);
        await updateDoc(docRef, {
            ...updates,
            updatedAt: serverTimestamp()
        });
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
};

// Get user credits
export const getUserCredits = async (userId) => {
    try {
        const profile = await getUserProfile(userId);
        return profile.credits || 0;
    } catch (error) {
        console.error('Error getting user credits:', error);
        return 0;
    }
};

// Deduct one credit
export const deductCredit = async (userId) => {
    try {
        const docRef = doc(db, 'users', userId);
        await updateDoc(docRef, {
            credits: increment(-1),
            updatedAt: serverTimestamp()
        });
    } catch (error) {
        console.error('Error deducting credit:', error);
        throw error;
    }
};

// Add credits
export const addCredits = async (userId, amount) => {
    try {
        const docRef = doc(db, 'users', userId);
        await updateDoc(docRef, {
            credits: increment(amount),
            updatedAt: serverTimestamp()
        });
    } catch (error) {
        console.error('Error adding credits:', error);
        throw error;
    }
};

// Validate referral code and get referrer's userId
export const validateReferralCode = async (code) => {
    try {
        if (!code) return null;

        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('referralCode', '==', code.toUpperCase()));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs[0].id; // Return referrer's userId
        }
        return null;
    } catch (error) {
        console.error('Error validating referral code:', error);
        return null;
    }
};

// Apply referral bonus (3 extra credits to new user, 3 credits to referrer)
export const applyReferralBonus = async (newUserId, referrerId) => {
    try {
        // Give 3 bonus credits to new user (total 6)
        await addCredits(newUserId, 3);

        // Give 3 credits to referrer
        await addCredits(referrerId, 3);

        // Update new user's referredBy field
        await updateUserProfile(newUserId, { referredBy: referrerId });
    } catch (error) {
        console.error('Error applying referral bonus:', error);
        throw error;
    }
};

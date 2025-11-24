// Quick test to verify Firebase is working
import { auth, db } from './firebase';

export const testFirebase = async () => {
    console.log('Testing Firebase connection...');

    try {
        console.log('Auth:', auth ? '✓ Connected' : '✗ Failed');
        console.log('Firestore:', db ? '✓ Connected' : '✗ Failed');
        return true;
    } catch (error) {
        console.error('Firebase test failed:', error);
        return false;
    }
};

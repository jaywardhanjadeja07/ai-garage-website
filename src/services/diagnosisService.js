import { db } from './firebase';
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp
} from 'firebase/firestore';

// Save diagnosis to Firestore
export const saveDiagnosis = async (userId, diagnosisData) => {
    try {
        const diagnosis = {
            userId,
            carMake: diagnosisData.carMake || '',
            carModel: diagnosisData.carModel || '',
            year: diagnosisData.year || null,
            symptoms: diagnosisData.symptoms || '',
            diagnosis: diagnosisData.diagnosis || {},
            imageUrls: diagnosisData.imageUrls || [],
            creditsUsed: 1,
            createdAt: serverTimestamp()
        };

        const docRef = await addDoc(collection(db, 'diagnoses'), diagnosis);
        return docRef.id;
    } catch (error) {
        console.error('Error saving diagnosis:', error);
        throw error;
    }
};

// Get diagnosis history for a user
export const getDiagnosisHistory = async (userId, limitCount = 50) => {
    try {
        const diagnosesRef = collection(db, 'diagnoses');
        const q = query(
            diagnosesRef,
            where('userId', '==', userId),
            orderBy('createdAt', 'desc'),
            limit(limitCount)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error getting diagnosis history:', error);
        throw error;
    }
};

// Get a specific diagnosis by ID
export const getDiagnosisById = async (diagnosisId) => {
    try {
        const docRef = doc(db, 'diagnoses', diagnosisId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error('Diagnosis not found');
        }
    } catch (error) {
        console.error('Error getting diagnosis:', error);
        throw error;
    }
};

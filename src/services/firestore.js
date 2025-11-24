import { db } from './firebase';
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    onSnapshot,
    serverTimestamp,
    setDoc
} from 'firebase/firestore';

// Add a document with auto-generated ID
export const addDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: serverTimestamp()
        });
        return docRef.id;
    } catch (error) {
        console.error("Error adding document:", error);
        throw error;
    }
};

// Set a document with custom ID
export const setDocument = async (collectionName, docId, data) => {
    try {
        await setDoc(doc(db, collectionName, docId), {
            ...data,
            updatedAt: serverTimestamp()
        });
    } catch (error) {
        console.error("Error setting document:", error);
        throw error;
    }
};

// Get all documents from a collection
export const getDocuments = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error getting documents:", error);
        throw error;
    }
};

// Get a single document
export const getDocument = async (collectionName, docId) => {
    try {
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("Document not found");
        }
    } catch (error) {
        console.error("Error getting document:", error);
        throw error;
    }
};

// Update a document
export const updateDocument = async (collectionName, docId, data) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp()
        });
    } catch (error) {
        console.error("Error updating document:", error);
        throw error;
    }
};

// Delete a document
export const deleteDocument = async (collectionName, docId) => {
    try {
        await deleteDoc(doc(db, collectionName, docId));
    } catch (error) {
        console.error("Error deleting document:", error);
        throw error;
    }
};

// Query documents with filters
export const queryDocuments = async (collectionName, filters = []) => {
    try {
        let q = collection(db, collectionName);

        // Apply filters
        if (filters.length > 0) {
            q = query(q, ...filters);
        }

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error querying documents:", error);
        throw error;
    }
};

// Real-time listener for a collection
export const subscribeToCollection = (collectionName, callback, filters = []) => {
    let q = collection(db, collectionName);

    if (filters.length > 0) {
        q = query(q, ...filters);
    }

    return onSnapshot(q, (querySnapshot) => {
        const documents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        callback(documents);
    });
};

// Real-time listener for a single document
export const subscribeToDocument = (collectionName, docId, callback) => {
    const docRef = doc(db, collectionName, docId);

    return onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
            callback({ id: docSnap.id, ...docSnap.data() });
        } else {
            callback(null);
        }
    });
};

// Export query helpers for convenience
export { where, orderBy, limit };

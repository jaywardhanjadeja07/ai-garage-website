import { storage } from './firebase';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
    uploadBytesResumable,
    listAll,
    getMetadata
} from 'firebase/storage';

// Upload a file
export const uploadFile = async (file, path) => {
    try {
        const storageRef = ref(storage, path);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

// Upload with progress tracking
export const uploadFileWithProgress = (file, path, onProgress) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, path);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (onProgress) onProgress(Math.round(progress));
            },
            (error) => {
                console.error("Upload error:", error);
                reject(error);
            },
            async () => {
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                } catch (error) {
                    reject(error);
                }
            }
        );
    });
};

// Delete a file
export const deleteFile = async (path) => {
    try {
        const storageRef = ref(storage, path);
        await deleteObject(storageRef);
    } catch (error) {
        console.error("Error deleting file:", error);
        throw error;
    }
};

// Get file download URL
export const getFileURL = async (path) => {
    try {
        const storageRef = ref(storage, path);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    } catch (error) {
        console.error("Error getting file URL:", error);
        throw error;
    }
};

// List all files in a directory
export const listFiles = async (path) => {
    try {
        const storageRef = ref(storage, path);
        const result = await listAll(storageRef);

        const files = await Promise.all(
            result.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                const metadata = await getMetadata(itemRef);
                return {
                    name: itemRef.name,
                    fullPath: itemRef.fullPath,
                    url,
                    size: metadata.size,
                    contentType: metadata.contentType,
                    createdAt: metadata.timeCreated
                };
            })
        );

        return files;
    } catch (error) {
        console.error("Error listing files:", error);
        throw error;
    }
};

// Get file metadata
export const getFileMetadata = async (path) => {
    try {
        const storageRef = ref(storage, path);
        const metadata = await getMetadata(storageRef);
        return metadata;
    } catch (error) {
        console.error("Error getting file metadata:", error);
        throw error;
    }
};

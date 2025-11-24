// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Note: Storage commented out - requires Blaze plan
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO6xhJT2ySe5GTYYUZU8FId17zFmaU590",
  authDomain: "ai-garage-website.firebaseapp.com",
  projectId: "ai-garage-website",
  storageBucket: "ai-garage-website.firebasestorage.app",
  messagingSenderId: "233530644130",
  appId: "1:233530644130:web:6bdebce05cd967ec2ba9fb",
  measurementId: "G-4H7Q0RTKQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Storage disabled - uncomment when Blaze plan is enabled
// export const storage = getStorage(app);
export const storage = null; // Placeholder to prevent import errors

export default app;

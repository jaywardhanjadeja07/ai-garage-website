import axios from 'axios';
import { auth } from './firebase';

const API_URL = 'http://localhost:3000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Helper function to get Firebase ID token
const getAuthToken = async () => {
    try {
        const user = auth.currentUser;
        if (user) {
            return await user.getIdToken();
        }
        return null;
    } catch (error) {
        console.error('Error getting auth token:', error);
        return null;
    }
};

// Request interceptor to add Firebase token
api.interceptors.request.use(
    async (config) => {
        const token = await getAuthToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for error handling  
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid, redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// AI APIs (keeping backend for AI operations)
// AI APIs (Mocked for immediate functionality)
export const aiAPI = {
    diagnose: async (data) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Return mock diagnosis
        return {
            data: {
                diagnosis: "Based on your description, it sounds like your brake pads are worn out.",
                confidence: 0.85,
                recommendations: [
                    "Inspect brake pads for wear",
                    "Check brake fluid levels",
                    "Visit a mechanic for a professional inspection"
                ]
            }
        };
    },
    assessDamage: async (formData) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2500));

        // Randomize response to avoid "bumper" issue on every image
        const scenarios = [
            {
                assessment: "Visual analysis suggests potential body panel misalignment and minor scratches.",
                recommendations: ["Inspect panel gaps", "Buff out scratches", "Check for underlying denting"]
            },
            {
                assessment: "Detected surface imperfections consistent with wear or minor impact.",
                recommendations: ["Professional detailing recommended", "Check paint integrity", "Verify no structural damage"]
            },
            {
                assessment: "Image analysis indicates possible lighting or sensor assembly issues.",
                recommendations: ["Check headlight alignment", "Inspect sensor housing", "Verify electrical connections"]
            }
        ];

        const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

        // Return mock assessment
        return {
            data: {
                assessment: randomScenario.assessment,
                confidence: 0.85 + (Math.random() * 0.1), // Random confidence between 0.85 and 0.95
                recommendations: [
                    ...randomScenario.recommendations,
                    "Estimate repair cost: $" + (Math.floor(Math.random() * 4) + 2) + "00 - $" + (Math.floor(Math.random() * 5) + 6) + "00"
                ]
            }
        };
    },
};

// Partner APIs
export const partnerAPI = {
    getGarages: () => api.get('/partners'),
    getNearby: (lat, lng) => api.get(`/partners/nearby?lat=${lat}&lng=${lng}`),
};

// Booking APIs
export const bookingAPI = {
    create: (data) => api.post('/bookings', data),
    getUserBookings: () => api.get('/bookings/user'),
};

// Marketplace APIs
export const marketplaceAPI = {
    getParts: () => api.get('/marketplace/parts'),
    getVendors: () => api.get('/marketplace/vendors'),
    createOrder: (data) => api.post('/marketplace/orders', data),
};

// Telemetry APIs
export const telemetryAPI = {
    upload: (data) => api.post('/telemetry/upload', data),
    getHistory: () => api.get('/telemetry/history'),
};

export default api;

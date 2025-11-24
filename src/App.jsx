import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Diagnose from './pages/Diagnose';
import Marketplace from './pages/Marketplace';
import Garages from './pages/Garages';
import History from './pages/History';
import FirebaseTest from './components/FirebaseTest';
import './index.css';


const App = () => {
    return (
        <AuthProvider>
            <Router basename={import.meta.env.BASE_URL}>
                <Routes>
                    {/* Public routes with layout */}
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/how-it-works" element={<HowItWorks />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/firebase-test" element={<FirebaseTest />} />
                    </Route>

                    {/* Auth routes (no layout) */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Protected routes with layout */}
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                        <Route path="/diagnose" element={<ProtectedRoute><Diagnose /></ProtectedRoute>} />
                        <Route path="/marketplace" element={<ProtectedRoute><Marketplace /></ProtectedRoute>} />
                        <Route path="/garages" element={<ProtectedRoute><Garages /></ProtectedRoute>} />
                        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;

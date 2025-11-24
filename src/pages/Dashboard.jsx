import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Zap, Clock, ShoppingCart, MapPin, User, CreditCard } from 'lucide-react';

const Dashboard = () => {
    const { user, credits } = useAuth();
    const [recentActivity, setRecentActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            // In a real app, you'd fetch recent diagnoses, bookings, etc.
            // For now, we'll show a placeholder
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch dashboard data:', error);
            setLoading(false);
        }
    };

    const quickActions = [
        { icon: Zap, title: 'Diagnose Problem', desc: 'AI-powered diagnosis', link: '/diagnose', color: '#3B82F6' },
        { icon: ShoppingCart, title: 'Buy Parts', desc: 'Browse marketplace', link: '/marketplace', color: '#10B981' },
        { icon: MapPin, title: 'Find Garage', desc: 'Nearby mechanics', link: '/garages', color: '#F59E0B' },
        { icon: Clock, title: 'History', desc: 'Past diagnoses', link: '/history', color: '#8B5CF6' },
    ];

    return (
        <div style={{ minHeight: '80vh', paddingTop: '3rem', paddingBottom: '3rem', background: 'var(--background)' }}>
            <div className="container">
                {/* Welcome Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ marginBottom: '0.5rem' }}>Welcome back, {user?.name}!</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Here's what's happening with your vehicles</p>
                </div>

                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div className="card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0, color: 'white' }}>Credits Remaining</h3>
                            <CreditCard size={24} />
                        </div>
                        <p style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, color: 'white' }}>{credits}</p>
                        <Link to="/pricing" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', marginTop: '0.5rem', display: 'inline-block', textDecoration: 'underline' }}>
                            Buy more →
                        </Link>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0 }}>Subscription</h3>
                            <User size={24} color="var(--primary)" />
                        </div>
                        <p style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
                            {user?.subscription_status || 'Free'}
                        </p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                            {user?.subscription_status === 'free' ? 'Upgrade for unlimited diagnoses' : 'Active subscription'}
                        </p>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0 }}>Total Diagnoses</h3>
                            <Zap size={24} color="var(--success)" />
                        </div>
                        <p style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>0</p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>All time</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Quick Actions</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {quickActions.map((action, i) => (
                            <Link
                                key={i}
                                to={action.link}
                                className="card"
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '2rem 1.5rem'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: `${action.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    <action.icon size={28} color={action.color} />
                                </div>
                                <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text)' }}>{action.title}</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>{action.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Recent Activity Placeholder */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem' }}>Recent Activity</h2>
                    <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                        <Clock size={48} color="var(--text-light)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ color: 'var(--text-secondary)' }}>No recent activity</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                            Start by diagnosing your first car problem
                        </p>
                        <Link to="/diagnose" className="btn btn-primary">
                            <Zap size={18} />
                            Start Diagnosis
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';

const Home = () => {
    const features = [
        { title: 'AI Car Diagnosis', desc: 'Describe your problem or upload a photo. Get instant AI-powered diagnosis.', icon: 'Search' },
        { title: 'Parts Marketplace', desc: 'Browse and order genuine car parts from verified vendors.', icon: 'Cart' },
        { title: 'Garage Booking', desc: 'Find and book trusted mechanics near you with real reviews.', icon: 'Tool' },
        { title: 'OBD Telemetry', desc: 'Connect OBD-II devices to monitor your car in real-time.', icon: 'Chart' }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', paddingTop: '6rem', paddingBottom: '8rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
                        <Zap size={16} />
                        AI-Powered Car Diagnostics
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>
                        Your Car's <br />Personal Mechanic
                    </h1>

                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem', opacity: 0.95 }}>
                        Instantly diagnose car problems with AI, find the right parts, and book trusted mechanics.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        <Link to="/signup" className="btn" style={{ background: 'white', color: '#667eea', padding: '1rem 2rem', fontSize: '1rem' }}>
                            Get Started Free
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/how-it-works" className="btn btn-secondary" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '1rem 2rem', fontSize: '1rem' }}>
                            See How It Works
                        </Link>
                    </div>

                    <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', opacity: 0.8 }}>
                        3 free diagnoses • No credit card required • 10,000+ happy users
                    </p>

                    <div style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <img
                            src="/ai-hero.png"
                            alt="AI Car Diagnostics"
                            style={{ width: '100%', height: 'auto', animation: 'float 6s ease-in-out infinite' }}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Everything You Need</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                            Complete car care in one platform
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {features.map((feature, i) => (
                            <div key={i} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                                <h3 style={{ marginBottom: '0.75rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile App Section */}
            <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                                📱 APP LAUNCHING SOON
                            </div>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
                                GarageAI Mobile App
                            </h2>

                            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95, lineHeight: 1.6 }}>
                                Diagnose anywhere, anytime. Get early access and exclusive benefits.
                            </p>

                            <div style={{ background: 'rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
                                <h4 style={{ marginBottom: '1rem', color: 'white' }}>🎁 Early User Perks</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>⭐ 10 free diagnoses (worth $50)</li>
                                    <li>💎 Lifetime 20% discount</li>
                                    <li>🚀 Priority feature access</li>
                                    <li>🏆 Exclusive badge</li>
                                </ul>
                            </div>

                            <form style={{ display: 'flex', gap: '1rem' }}>
                                <input type="email" placeholder="Your email" style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: 'none', fontSize: '1rem' }} />
                                <button type="submit" className="btn" style={{ background: 'white', color: '#667eea', fontWeight: 700 }}>
                                    Notify Me
                                </button>
                            </form>
                        </div>

                        <div style={{ textAlign: 'center', position: 'relative' }}>
                            <img
                                src="/ai-mechanic.png"
                                alt="AI Mechanic"
                                style={{ width: '100%', maxWidth: '400px', height: 'auto', animation: 'float 5s ease-in-out infinite', filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))' }}
                            />
                            <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255, 255, 255, 0.95)', padding: '0.75rem 1.5rem', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)', fontSize: '0.875rem', fontWeight: 600, color: '#667eea', animation: 'pulse 2s ease-in-out infinite' }}>
                                iOS & Android
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '5rem 0', background: 'var(--background)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem' }}>
                        Join thousands of car owners who trust GarageAI for their vehicle health
                    </p>
                    <Link to="/signup" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Create Free Account
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

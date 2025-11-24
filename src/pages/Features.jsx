import React from 'react';
import { Zap, Brain, ShoppingCart, MapPin, BarChart3, Shield, Clock, Users } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Brain,
            title: 'AI-Powered Diagnosis',
            description: 'Advanced machine learning algorithms analyze your car problems in seconds. Get accurate diagnoses without visiting a mechanic.',
            color: '#3B82F6',
            benefits: ['99.9% accuracy', 'Instant results', 'Save time & money']
        },
        {
            icon: ShoppingCart,
            title: 'Smart Parts Marketplace',
            description: 'Access a curated marketplace of genuine parts from verified vendors. Compare prices and get the best deals.',
            color: '#10B981',
            benefits: ['Verified vendors', 'Best prices', 'Fast delivery']
        },
        {
            icon: MapPin,
            title: 'Garage Network',
            description: 'Find and book trusted mechanics near you. Read reviews, compare prices, and schedule appointments seamlessly.',
            color: '#F59E0B',
            benefits: ['1000+ partners', 'Verified reviews', 'Easy booking']
        },
        {
            icon: BarChart3,
            title: 'OBD Telemetry',
            description: 'Monitor your vehicle health in real-time with OBD-II integration. Track performance metrics and get predictive alerts.',
            color: '#8B5CF6',
            benefits: ['Real-time data', 'Predictive alerts', 'Performance tracking']
        },
        {
            icon: Shield,
            title: 'Damage Assessment',
            description: 'Upload photos of vehicle damage and get instant AI-powered repair estimates. Know the cost before you commit.',
            color: '#EF4444',
            benefits: ['Photo analysis', 'Instant estimates', 'Insurance ready']
        },
        {
            icon: Users,
            title: 'Community Support',
            description: 'Join thousands of car enthusiasts. Share experiences, ask questions, and get help from experts and peers.',
            color: '#06B6D4',
            benefits: ['Active community', 'Expert advice', '24/7 support']
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                paddingTop: '6rem',
                paddingBottom: '4rem'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '9999px',
                        marginBottom: '1.5rem',
                        fontSize: '0.875rem',
                        fontWeight: 600
                    }}>
                        <Zap size={16} />
                        Complete Auto Care Platform
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        color: 'white'
                    }}>
                        Everything You Need to<br />Manage Your Vehicle
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.95,
                        lineHeight: 1.6
                    }}>
                        From AI diagnostics to parts marketplace, we've got every aspect of car maintenance covered.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{
                                    padding: '2rem',
                                    borderLeft: `4px solid ${feature.color}`,
                                    transition: 'all 0.3s'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    background: `${feature.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <feature.icon size={30} color={feature.color} />
                                </div>

                                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                    {feature.description}
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {feature.benefits.map((benefit, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: feature.color
                                            }} />
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '5rem 0', background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Trusted by Thousands</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                            Join the growing community of satisfied users
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>10K+</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Active Users</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--success)', marginBottom: '0.5rem' }}>50K+</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Diagnoses Completed</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--warning)', marginBottom: '0.5rem' }}>1000+</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Partner Garages</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>99.9%</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Accuracy Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to Get Started?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
                        Join thousands of car owners managing their vehicles smarter
                    </p>
                    <a href="/signup" className="btn" style={{
                        background: 'white',
                        color: '#667eea',
                        padding: '1rem 2.5rem',
                        fontSize: '1.125rem',
                        fontWeight: 700
                    }}>
                        Start Free Trial
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Features;

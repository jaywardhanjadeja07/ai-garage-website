import React from 'react';
import { Upload, Zap, CheckCircle, Smartphone, ArrowRight, Star, Gift } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Upload,
            step: '01',
            title: 'Describe Your Problem',
            description: 'Simply type what\'s wrong with your car or upload a photo of the damage. Our AI understands natural language and images.',
            color: '#3B82F6'
        },
        {
            icon: Zap,
            step: '02',
            title: 'AI Analysis',
            description: 'Our advanced AI engine analyzes your input using millions of data points and provides an accurate diagnosis in seconds.',
            color: '#8B5CF6'
        },
        {
            icon: CheckCircle,
            step: '03',
            title: 'Get Solutions',
            description: 'Receive detailed repair recommendations, cost estimates, and find the right parts or mechanics near you.',
            color: '#10B981'
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            {/* Hero */}
            <section style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                paddingTop: '6rem',
                paddingBottom: '4rem'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        color: 'white'
                    }}>
                        How GarageAI Works
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.95
                    }}>
                        From problem to solution in just 3 simple steps
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section style={{ padding: '6rem 0', position: 'relative' }}>
                <div className="container">
                    {/* Connecting Line */}
                    <div style={{
                        position: 'absolute',
                        top: '8rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        height: 'calc(100% - 12rem)',
                        background: 'linear-gradient(to bottom, #3B82F6, #8B5CF6, #10B981)',
                        opacity: 0.2,
                        display: 'none'
                    }} className="hidden md:block" />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: i % 2 === 0 ? '1fr auto 1fr' : '1fr auto 1fr',
                                    gap: '3rem',
                                    alignItems: 'center'
                                }}
                            >
                                {/* Content (left or right based on index) */}
                                <div style={{
                                    textAlign: i % 2 === 0 ? 'right' : 'left',
                                    gridColumn: i % 2 === 0 ? '1' : '3'
                                }}>
                                    <div className="card" style={{ padding: '2rem', display: 'inline-block', maxWidth: '500px' }}>
                                        <div style={{
                                            fontSize: '3rem',
                                            fontWeight: 800,
                                            color: step.color,
                                            opacity: 0.2,
                                            marginBottom: '1rem'
                                        }}>
                                            {step.step}
                                        </div>
                                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{step.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Icon Circle */}
                                <div style={{
                                    gridColumn: '2',
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 10px 40px ${step.color}40`,
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    <step.icon size={40} color="white" />
                                </div>

                                {/* Empty space for alternating layout */}
                                <div style={{ gridColumn: i % 2 === 0 ? '3' : '1' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Demo Section */}
            <section style={{ padding: '5rem 0', background: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>See It In Action</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem' }}>
                        Watch how easy it is to diagnose your car problems
                    </p>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        aspectRatio: '16/9',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 600
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <Smartphone size={64} style={{ marginBottom: '1rem', opacity: 0.8 }} />
                            <div>Demo Video Coming Soon</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile App Promo */}
            <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
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
                                <Smartphone size={16} />
                                MOBILE APP COMING SOON
                            </div>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
                                GarageAI on the Go
                            </h2>

                            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95, lineHeight: 1.6 }}>
                                Diagnose car problems anywhere, anytime. The mobile app brings all the power of GarageAI to your smartphone.
                            </p>

                            {/* Early User Benefits */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                marginBottom: '2rem',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <Gift size={20} />
                                    <h4 style={{ margin: 0, color: 'white' }}>Early User Benefits</h4>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {[
                                        '10 free AI diagnoses (worth $50)',
                                        'Lifetime 20% discount on Pro plan',
                                        'Priority access to new features',
                                        'Exclusive early adopter badge'
                                    ].map((benefit, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <Star size={16} fill="currentColor" />
                                            <span style={{ fontSize: '0.95rem' }}>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Email Signup Form */}
                            <form style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email for updates"
                                    style={{
                                        flex: 1,
                                        minWidth: '250px',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px',
                                        border: 'none',
                                        fontSize: '1rem',
                                        background: 'rgba(255, 255, 255, 0.9)'
                                    }}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn"
                                    style={{
                                        background: 'white',
                                        color: '#667eea',
                                        padding: '1rem 2rem',
                                        fontWeight: 700,
                                        fontSize: '1rem'
                                    }}
                                >
                                    Notify Me <ArrowRight size={18} />
                                </button>
                            </form>
                            <p style={{ fontSize: '0.875rem', marginTop: '1rem', opacity: 0.8 }}>
                                Join 5,000+ users on the waitlist. No spam, just updates.
                            </p>
                        </div>

                        {/* Phone Mockup */}
                        <div style={{ textAlign: 'center', position: 'relative' }}>
                            <div style={{
                                width: '280px',
                                height: '560px',
                                background: '#000',
                                borderRadius: '40px',
                                margin: '0 auto',
                                padding: '12px',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                position: 'relative'
                            }}>
                                {/* Notch */}
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '120px',
                                    height: '30px',
                                    background: '#000',
                                    borderRadius: '0 0 20px 20px',
                                    zIndex: 2
                                }} />

                                {/* Screen */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom, #667eea, #764ba2)',
                                    borderRadius: '32px',
                                    padding: '2rem 1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1.5rem'
                                }}>
                                    <Smartphone size={64} color="white" />
                                    <div style={{ textAlign: 'center', color: 'white' }}>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>GarageAI</div>
                                        <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Coming Soon</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div style={{
                                position: 'absolute',
                                top: '20%',
                                right: '10%',
                                background: 'white',
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                color: '#667eea'
                            }}>
                                iOS & Android
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Try It?</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2rem' }}>
                        Start diagnosing your car problems today
                    </p>
                    <a href="/signup" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Get Started Free
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;

import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: 'Free',
            price: { monthly: 0, annual: 0 },
            description: 'Perfect for trying out GarageAI',
            features: [
                '3 AI diagnoses',
                'Basic marketplace access',
                'Community support',
                'Limited garage search'
            ],
            notIncluded: [
                'OBD telemetry',
                'Priority support',
                'Advanced analytics',
                'API access'
            ],
            cta: 'Get Started',
            popular: false,
            color: '#6B7280'
        },
        {
            name: 'Pro',
            price: { monthly: 19, annual: 190 },
            description: 'For car enthusiasts and regular users',
            features: [
                'Unlimited AI diagnoses',
                'Full marketplace access',
                'Priority support',
                'OBD telemetry tracking',
                'Damage assessment reports',
                'Booking history & analytics',
                'Email notifications'
            ],
            notIncluded: [
                'API access',
                'Custom integrations'
            ],
            cta: 'Start Pro Trial',
            popular: true,
            color: '#3B82F6'
        },
        {
            name: 'Business',
            price: { monthly: 99, annual: 990 },
            description: 'For garages and auto shops',
            features: [
                'Everything in Pro',
                'Unlimited team members',
                'API access',
                'Custom integrations',
                'Dedicated account manager',
                'Priority garage listings',
                'Advanced analytics & reporting',
                'White-label options'
            ],
            notIncluded: [],
            cta: 'Contact Sales',
            popular: false,
            color: '#8B5CF6'
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
                        Simple, Transparent Pricing
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        margin: '0 auto 2rem',
                        opacity: 0.95
                    }}>
                        Choose the perfect plan for your needs. Upgrade or downgrade anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div style={{
                        display: 'inline-flex',
                        gap: '1rem',
                        padding: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '9999px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '9999px',
                                border: 'none',
                                background: billingCycle === 'monthly' ? 'white' : 'transparent',
                                color: billingCycle === 'monthly' ? '#667eea' : 'white',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('annual')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '9999px',
                                border: 'none',
                                background: billingCycle === 'annual' ? 'white' : 'transparent',
                                color: billingCycle === 'annual' ? '#667eea' : 'white',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                position: 'relative'
                            }}
                        >
                            Annual
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                background: '#10B981',
                                color: 'white',
                                fontSize: '0.65rem',
                                padding: '0.125rem 0.375rem',
                                borderRadius: '9999px',
                                fontWeight: 700
                            }}>
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section style={{ padding: '5rem 0', marginTop: '-4rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{
                                    padding: '2.5rem',
                                    position: 'relative',
                                    border: plan.popular ? `2px solid ${plan.color}` : '1px solid var(--border)',
                                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                                    boxShadow: plan.popular ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'var(--shadow)'
                                }}
                            >
                                {plan.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: plan.color,
                                        color: 'white',
                                        padding: '0.375rem 1rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700
                                    }}>
                                        MOST POPULAR
                                    </div>
                                )}

                                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: plan.color }}>{plan.name}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                                        {plan.description}
                                    </p>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text)' }}>
                                            ${billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.annual / 12)}
                                        </span>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>/month</span>
                                    </div>
                                    {billingCycle === 'annual' && plan.price.annual > 0 && (
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                            Billed ${plan.price.annual} annually
                                        </p>
                                    )}
                                </div>

                                <a
                                    href={plan.name === 'Business' ? '/contact' : '/signup'}
                                    className="btn"
                                    style={{
                                        width: '100%',
                                        marginBottom: '2rem',
                                        background: plan.popular ? plan.color : 'var(--surface)',
                                        color: plan.popular ? 'white' : 'var(--text)',
                                        border: plan.popular ? 'none' : '1px solid var(--border)',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {plan.cta}
                                </a>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {plan.features.map((feature, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                            <Check size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{feature}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feature, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', opacity: 0.4 }}>
                                            <div style={{
                                                width: '18px',
                                                height: '18px',
                                                border: '2px solid #EF4444',
                                                borderRadius: '50%',
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }} />
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '4rem 0', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { q: 'Can I change plans anytime?', a: 'Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately.' },
                            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for Business plans.' },
                            { q: 'Is there a free trial?', a: 'Yes! The Free plan gives you 3 AI diagnoses to try out our platform. Pro plan includes a 14-day trial.' },
                            { q: 'What happens if I exceed my limits?', a: 'You can purchase additional credits or upgrade to a higher plan anytime.' }
                        ].map((faq, i) => (
                            <div key={i} className="card" style={{ padding: '1.5rem' }}>
                                <h4 style={{ marginBottom: '0.75rem', color: 'var(--text)' }}>{faq.q}</h4>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const EarlyAccess = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="py-24 relative">
            <div className="container max-w-4xl mx-auto text-center">
                <div className="glass-panel p-12 relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--neon-purple)] rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[var(--neon-blue)] rounded-full blur-[100px] opacity-20"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to Future-Proof Your Garage?
                    </h2>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join the exclusive waitlist for GarageAI Enterprise. Get early access to advanced diagnostics, fleet management, and API integrations.
                    </p>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-4 rounded-xl inline-flex items-center gap-3"
                        >
                            <Check className="w-6 h-6" />
                            <span className="font-bold">You're on the list! We'll be in touch soon.</span>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your work email"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--neon-blue)] transition-colors pr-36"
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="absolute right-2 top-2 bottom-2 bg-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/90 text-black font-bold px-6 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-70"
                            >
                                {status === 'loading' ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    <>
                                        <span>Join</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    <p className="text-sm text-gray-500 mt-6">
                        Limited spots available for the beta program. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EarlyAccess;

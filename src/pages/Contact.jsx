import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        GET IN <span className="text-[var(--neon-blue)]">TOUCH</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-12">
                        Have questions about GarageAI? Our team is ready to help you transform your workshop.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[var(--neon-blue)]/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-[var(--neon-blue)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                                <p className="text-gray-400">101 Cyber Avenue, Tech District<br />Neo Tokyo, NT 2077</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[var(--neon-blue)]/10 flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-[var(--neon-blue)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email Us</h3>
                                <p className="text-gray-400">support@garageai.com<br />sales@garageai.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[var(--neon-blue)]/10 flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-[var(--neon-blue)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                                <p className="text-gray-400">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel p-8"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300">First Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-blue)] focus:outline-none transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300">Last Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-blue)] focus:outline-none transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-300">Email</label>
                            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-blue)] focus:outline-none transition-colors" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-300">Message</label>
                            <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--neon-blue)] focus:outline-none transition-colors" placeholder="How can we help?" />
                        </div>

                        <button type="submit" className="w-full bg-[var(--neon-blue)] text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_var(--neon-blue)] transition-all flex items-center justify-center gap-2">
                            SEND MESSAGE <Send className="w-4 h-4" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

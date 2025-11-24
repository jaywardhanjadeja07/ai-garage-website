import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Star } from 'lucide-react';

const AppShowcase = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    {/* Phone Mockup */}
                    <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                        <div className="w-full h-full bg-gray-900 relative">
                            {/* App Screen Content */}
                            <div className="p-6 pt-12 space-y-4">
                                <div className="flex justify-between items-center text-white">
                                    <span className="font-bold">GarageAI</span>
                                    <div className="w-8 h-8 rounded-full bg-[var(--neon-blue)]"></div>
                                </div>

                                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/5">
                                    <div className="text-xs text-gray-400 mb-1">Vehicle Status</div>
                                    <div className="text-xl font-bold text-white">All Systems Go</div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-[var(--neon-blue)]/20 rounded-xl p-4 border border-[var(--neon-blue)]/30">
                                        <div className="text-[var(--neon-blue)] font-bold">Scan</div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                        <div className="text-white font-bold">History</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[var(--neon-purple)] to-blue-600 rounded-xl p-4 mt-4 h-32 flex items-end">
                                    <span className="text-white font-bold">Premium Plan Active</span>
                                </div>
                            </div>

                            {/* Bottom Nav */}
                            <div className="absolute bottom-0 w-full h-16 bg-black/50 backdrop-blur-md border-t border-white/10 flex justify-around items-center px-4">
                                <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                <div className="w-6 h-6 rounded-full bg-[var(--neon-blue)] shadow-[0_0_10px_var(--neon-blue)]"></div>
                                <div className="w-6 h-6 rounded-full bg-white/20"></div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--neon-blue)] rounded-full blur-[120px] opacity-20 -z-10"></div>
                </div>

                <div className="order-1 lg:order-2 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-[var(--neon-blue)]">
                        <span className="w-2 h-2 rounded-full bg-[var(--neon-blue)] animate-pulse"></span>
                        COMING SOON TO IOS & ANDROID
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Your Mechanic,<br />
                        <span className="text-gradient">In Your Pocket.</span>
                    </h2>

                    <p className="text-lg text-gray-400">
                        Diagnose issues, track repairs, and manage your garage from anywhere.
                        The GarageAI mobile app brings the power of our desktop platform to your smartphone.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors opacity-50 cursor-not-allowed">
                            <Smartphone className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-[10px] uppercase tracking-wider">Download on the</div>
                                <div className="text-sm leading-none">App Store</div>
                            </div>
                        </button>

                        <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/5 transition-colors opacity-50 cursor-not-allowed">
                            <Download className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-[10px] uppercase tracking-wider">Get it on</div>
                                <div className="text-sm leading-none">Google Play</div>
                            </div>
                        </button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs text-white">
                                    U{i}
                                </div>
                            ))}
                        </div>
                        <p>Join 2,000+ users on the waitlist</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;

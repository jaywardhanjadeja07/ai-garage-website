import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

const AISearch = () => {
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsSearching(true);
        setResult(null);

        // Simulate AI processing
        setTimeout(() => {
            setIsSearching(false);
            setResult(generateMockResponse(query));
        }, 2000);
    };

    const generateMockResponse = (q) => {
        const lowerQ = q.toLowerCase();
        if (lowerQ.includes('start') || lowerQ.includes('battery')) {
            return {
                issue: 'Potential Battery or Alternator Failure',
                confidence: '94%',
                steps: ['Check battery voltage (should be >12.6V)', 'Inspect alternator belt tension', 'Scan for error code P0562'],
                parts: ['12V AGM Battery', 'Alternator Assembly'],
                cost: '$150 - $400'
            };
        } else if (lowerQ.includes('brake') || lowerQ.includes('squeak')) {
            return {
                issue: 'Worn Brake Pads / Rotors',
                confidence: '98%',
                steps: ['Inspect brake pad thickness', 'Check rotors for scoring', 'Check brake fluid level'],
                parts: ['Ceramic Brake Pads', 'Vented Rotors'],
                cost: '$200 - $500'
            };
        } else {
            return {
                issue: 'Complex Engine Anomaly Detected',
                confidence: '89%',
                steps: ['Connect OBD-II scanner', 'Check engine oil levels', 'Inspect spark plugs'],
                parts: ['Diagnostic Scan Required'],
                cost: 'Variable'
            };
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="relative group z-20">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex items-center bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                    <Search className="w-6 h-6 text-gray-400 ml-4" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Describe your car problem (e.g., 'Engine making clicking noise')..."
                        className="w-full bg-transparent border-none outline-none text-white px-4 py-4 text-lg placeholder-gray-500"
                    />
                    <button
                        type="submit"
                        disabled={isSearching}
                        className="bg-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/90 text-black font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSearching ? (
                            <Sparkles className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <span>Diagnose</span>
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            </form>

            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]" />

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertCircle className="w-6 h-6 text-[var(--neon-blue)]" />
                                    <h3 className="text-xl font-bold text-white">AI Diagnosis Result</h3>
                                    <span className="ml-auto text-xs font-mono text-[var(--neon-blue)] border border-[var(--neon-blue)]/30 px-2 py-1 rounded">
                                        CONFIDENCE: {result.confidence}
                                    </span>
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-2">{result.issue}</h4>
                                <p className="text-gray-400 mb-6">Based on your description, our AI engine has identified this as the most likely cause.</p>

                                <div className="space-y-3">
                                    <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wider">Recommended Actions</h5>
                                    {result.steps.map((step, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full md:w-64 bg-white/5 rounded-xl p-5 border border-white/10">
                                <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">Est. Repair Cost</h5>
                                <div className="text-3xl font-bold text-white mb-1">{result.cost}</div>
                                <div className="text-xs text-gray-500 mb-6">Includes parts & labor average</div>

                                <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Required Parts</h5>
                                <ul className="space-y-2 mb-6">
                                    {result.parts.map((part, i) => (
                                        <li key={i} className="text-sm text-[var(--neon-blue)]">• {part}</li>
                                    ))}
                                </ul>

                                <button className="w-full btn-primary text-sm">Find Mechanic</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AISearch;

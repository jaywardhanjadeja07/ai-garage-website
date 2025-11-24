import React, { useEffect } from 'react';

const AdUnit = ({ slot, format = 'auto', style = {} }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className="ad-container my-8 text-center relative group">
            {/* Hologram Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-black/80 border border-[var(--neon-blue)]/30 p-1">
                <div className="flex justify-between items-center px-2 py-1 bg-[var(--neon-blue)]/10 mb-1">
                    <span className="text-[10px] text-[var(--neon-blue)] tracking-widest uppercase font-mono">Sponsored Content</span>
                    <span className="w-1 h-1 bg-[var(--neon-blue)] rounded-full animate-pulse" />
                </div>

                <ins
                    className="adsbygoogle"
                    style={{ display: 'block', ...style }}
                    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                    data-ad-slot={slot || "1234567890"}
                    data-ad-format={format}
                    data-full-width-responsive="true"
                />
                {/* Fallback/Placeholder for development */}
                <div className="bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center min-h-[100px] flex items-center justify-center relative overflow-hidden group-hover:grayscale-0 grayscale transition-all duration-500">
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 border border-white/20 px-4 py-2 backdrop-blur-md">
                        <span className="text-[var(--neon-blue)] font-bold tracking-widest text-sm">ADVERTISEMENT_SLOT</span>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--neon-blue)]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--neon-blue)]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--neon-blue)]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--neon-blue)]" />
        </div>
    );
};

export default AdUnit;

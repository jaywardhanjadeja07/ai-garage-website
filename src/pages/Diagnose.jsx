import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { aiAPI } from '../services/api';
import { saveDiagnosis } from '../services/diagnosisService';
import DirectImageUpload from '../components/DirectImageUpload';
import { Sparkles, FileText, Upload, Send, AlertCircle, CheckCircle, Coins, PlayCircle, Gift } from 'lucide-react';

const Diagnose = () => {
    const { user, credits, deductCredit, addCredits } = useAuth();
    const [mode, setMode] = useState('text'); // 'text' or 'image'
    const [textInput, setTextInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [watchingAd, setWatchingAd] = useState(false);

    const handleTextDiagnose = async (e) => {
        e.preventDefault();
        if (!textInput.trim()) return;
        if (credits <= 0) {
            setError('You have no credits left. Watch an ad or purchase more credits.');
            return;
        }

        setError('');
        setLoading(true);
        setResult(null);

        try {
            const { data } = await aiAPI.diagnose({ description: textInput });
            setResult(data);
            await deductCredit();

            // Save to Firestore (without image)
            await saveDiagnosis(user.uid, {
                symptoms: textInput,
                diagnosis: data,
                imageUrls: []
            });

            setTextInput('');
        } catch (err) {
            setError(err.response?.data?.error || 'Diagnosis failed');
        } finally {
            setLoading(false);
        }
    };

    const handleImageDiagnosisComplete = async (diagnosisData) => {
        try {
            setResult(diagnosisData);
            await deductCredit();

            // Save to Firestore (without image)
            await saveDiagnosis(user.uid, {
                symptoms: 'Image-based diagnosis',
                diagnosis: diagnosisData,
                imageUrls: []
            });
        } catch (err) {
            setError('Failed to save diagnosis');
        }
    };

    const handleWatchAd = async () => {
        setWatchingAd(true);
        setError('');

        // Simulate ad watching (replace with real ad SDK)
        setTimeout(async () => {
            try {
                // Reward user with 1 credit
                await addCredits(1);
                alert('🎉 You earned 1 free credit! Thank you for watching the ad.');
            } catch (error) {
                setError('Failed to add credit. Please try again.');
            } finally {
                setWatchingAd(false);
            }
        }, 3000); // 3 second simulated ad

        // TODO: Replace above with real ad implementation:
        // if (window.adsbygoogle) {
        //     // Google AdSense rewarded ad
        // } or AdMob SDK for rewarded video ads
    };

    return (
        <div style={{ minHeight: '80vh', paddingTop: '3rem', paddingBottom: '3rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '9999px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                        <Sparkles size={16} />
                        AI-Powered Diagnosis
                    </div>
                    <h1 style={{ marginBottom: '1rem' }}>Diagnose Your Car Problem</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                        Describe the issue or upload a photo, and our AI will analyze it instantly
                    </p>
                    <div className="badge badge-primary" style={{ marginTop: '1rem' }}>
                        <Coins size={14} />
                        {credits} credits remaining
                    </div>
                </div>

                {/* Earn Credits Section */}
                {credits <= 2 && (
                    <div className="card" style={{
                        marginBottom: '2rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                background: 'rgba(255,255,255,0.2)',
                                padding: '0.75rem',
                                borderRadius: '50%'
                            }}>
                                <Gift size={24} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ margin: 0, marginBottom: '0.25rem', fontSize: '1.1rem' }}>Need More Credits?</h3>
                                <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
                                    Watch a quick ad to earn 1 free credit instantly!
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleWatchAd}
                            disabled={watchingAd}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1.5rem',
                                background: 'white',
                                color: '#667eea',
                                border: 'none',
                                borderRadius: 'var(--radius)',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: watchingAd ? 'not-allowed' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                transition: 'transform 0.2s',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                            onMouseOver={(e) => !watchingAd && (e.target.style.transform = 'translateY(-2px)')}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            {watchingAd ? (
                                <>
                                    <Sparkles size={18} className="animate-spin" />
                                    Watching Ad...
                                </>
                            ) : (
                                <>
                                    <PlayCircle size={18} />
                                    Watch Ad - Earn 1 Credit
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* Mode Selector */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <button
                        onClick={() => setMode('text')}
                        className={mode === 'text' ? 'btn btn-primary' : 'btn btn-secondary'}
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '1rem'
                        }}
                    >
                        <FileText size={20} />
                        <span style={{ fontWeight: 600 }}>Text Description</span>
                    </button>
                    <button
                        onClick={() => setMode('image')}
                        className={mode === 'image' ? 'btn btn-primary' : 'btn btn-secondary'}
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '1rem'
                        }}
                    >
                        <Upload size={20} />
                        <span style={{ fontWeight: 600 }}>Image Upload</span>
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius)', marginBottom: '2rem', color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AlertCircle size={18} />
                        {error}
                    </div>
                )}

                {/* Input Forms */}
                <div className="card" style={{ marginBottom: '2rem' }}>
                    {mode === 'text' ? (
                        <form onSubmit={handleTextDiagnose}>
                            <label>Describe the problem</label>
                            <textarea
                                value={textInput}
                                onChange={(e) => setTextInput(e.target.value)}
                                placeholder="E.g., My car makes a squeaking noise when I brake, and the steering wheel vibrates..."
                                rows={6}
                                style={{ marginBottom: '1rem' }}
                                required
                            />
                            <button type="submit" className="btn btn-primary" disabled={loading || credits <= 0} style={{ width: '100%' }}>
                                {loading ? (
                                    <>
                                        <Sparkles size={18} className="animate-spin" />
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Diagnose ({credits > 0 ? '1 credit' : 'No credits'})
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <DirectImageUpload onDiagnosisComplete={handleImageDiagnosisComplete} />
                    )}
                </div>

                {/* Results */}
                {result && (
                    <div className="card fade-in">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                            <CheckCircle size={24} color="var(--success)" />
                            <h2 style={{ margin: 0 }}>Diagnosis Complete</h2>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Problem Identified</h3>
                            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)' }}>{result.diagnosis || result.assessment}</p>
                        </div>

                        {result.confidence && (
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Confidence</span>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)' }}>{Math.round(result.confidence * 100)}%</span>
                                </div>
                                <div style={{ height: '8px', background: 'var(--background)', borderRadius: '9999px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${result.confidence * 100}%`, background: 'var(--primary)', borderRadius: '9999px' }} />
                                </div>
                            </div>
                        )}

                        {result.recommendations && result.recommendations.length > 0 && (
                            <div>
                                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Recommendations</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {result.recommendations.map((rec, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem', flexShrink: 0 }} />
                                            <span style={{ color: 'var(--text-secondary)' }}>{rec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Diagnose;

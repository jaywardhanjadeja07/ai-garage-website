import React, { useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { aiAPI } from '../services/api';

const DirectImageUpload = ({ onDiagnosisComplete }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setError('Please select an image file');
            return;
        }

        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            setError('Image must be less than 5MB');
            return;
        }

        setError('');
        setSelectedImage(file);

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleDiagnose = async () => {
        if (!selectedImage) {
            setError('Please select an image first');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Create FormData for image upload
            const formData = new FormData();
            formData.append('image', selectedImage);

            // Send to AI API for damage assessment
            const response = await aiAPI.assessDamage(formData);

            // Call parent callback with result
            if (onDiagnosisComplete) {
                onDiagnosisComplete(response.data);
            }

            // Clear image after successful diagnosis
            setSelectedImage(null);
            setPreview(null);
        } catch (error) {
            console.error('Diagnosis error:', error);
            setError(error.response?.data?.error || 'Failed to analyze image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const clearImage = () => {
        setSelectedImage(null);
        setPreview(null);
        setError('');
    };

    return (
        <div style={{ width: '100%' }}>
            {!preview ? (
                // Upload Section
                <div>
                    <label
                        htmlFor="image-upload"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '3rem 2rem',
                            border: '2px dashed var(--border)',
                            borderRadius: 'var(--radius)',
                            cursor: 'pointer',
                            backgroundColor: '#f8f9fa',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <Camera size={64} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                        <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                            Take or Upload Photo
                        </p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            Click to capture or select an image of your car issue
                        </p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                            JPG, PNG, or WebP • Max 5MB
                        </p>
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleImageSelect}
                        style={{ display: 'none' }}
                    />
                </div>
            ) : (
                // Preview & Diagnose Section
                <div>
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                        <img
                            src={preview}
                            alt="Selected"
                            style={{
                                width: '100%',
                                maxHeight: '400px',
                                objectFit: 'contain',
                                borderRadius: 'var(--radius)',
                                border: '1px solid var(--border)'
                            }}
                        />
                        <button
                            onClick={clearImage}
                            disabled={loading}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'rgba(0,0,0,0.7)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white'
                            }}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <button
                        onClick={handleDiagnose}
                        disabled={loading}
                        className="btn btn-primary"
                        style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
                    >
                        {loading ? (
                            <span>🔍 Analyzing Image...</span>
                        ) : (
                            <span>🚗 Diagnose Issue</span>
                        )}
                    </button>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div style={{
                    marginTop: '1rem',
                    padding: '0.75rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--danger)'
                }}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default DirectImageUpload;

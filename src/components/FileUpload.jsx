import React, { useState, useRef } from 'react';
import { Upload, X, ImageIcon } from 'lucide-react';
import { uploadFileWithProgress } from '../services/storage';

const FileUpload = ({
    onUploadComplete,
    maxFiles = 5,
    maxSizeMB = 5,
    acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'],
    storagePath = 'uploads'
}) => {
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const validateFile = (file) => {
        // Check file type
        if (!acceptedTypes.includes(file.type)) {
            return `Invalid file type. Accepted: ${acceptedTypes.join(', ')}`;
        }

        // Check file size
        const fileSizeMB = file.size / (1024 * 1024);
        if (fileSizeMB > maxSizeMB) {
            return `File size must be less than ${maxSizeMB}MB`;
        }

        return null;
    };

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setError('');

        if (files.length + selectedFiles.length > maxFiles) {
            setError(`Maximum ${maxFiles} files allowed`);
            return;
        }

        const validFiles = [];
        const newPreviews = [];

        for (const file of selectedFiles) {
            const validationError = validateFile(file);
            if (validationError) {
                setError(validationError);
                return;
            }

            validFiles.push(file);

            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                newPreviews.push({
                    file,
                    url: reader.result,
                    name: file.name
                });

                if (newPreviews.length === selectedFiles.length) {
                    setPreviews([...previews, ...newPreviews]);
                }
            };
            reader.readAsDataURL(file);
        }

        setFiles([...files, ...validFiles]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const droppedFiles = Array.from(e.dataTransfer.files);
        const event = { target: { files: droppedFiles } };
        handleFileSelect(event);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const removeFile = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        const newPreviews = previews.filter((_, i) => i !== index);
        setFiles(newFiles);
        setPreviews(newPreviews);
    };

    const handleUpload = async () => {
        if (files.length === 0) {
            setError('Please select at least one file');
            return;
        }

        setUploading(true);
        setError('');
        const uploadedUrls = [];

        try {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileName = `${Date.now()}_${file.name}`;
                const path = `${storagePath}/${fileName}`;

                const url = await uploadFileWithProgress(
                    file,
                    path,
                    (progress) => {
                        setUploadProgress(prev => ({
                            ...prev,
                            [i]: progress
                        }));
                    }
                );

                uploadedUrls.push(url);
            }

            // Clear files after successful upload
            setFiles([]);
            setPreviews([]);
            setUploadProgress({});

            // Call callback with URLs
            if (onUploadComplete) {
                onUploadComplete(uploadedUrls);
            }
        } catch (error) {
            setError(`Upload failed: ${error.message}`);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{ width: '100%' }}>
            {/* Drop Zone */}
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
                style={{
                    border: '2px dashed var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: '2rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#f8f9fa',
                    transition: 'all 0.3s ease'
                }}
            >
                <Upload size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
                <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
                    Click to upload or drag and drop
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Maximum {maxFiles} files, up to {maxSizeMB}MB each
                </p>
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept={acceptedTypes.join(',')}
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}
                />
            </div>

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

            {/* Preview Grid */}
            {previews.length > 0 && (
                <div style={{ marginTop: '1.5rem' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                        gap: '1rem'
                    }}>
                        {previews.map((preview, index) => (
                            <div key={index} style={{ position: 'relative' }}>
                                <img
                                    src={preview.url}
                                    alt={preview.name}
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'cover',
                                        borderRadius: 'var(--radius)',
                                        border: '1px solid var(--border)'
                                    }}
                                />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFile(index);
                                    }}
                                    style={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '0.5rem',
                                        background: 'rgba(0,0,0,0.7)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '28px',
                                        height: '28px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white'
                                    }}
                                    disabled={uploading}
                                >
                                    <X size={16} />
                                </button>

                                {/* Upload Progress */}
                                {uploading && uploadProgress[index] !== undefined && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(0,0,0,0.7)',
                                        color: 'white',
                                        padding: '0.5rem',
                                        borderBottomLeftRadius: 'var(--radius)',
                                        borderBottomRightRadius: 'var(--radius)',
                                        fontSize: '0.75rem',
                                        textAlign: 'center'
                                    }}>
                                        {uploadProgress[index]}%
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Upload Button */}
                    <button
                        onClick={handleUpload}
                        disabled={uploading || files.length === 0}
                        className="btn btn-primary"
                        style={{ marginTop: '1rem', width: '100%' }}
                    >
                        {uploading ? 'Uploading...' : `Upload ${files.length} file${files.length > 1 ? 's' : ''}`}
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;

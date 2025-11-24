import React from 'react';
import { Clock, FileText } from 'lucide-react';

const History = () => {
    // In a real app, you'd fetch history from the API
    const [history] = React.useState([]);

    return (
        <div style={{ minHeight: '80vh', paddingTop: '3rem', paddingBottom: '3rem' }}>
            <div className="container">
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ marginBottom: '0.5rem' }}>Diagnosis History</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>View all your past car diagnoses</p>
                </div>

                {history.length === 0 ? (
                    <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                        <Clock size={48} color="var(--text-light)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ color: 'var(--text-secondary)' }}>No history yet</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                            Your past diagnoses will appear here
                        </p>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {history.map((item, i) => (
                            <div key={i} className="card">
                                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <FileText size={24} color="var(--primary)" />
                                        <div>
                                            <h4 style={{ marginBottom: '0.25rem' }}>{item.type}</h4>
                                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{new Date(item.timestamp).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <button className="btn btn-secondary">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default History;

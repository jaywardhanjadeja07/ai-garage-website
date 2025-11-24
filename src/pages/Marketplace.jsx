import React, { useState, useEffect } from 'react';
import { marketplaceAPI } from '../services/api';
import { ShoppingBag, Search } from 'lucide-react';

const Marketplace = () => {
    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchParts();
    }, []);

    const fetchParts = async () => {
        try {
            const { data } = await marketplaceAPI.getParts();
            setParts(data);
        } catch (error) {
            console.error('Failed to fetch parts:', error);
        } finally {
            setLoading(false);
        }
    };

    const filtered = parts.filter(part =>
        part.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ minHeight: '80vh', paddingTop: '3rem', paddingBottom: '3rem' }}>
            <div className="container">
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ marginBottom: '0.5rem' }}>Parts Marketplace</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Find and order genuine car parts</p>
                </div>

                {/* Search */}
                <div style={{ position: 'relative', marginBottom: '2rem' }}>
                    <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                    <input
                        type="text"
                        placeholder="Search parts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ paddingLeft: '3rem' }}
                    />
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>Loading parts...</div>
                ) : filtered.length === 0 ? (
                    <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                        <ShoppingBag size={48} color="var(--text-light)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ color: 'var(--text-secondary)' }}>No parts found</h3>
                        <p style={{ color: 'var(--text-light)' }}>Try a different search term</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {filtered.map(part => (
                            <div key={part.sku} className="card">
                                <div style={{ width: '100%', height: '200px', background: 'var(--background)', borderRadius: 'var(--radius)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {part.images?.[0] ? (
                                        <img src={part.images[0]} alt={part.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius)' }} />
                                    ) : (
                                        <ShoppingBag size={48} color="var(--text-light)" />
                                    )}
                                </div>
                                <h4 style={{ marginBottom: '0.5rem' }}>{part.title}</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                                    {part.description?.substring(0, 80)}...
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>
                                        ${part.price}
                                    </span>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Marketplace;

import React, { useState, useEffect } from 'react';
import { partnerAPI, bookingAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { MapPin, Star, Calendar } from 'lucide-react';

const Garages = () => {
    const { user } = useAuth();
    const [garages, setGarages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGarage, setSelectedGarage] = useState(null);
    const [bookingData, setBookingData] = useState({ service_type: '', slot_time: '' });

    useEffect(() => {
        fetchGarages();
    }, []);

    const fetchGarages = async () => {
        try {
            const { data } = await partnerAPI.getGarages();
            setGarages(data);
        } catch (error) {
            console.error('Failed to fetch garages:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            await bookingAPI.create({
                partner_id: selectedGarage.id,
                ...bookingData
            });
            alert('Booking confirmed!');
            setSelectedGarage(null);
            setBookingData({ service_type: '', slot_time: '' });
        } catch (error) {
            alert('Booking failed: ' + (error.response?.data?.error || 'Unknown error'));
        }
    };

    return (
        <div style={{ minHeight: '80vh', paddingTop: '3rem', paddingBottom: '3rem' }}>
            <div className="container">
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ marginBottom: '0.5rem' }}>Partner Garages</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Find trusted mechanics near you</p>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>Loading garages...</div>
                ) : garages.length === 0 ? (
                    <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                        <MapPin size={48} color="var(--text-light)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ color: 'var(--text-secondary)' }}>No garages found</h3>
                        <p style={{ color: 'var(--text-light)' }}>Check back soon for partner garages</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {garages.map(garage => (
                            <div key={garage.id} className="card">
                                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius)', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <MapPin size={28} color="var(--primary)" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginBottom: '0.25rem' }}>{garage.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <Star size={16} color="#F59E0B" fill="#F59E0B" />
                                            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{garage.rating || 'N/A'}</span>
                                        </div>
                                    </div>
                                </div>

                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                    {garage.address}
                                </p>

                                {garage.services && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                        {garage.services.slice(0, 3).map((service, i) => (
                                            <span key={i} className="badge">{service}</span>
                                        ))}
                                    </div>
                                )}

                                <button
                                    onClick={() => setSelectedGarage(garage)}
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                >
                                    <Calendar size={16} />
                                    Book Appointment
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Booking Modal */}
                {selectedGarage && (
                    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }} onClick={() => setSelectedGarage(null)}>
                        <div className="card" style={{ maxWidth: '500px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
                            <h2 style={{ marginBottom: '1.5rem' }}>Book at {selectedGarage.name}</h2>
                            <form onSubmit={handleBooking}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label>Service Type</label>
                                    <input
                                        type="text"
                                        value={bookingData.service_type}
                                        onChange={(e) => setBookingData({ ...bookingData, service_type: e.target.value })}
                                        placeholder="e.g., Oil Change, Brake Repair"
                                        required
                                    />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label>Preferred Date & Time</label>
                                    <input
                                        type="datetime-local"
                                        value={bookingData.slot_time}
                                        onChange={(e) => setBookingData({ ...bookingData, slot_time: e.target.value })}
                                        required
                                    />
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button type="button" onClick={() => setSelectedGarage(null)} className="btn btn-secondary" style={{ flex: 1 }}>Cancel</button>
                                    <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Confirm Booking</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Garages;

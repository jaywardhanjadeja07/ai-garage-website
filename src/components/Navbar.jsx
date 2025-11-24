import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Zap, LogOut, Coins } from 'lucide-react';

const Navbar = () => {
    const { user, credits, isAuthenticated, logout } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '70px'
            }}>
                {/* Logo */}
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'var(--text)'
                }}>
                    <img src="/logo.png" alt="GarageAI Logo" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        objectFit: 'cover'
                    }} />
                    <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>GarageAI</span>
                </Link>

                {/* Nav Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {isAuthenticated ? (
                        <>
                            <Link
                                to="/dashboard"
                                style={{
                                    textDecoration: 'none',
                                    color: isActive('/dashboard') ? 'var(--primary)' : 'var(--text-secondary)',
                                    fontWeight: 600,
                                    fontSize: '0.875rem'
                                }}
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/diagnose"
                                style={{
                                    textDecoration: 'none',
                                    color: isActive('/diagnose') ? 'var(--primary)' : 'var(--text-secondary)',
                                    fontWeight: 600,
                                    fontSize: '0.875rem'
                                }}
                            >
                                Diagnose
                            </Link>
                            <Link
                                to="/marketplace"
                                style={{
                                    textDecoration: 'none',
                                    color: isActive('/marketplace') ? 'var(--primary)' : 'var(--text-secondary)',
                                    fontWeight: 600,
                                    fontSize: '0.875rem'
                                }}
                            >
                                Marketplace
                            </Link>
                            <Link
                                to="/garages"
                                style={{
                                    textDecoration: 'none',
                                    color: isActive('/garages') ? 'var(--primary)' : 'var(--text-secondary)',
                                    fontWeight: 600,
                                    fontSize: '0.875rem'
                                }}
                            >
                                Garages
                            </Link>

                            {/* Credits Badge */}
                            <div className="badge badge-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <Coins size={14} />
                                <span>{credits} credits</span>
                            </div>

                            {/* User Menu */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.875rem'
                                }}>
                                    {user?.name?.[0]?.toUpperCase() || 'U'}
                                </div>
                                <button
                                    onClick={logout}
                                    className="btn btn-secondary"
                                    style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
                                >
                                    <LogOut size={14} />
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/features" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.875rem' }}>
                                Features
                            </Link>
                            <Link to="/pricing" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.875rem' }}>
                                Pricing
                            </Link>
                            <Link to="/blog" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.875rem' }}>
                                Blog
                            </Link>
                            <Link to="/login" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.875rem' }}>
                                Login
                            </Link>
                            <Link to="/signup" className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.5rem 1.25rem' }}>
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

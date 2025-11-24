import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--text)', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    {/* Brand Section */}
                    <div>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'white', marginBottom: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Zap size={24} color="white" fill="white" />
                            </div>
                            <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>GarageAI</span>
                        </Link>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            AI-powered car diagnostics and complete auto care platform. Trusted by thousands of car owners.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}>
                                <Facebook size={18} color="white" />
                            </a>
                            <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}>
                                <Twitter size={18} color="white" />
                            </a>
                            <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}>
                                <Instagram size={18} color="white" />
                            </a>
                            <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}>
                                <Linkedin size={18} color="white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 600 }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/features" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>Features</Link></li>
                            <li><Link to="/how-it-works" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>How It Works</Link></li>
                            <li><Link to="/pricing" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>Pricing</Link></li>
                            <li><Link to="/blog" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>Blog</Link></li>
                            <li><Link to="/contact" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 600 }}>Resources</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Help Center</a></li>
                            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>API Documentation</a></li>
                            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Privacy Policy</a></li>
                            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Terms of Service</a></li>
                            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Community</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 600 }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                <Mail size={18} style={{ marginTop: '2px', flexShrink: 0 }} color="rgba(255, 255, 255, 0.7)" />
                                <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>support@garageai.com</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                <Phone size={18} style={{ marginTop: '2px', flexShrink: 0 }} color="rgba(255, 255, 255, 0.7)" />
                                <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>+1 (555) 123-4567</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                <MapPin size={18} style={{ marginTop: '2px', flexShrink: 0 }} color="rgba(255, 255, 255, 0.7)" />
                                <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                                    123 Tech Street<br />
                                    San Francisco, CA 94105
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem', margin: 0 }}>
                        © {new Date().getFullYear()} GarageAI. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.75rem' }}>Privacy</a>
                        <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.75rem' }}>Terms</a>
                        <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.75rem' }}>Cookies</a>
                        <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.75rem' }}>Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

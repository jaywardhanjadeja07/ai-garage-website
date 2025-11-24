import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'How AI is Revolutionizing Car Diagnostics',
            excerpt: 'Discover how artificial intelligence is transforming the way we diagnose and fix vehicle problems, making car maintenance easier and more accurate than ever.',
            author: 'Sarah Johnson',
            date: 'Nov 20, 2024',
            category: 'Technology',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop',
            featured: true
        },
        {
            title: '10 Signs Your Car Needs Immediate Attention',
            excerpt: 'Learn to recognize the warning signs that indicate your vehicle needs professional care before small issues become major problems.',
            author: 'Mike Chen',
            date: 'Nov 18, 2024',
            category: 'Maintenance',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop'
        },
        {
            title: 'The Ultimate Guide to OBD-II Scanners',
            excerpt: 'Everything you need to know about OBD-II diagnostic tools, from basic code readers to advanced telemetry systems.',
            author: 'Alex Rivera',
            date: 'Nov 15, 2024',
            category: 'How-To',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=500&fit=crop'
        },
        {
            title: 'Finding the Right Mechanic: A Complete Guide',
            excerpt: 'Tips and tricks for locating trustworthy mechanics in your area and getting the best service for your vehicle.',
            author: 'Emma Davis',
            date: 'Nov 12, 2024',
            category: 'Tips',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=500&fit=crop'
        },
        {
            title: 'Understanding Your Vehicle Warranty',
            excerpt: 'Navigate the complexities of car warranties and learn what is and isn\'t covered to make informed maintenance decisions.',
            author: 'David Park',
            date: 'Nov 10, 2024',
            category: 'Finance',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=500&fit=crop'
        },
        {
            title: 'Electric Vehicles: Maintenance Tips',
            excerpt: 'Specialized maintenance advice for electric vehicle owners to keep their cars running smoothly and efficiently.',
            author: 'Lisa Wong',
            date: 'Nov 8, 2024',
            category: 'Electric',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop'
        }
    ];

    const categories = ['All', 'Technology', 'Maintenance', 'How-To', 'Tips', 'Finance', 'Electric'];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            {/* Hero */}
            <section style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                paddingTop: '6rem',
                paddingBottom: '4rem'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        color: 'white'
                    }}>
                        GarageAI Blog
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.95
                    }}>
                        Expert insights, tips, and guides for car owners and automotive enthusiasts
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section style={{ padding: '2rem 0', background: 'white', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={i === 0 ? 'btn btn-primary' : 'btn btn-secondary'}
                                style={{ fontSize: '0.875rem' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {posts.filter(p => p.featured).map((post, i) => (
                <section key={i} style={{ padding: '4rem 0' }}>
                    <div className="container">
                        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                <div style={{
                                    height: '400px',
                                    background: `url(${post.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }} />
                                <div style={{ padding: '3rem' }}>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.25rem 0.75rem',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        marginBottom: '1.5rem'
                                    }}>
                                        FEATURED
                                    </div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{post.title}</h2>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                        {post.excerpt}
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <User size={16} />
                                            {post.author}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Calendar size={16} />
                                            {post.date}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Clock size={16} />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-primary">
                                        Read Article <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Blog Grid */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem' }}>Latest Articles</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                        {posts.filter(p => !p.featured).map((post, i) => (
                            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                                <div style={{
                                    height: '200px',
                                    background: `url(${post.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        left: '1rem',
                                        padding: '0.25rem 0.75rem',
                                        background: 'white',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        color: 'var(--primary)'
                                    }}>
                                        {post.category}
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{post.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                        {post.excerpt.substring(0, 100)}...
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                                        <span>{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Read More <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Never Miss an Update</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95 }}>
                        Subscribe to our newsletter for the latest automotive insights and tips
                    </p>
                    <form style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: '1rem',
                                borderRadius: 'var(--radius)',
                                border: 'none',
                                fontSize: '1rem'
                            }}
                        />
                        <button className="btn" style={{ background: 'white', color: '#667eea', fontWeight: 700 }}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Blog;

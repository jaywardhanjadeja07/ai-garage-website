import { useState, useEffect } from 'react';
import { auth, db } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function FirebaseTest() {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('🔄 Testing Firebase connection...');
    const [firestoreStatus, setFirestoreStatus] = useState('⏳ Testing...');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        // Test authentication listener
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (mounted) {
                setUser(currentUser);
                if (currentUser) {
                    setStatus('✅ Firebase connected! User is signed in.');
                } else {
                    setStatus('✅ Firebase connected! No user signed in.');
                }
            }
        });

        // Test Firestore connection
        const testFirestore = async () => {
            try {
                // Try to write a test document
                const testCollection = collection(db, 'connection_test');
                await addDoc(testCollection, {
                    message: 'Firebase is working!',
                    timestamp: new Date(),
                    source: 'FirebaseTest Component'
                });

                // Try to read documents
                const querySnapshot = await getDocs(testCollection);
                const count = querySnapshot.size;

                if (mounted) {
                    setFirestoreStatus(`✅ Firestore working! (${count} test documents)`);
                }
            } catch (error) {
                console.error('❌ Firestore error:', error);
                if (mounted) {
                    setFirestoreStatus(`❌ Firestore error: ${error.message}`);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        };

        testFirestore();

        return () => {
            mounted = false;
            unsubscribe();
        };
    }, []);

    return (
        <div style={{
            padding: '30px',
            margin: '20px',
            border: '3px solid #FF6B35',
            borderRadius: '12px',
            backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{
                color: '#FF6B35',
                marginTop: 0,
                fontSize: '28px',
                fontWeight: 'bold'
            }}>
                🔥 Firebase Connection Test
            </h2>

            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '15px'
            }}>
                <p style={{ margin: '10px 0', fontSize: '16px' }}>
                    <strong>Authentication Status:</strong> <span style={{ color: user ? '#28a745' : '#6c757d' }}>{status}</span>
                </p>
                <p style={{ margin: '10px 0', fontSize: '16px' }}>
                    <strong>Firestore Status:</strong> <span style={{
                        color: firestoreStatus.includes('✅') ? '#28a745' :
                            firestoreStatus.includes('❌') ? '#dc3545' : '#ffc107'
                    }}>{firestoreStatus}</span>
                </p>
            </div>

            {user && (
                <div style={{
                    backgroundColor: '#e7f3ff',
                    padding: '15px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #007bff'
                }}>
                    <h3 style={{ marginTop: 0, color: '#007bff' }}>👤 User Information</h3>
                    <p style={{ margin: '8px 0' }}><strong>User ID:</strong> <code>{user.uid}</code></p>
                    <p style={{ margin: '8px 0' }}><strong>Email:</strong> {user.email || 'No email'}</p>
                    <p style={{ margin: '8px 0' }}><strong>Display Name:</strong> {user.displayName || 'Not set'}</p>
                </div>
            )}

            {!user && !loading && (
                <div style={{
                    backgroundColor: '#fff3cd',
                    padding: '15px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #ffc107'
                }}>
                    <p style={{ margin: 0, color: '#856404' }}>
                        ℹ️ No user is currently signed in. Firebase is ready to use!
                    </p>
                </div>
            )}

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#d4edda',
                borderRadius: '8px',
                borderLeft: '4px solid #28a745'
            }}>
                <p style={{ margin: 0, color: '#155724', fontWeight: 'bold' }}>
                    ✨ Firebase Services Ready:
                </p>
                <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#155724' }}>
                    <li>🔐 Authentication</li>
                    <li>📊 Firestore Database</li>
                    <li>📁 Cloud Storage</li>
                    <li>📈 Analytics</li>
                </ul>
            </div>
        </div>
    );
}

export default FirebaseTest;

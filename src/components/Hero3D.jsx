import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Sphere, Float, Stars } from '@react-three/drei';

const RotatingRings = () => {
    const ring1 = useRef();
    const ring2 = useRef();
    const ring3 = useRef();
    const core = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (ring1.current) {
            ring1.current.rotation.x = t * 0.2;
            ring1.current.rotation.y = t * 0.1;
        }
        if (ring2.current) {
            ring2.current.rotation.x = t * 0.3 + 1;
            ring2.current.rotation.y = t * 0.2;
        }
        if (ring3.current) {
            ring3.current.rotation.x = t * 0.1;
            ring3.current.rotation.z = t * 0.2;
        }
        if (core.current) {
            core.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
        }
    });

    return (
        <group scale={1.5}>
            {/* Outer Ring */}
            <Torus ref={ring1} args={[2.5, 0.02, 16, 100]} rotation={[1, 0, 0]}>
                <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} wireframe />
            </Torus>

            {/* Middle Ring */}
            <Torus ref={ring2} args={[2, 0.05, 16, 100]}>
                <meshStandardMaterial color="#bc13fe" emissive="#bc13fe" emissiveIntensity={1.5} wireframe />
            </Torus>

            {/* Inner Ring */}
            <Torus ref={ring3} args={[1.5, 0.08, 16, 100]} rotation={[0, 1, 0]}>
                <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
            </Torus>

            {/* Core */}
            <Sphere ref={core} args={[0.8, 32, 32]}>
                <meshStandardMaterial color="#ffffff" emissive="#00f3ff" emissiveIntensity={4} wireframe />
            </Sphere>

            {/* Particles */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-full absolute top-0 right-0 z-0 opacity-80">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <RotatingRings />
                </Float>
            </Canvas>
        </div>
    );
};

export default Hero3D;

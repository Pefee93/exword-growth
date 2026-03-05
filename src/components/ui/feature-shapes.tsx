"use client";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const ShapeOne = () => {
    // Topo/Fluid landscape representing AEO content
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[1.5, 32, 32]} scale={[1, 0.4, 1]}>
                <MeshDistortMaterial
                    color="#ffffff"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.7}
                />
            </Sphere>
        </Float>
    );
};

const ShapeTwo = () => {
    // Intersecting fluid organic rings representing Community
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
            group.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={group}>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                <Torus args={[1.2, 0.3, 16, 64]} rotation={[Math.PI / 4, 0, 0]}>
                    <meshPhysicalMaterial color="#c8a8e9" roughness={0.1} metalness={0.3} transmission={0.9} ior={1.5} transparent opacity={1} />
                </Torus>
                <Torus args={[1.2, 0.3, 16, 64]} rotation={[-Math.PI / 4, 0, 0]}>
                    <meshPhysicalMaterial color="#a8e9c8" roughness={0.1} metalness={0.3} transmission={0.9} ior={1.5} transparent opacity={1} />
                </Torus>
            </Float>
        </group>
    );
};

const ShapeThree = () => {
    // Geometric / Architectural blocks representing Web Journeys
    const group = useRef<THREE.Group>(null);
    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.002;
            group.current.rotation.x += 0.001;
        }
    });
    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={group}>
                <RoundedBox args={[1.5, 1.5, 1.5]} radius={0.05} smoothness={4}>
                    <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
                </RoundedBox>
                {/* Wireframe outline to give structural agency vibe */}
                <RoundedBox args={[1.7, 1.7, 1.7]} radius={0.05} smoothness={4}>
                    <meshBasicMaterial color="#000000" wireframe transparent opacity={0.1} />
                </RoundedBox>
            </group>
        </Float>
    );
};

const ShapeFour = () => {
    // Measurement / Floating data spheres
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.15;
            group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
                <Sphere args={[0.6, 32, 32]} position={[0.8, 0.8, 0]}>
                    <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0} ior={1.3} transparent opacity={1} />
                </Sphere>
                <Sphere args={[0.9, 32, 32]} position={[-0.4, -0.4, 0]}>
                    <meshStandardMaterial color="#1B0624" roughness={0.2} metalness={0.9} />
                </Sphere>
                <Sphere args={[0.3, 16, 16]} position={[1, -0.8, 0.5]}>
                    <meshStandardMaterial color="#888888" roughness={0.4} metalness={0.6} />
                </Sphere>
            </Float>
        </group>
    );
};

export function FeatureShapeCanvas({ index }: { index: number }) {
    return (
        <div className="w-full h-full bg-transparent cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#abcdef" />

                {index === 0 && <ShapeOne />}
                {index === 1 && <ShapeTwo />}
                {index === 2 && <ShapeThree />}
                {index === 3 && <ShapeFour />}
            </Canvas>
        </div>
    );
}

"use client";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, RoundedBox, Icosahedron, Octahedron, TorusKnot, Dodecahedron, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const ShapeOne = () => {
    // Abstract geometric - Vibrant nested Icosahedrons
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.x = state.clock.elapsedTime * 0.2;
            group.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <group ref={group}>
                <Icosahedron args={[1.2, 0]}>
                    <meshPhysicalMaterial color="#FF5722" wireframe thickness={2} roughness={0.2} metalness={0.8} />
                </Icosahedron>
                <Icosahedron args={[0.8, 0]}>
                    <meshPhysicalMaterial color="#FFC107" transmission={0.9} roughness={0.1} ior={1.5} transparent opacity={0.8} />
                </Icosahedron>
            </group>
        </Float>
    );
};

const ShapeTwo = () => {
    // TorusKnot for AI Search
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.x = state.clock.elapsedTime * 0.1;
            group.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
            <group ref={group}>
                <TorusKnot args={[0.8, 0.25, 128, 16]}>
                    <meshPhysicalMaterial color="#00BCD4" roughness={0.1} metalness={0.4} transmission={0.5} ior={1.2} clearcoat={1} />
                </TorusKnot>
            </group>
        </Float>
    );
};

const ShapeThree = () => {
    const group = useRef<THREE.Group>(null);
    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.005;
            group.current.rotation.z += 0.002;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
            <group ref={group}>
                <Octahedron args={[1.2, 0]} position={[0,0,0]}>
                    <meshStandardMaterial color="#9C27B0" roughness={0.3} metalness={0.7} />
                </Octahedron>
                <Octahedron args={[1.4, 0]} position={[0,0,0]}>
                    <meshBasicMaterial color="#E1BEE7" wireframe transparent opacity={0.3} />
                </Octahedron>
            </group>
        </Float>
    );
};

const ShapeFour = () => {
    // Dodecahedron for Intelligence & Monitoring
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
            group.current.rotation.y += 0.01;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <group ref={group}>
                <Dodecahedron args={[1.1, 0]}>
                    <meshPhysicalMaterial color="#4CAF50" transmission={0.9} roughness={0.1} ior={1.4} metalness={0.5} clearcoat={1} />
                </Dodecahedron>
                <Sphere args={[0.4, 32, 32]}>
                    <meshStandardMaterial color="#CDDC39" emissive="#CDDC39" emissiveIntensity={0.5} roughness={0.2} />
                </Sphere>
            </group>
        </Float>
    );
};

const ShapeFive = () => {
    // Reputation Management (Cubes / Blocks forming a shield-like abstract)
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.2;
            group.current.rotation.x = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <group ref={group}>
                <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.1} smoothness={4}>
                    <meshPhysicalMaterial color="#F44336" transmission={0.8} roughness={0.1} ior={1.3} metalness={0.2} transparent opacity={0.9} />
                </RoundedBox>
                <RoundedBox args={[1.4, 1.4, 1.4]} radius={0.1} smoothness={4}>
                    <meshBasicMaterial color="#FFCDD2" wireframe transparent opacity={0.5} />
                </RoundedBox>
            </group>
        </Float>
    );
};

const ShapeSix = () => {
    // YouTube Comment Marketing (Play button abstract)
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * -0.2;
            group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
            <group ref={group}>
                <Cylinder args={[0, 1, 1.5, 3]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#E91E63" roughness={0.2} metalness={0.8} />
                </Cylinder>
                <Cylinder args={[0, 1.2, 1.6, 3]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial color="#F8BBD0" wireframe transparent opacity={0.4} />
                </Cylinder>
            </group>
        </Float>
    );
};

export function FeatureShapeCanvas({ index, isActive }: { index: number, isActive: boolean }) {
    return (
        <div className="w-full h-full bg-transparent cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} frameloop={isActive ? 'always' : 'demand'}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#abcdef" />

                {index === 0 && <ShapeOne />}
                {index === 1 && <ShapeTwo />}
                {index === 2 && <ShapeThree />}
                {index === 3 && <ShapeFour />}
                {index === 4 && <ShapeFive />}
                {index === 5 && <ShapeSix />}
            </Canvas>
        </div>
    );
}

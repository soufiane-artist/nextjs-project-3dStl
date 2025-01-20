'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import styles from '../styles/Three.module.css';

function Form3D() {
  const ref = useRef();
  const { viewport } = useThree();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Dynamic rotation based on time
    ref.current.rotation.x = Math.sin(time * 0.3) * 0.5;
    ref.current.rotation.y += 0.007;
    ref.current.rotation.z = Math.cos(time * 0.2) * 0.3;
    
    // Wide-range movement pattern
    const xRange = viewport.width * 0.35; // 70% of screen width
    const yRange = viewport.height * 0.35; // 70% of screen height
    
    // Complex movement pattern using Lissajous curve
    ref.current.position.x = Math.sin(time * 0.4) * xRange;
    ref.current.position.y = Math.sin(time * 0.5 + Math.PI/4) * yRange;
    ref.current.position.z = Math.cos(time * 0.3) * 0.5;
  });

  return (
    <group ref={ref} scale={1.2}>
      <Icosahedron args={[1, 1]}>
        <meshPhysicalMaterial
          color={new THREE.Color("#ff7b00")}
          metalness={0.1}
          roughness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.6}
          thickness={0.5}
          transparent={true}
          opacity={0.8}
          iridescence={0.5}
          iridescenceIOR={1.5}
          sheen={0.4}
          sheenRoughness={0.2}
          sheenColor={new THREE.Color("#ffffff")}
          toneMapped={false}
          wireframe={true}
          wireframeLinewidth={1}
        />
      </Icosahedron>
      <Icosahedron args={[0.8, 1]}>
        <meshPhysicalMaterial
          color={new THREE.Color("#ff9e44")}
          metalness={0.1}
          roughness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.8}
          thickness={0.5}
          transparent={true}
          opacity={0.6}
          iridescence={0.5}
          iridescenceIOR={1.5}
          sheen={0.4}
          sheenRoughness={0.2}
          sheenColor={new THREE.Color("#ffffff")}
          toneMapped={false}
        />
      </Icosahedron>
    </group>
  );
}

export default function Three() {
  return (
    <div className={styles.canvasWrapper}>
      <Canvas 
        className={styles.canvas}
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ pointerEvents: 'none' }}
      >
        <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={2}
        />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00b4d8" />
        <spotLight
          position={[-10, 10, -10]}
          angle={0.4}
          penumbra={1}
          intensity={2}
          castShadow
          color="#ffffff"
        />
        <Form3D />
      </Canvas>
    </div>
  );
}

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Sphere, 
  Box, 
  Torus, 
  Text3D, 
  Float, 
  Environment, 
  OrbitControls,
  Stars,
  Sparkles,
  useTexture,
  Html,
  Text,
  RoundedBox,
  Cylinder,
  Octahedron,
} from '@react-three/drei';
import * as THREE from 'three';

// Interactive Floating Card
const FloatingCard = ({ position, rotation, scale, color, icon, title, description, index }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(time * 0.5 + index) * 0.1;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + index) * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position} scale={hovered ? scale * 1.1 : scale}>
        <RoundedBox
          args={[2, 1.5, 0.1]}
          radius={0.1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.9}
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>
        
        <Html
          position={[0, 0, 0.06]}
          center
          style={{
            width: '180px',
            height: '120px',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#1E293B',
            fontWeight: 600,
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
          <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{title}</div>
          <div style={{ fontSize: '10px', opacity: 0.7 }}>{description}</div>
        </Html>
      </group>
    </Float>
  );
};

// Animated Particles with Physics
const ParticleField = ({ count = 200 }) => {
  const mesh = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      mesh.current.geometry.attributes.position.array[i3 + 1] += Math.sin(time + i) * 0.01;
      mesh.current.geometry.attributes.position.array[i3] += Math.cos(time + i) * 0.005;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#A78BFA"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Floating 3D Elements with Interactions
const FloatingElement = ({ position, rotation, scale, color, geometry, index }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.3 + index) * 0.3;
    meshRef.current.rotation.y = Math.sin(time * 0.2 + index) * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + index) * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh 
        ref={meshRef} 
        position={position} 
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {geometry === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
        {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {geometry === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
        {geometry === 'cylinder' && <cylinderGeometry args={[0.5, 0.5, 1, 32]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[0.7]} />}
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7}
          metalness={0.9}
          roughness={0.1}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
    </Float>
  );
};

// Animated Background Grid
const BackgroundGrid = () => {
  const gridRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    gridRef.current.position.z = (time * 0.1) % 1;
  });

  return (
    <group ref={gridRef}>
      <gridHelper args={[50, 50, '#7C3AED', '#A78BFA']} position={[0, 0, -10]} />
    </group>
  );
};

// Main 3D Scene
const Scene = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    camera.position.x = Math.sin(time * 0.1) * 3;
    camera.position.z = Math.cos(time * 0.1) * 3;
    camera.lookAt(0, 0, 0);
  });

  const floatingCards = [
    { position: [4, 2, 0], color: '#7C3AED', icon: '🛡️', title: 'Security', description: 'Bank-level protection' },
    { position: [-3, -1, 2], color: '#A78BFA', icon: '⚡', title: 'Speed', description: 'Instant quotes' },
    { position: [2, -2, -2], color: '#F59E0B', icon: '💰', title: 'Savings', description: 'Best rates guaranteed' },
    { position: [-2, 3, -1], color: '#10B981', icon: '🎯', title: 'Smart', description: 'AI-powered matching' },
  ];

  return (
    <>
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#A78BFA" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FCD34D" />
      <pointLight position={[0, 10, 0]} intensity={0.6} color="#7C3AED" />
      
      {/* Background Elements */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <BackgroundGrid />
      
      {/* Particle Field */}
      <ParticleField count={300} />
      
      {/* Floating Cards */}
      {floatingCards.map((card, index) => (
        <FloatingCard key={index} {...card} index={index} />
      ))}
      
      {/* Floating Elements */}
      <FloatingElement
        position={[6, 4, 0]}
        scale={[0.6, 0.6, 0.6]}
        color="#7C3AED"
        geometry="sphere"
        index={0}
      />
      <FloatingElement
        position={[-4, -2, 3]}
        scale={[0.4, 0.4, 0.4]}
        color="#A78BFA"
        geometry="box"
        index={1}
      />
      <FloatingElement
        position={[3, -3, -3]}
        scale={[0.5, 0.5, 0.5]}
        color="#F59E0B"
        geometry="torus"
        index={2}
      />
      <FloatingElement
        position={[-3, 4, -2]}
        scale={[0.7, 0.7, 0.7]}
        color="#10B981"
        geometry="cylinder"
        index={3}
      />
      <FloatingElement
        position={[5, 1, 2]}
        scale={[0.3, 0.3, 0.3]}
        color="#EC4899"
        geometry="octahedron"
        index={4}
      />
      
      {/* Sparkles Effect */}
      <Sparkles 
        count={150} 
        scale={12} 
        size={2} 
        speed={0.4} 
        color="#A78BFA"
        opacity={0.7}
      />
      
      {/* Environment */}
      <Environment preset="city" />
    </>
  );
};

const ThreeDScene = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;

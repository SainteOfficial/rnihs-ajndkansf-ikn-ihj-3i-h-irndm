import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import * as THREE from 'three';

interface BallProps {
  isSpeaking: boolean;
  position?: [number, number, number];
  color?: string;
  scale?: number;
}

function Ball({ isSpeaking, position = [0, 0, 0], color = '#0078f2', scale = 1 }: BallProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [distortFactor, setDistortFactor] = useState(0.3);
  
  // Animate the distortion based on speech
  useEffect(() => {
    if (isSpeaking) {
      setDistortFactor(0.5);
    } else {
      setDistortFactor(0.3);
    }
  }, [isSpeaking]);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotate slowly
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    
    // Breathe effect - subtle scale changes
    const breatheScale = scale + Math.sin(state.clock.getElapsedTime()) * 0.03 * scale;
    meshRef.current.scale.set(breatheScale, breatheScale, breatheScale);
    
    // Adjust distortion speed based on speaking state
    const targetDistortion = isSpeaking ? 0.5 + Math.sin(state.clock.getElapsedTime() * 8) * 0.2 : 0.3;
    setDistortFactor(THREE.MathUtils.lerp(distortFactor, targetDistortion, 0.1));
  });

  return (
    <Sphere args={[1, 64, 64]} position={position} ref={meshRef} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distortFactor}
        speed={isSpeaking ? 3 : 1}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

interface InteractiveBallProps {
  isSpeaking: boolean;
  onClick?: () => void;
  size?: number;
}

function InteractiveBall({ isSpeaking, onClick, size = 300 }: InteractiveBallProps) {
  const { t } = useTranslation();
  
  return (
    <div 
      className="glowing-ball relative cursor-pointer" 
      onClick={onClick}
      style={{ 
        width: size, 
        height: size, 
        margin: '0 auto' 
      }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} color="#0067cf" />
        <pointLight position={[0, 0, 10]} intensity={0.5} color="#48b4ff" />
        <Ball isSpeaking={isSpeaking} color="#0078f2" scale={1.8} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}

export default InteractiveBall;
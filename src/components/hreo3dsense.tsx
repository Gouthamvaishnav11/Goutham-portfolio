import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null!);

  const particles = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x = mouse.y * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={particles}>
      <PointMaterial size={0.02} color="#00ffff" sizeAttenuation />
    </Points>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Particles />
    </Canvas>
  );
}
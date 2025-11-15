import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { Torus, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import { Eye } from 'lucide-react';

function FoodPlate() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Cylinder args={[2, 2.2, 0.3, 32]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </Cylinder>

      <Sphere args={[0.8, 32, 32]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#f59e0b" metalness={0.5} roughness={0.3} />
      </Sphere>

      <Sphere args={[0.4, 32, 32]} position={[-0.8, 0.2, 0.5]}>
        <meshStandardMaterial color="#ef4444" metalness={0.6} roughness={0.2} />
      </Sphere>

      <Sphere args={[0.35, 32, 32]} position={[0.9, 0.1, 0.3]}>
        <meshStandardMaterial color="#10b981" metalness={0.6} roughness={0.2} />
      </Sphere>

      <Torus args={[0.3, 0.1, 16, 32]} position={[0, 1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
      </Torus>

      <Cylinder args={[0.15, 0.15, 0.6, 16]} position={[0.5, 0.5, -0.8]} rotation={[0.3, 0, 0.3]}>
        <meshStandardMaterial color="#22c55e" metalness={0.4} roughness={0.4} />
      </Cylinder>
    </group>
  );
}

export default function Interactive3DFood() {
  const glbUrl = 'https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb';

  const handleViewInAR = () => {
    const sceneViewerUrl = `https://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(glbUrl)}&mode=ar_preferred`;
    window.open(sceneViewerUrl, '_blank');
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl p-8 border-2 border-slate-200 shadow-xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full mb-3">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-semibold">Interactive 3D Experience</span>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">
            Preview Your Dishes in 3D
          </h3>
          <p className="text-slate-600">
            Rotate and zoom to explore from every angle
          </p>
        </div>

        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 mb-6 border border-slate-200">
          <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />

              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
              <spotLight position={[-10, 10, -10]} angle={0.3} penumbra={1} intensity={0.5} castShadow />
              <pointLight position={[0, 10, 0]} intensity={0.8} color="#fbbf24" />

              <FoodPlate />

              <ContactShadows
                position={[0, -1, 0]}
                opacity={0.4}
                scale={10}
                blur={2}
                far={4}
              />

              <Environment preset="city" />

              <OrbitControls
                enableZoom={true}
                enablePan={false}
                minDistance={5}
                maxDistance={15}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Suspense>
          </Canvas>

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-200">
            <p className="text-xs font-semibold text-slate-700">Click and drag to rotate</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleViewInAR}
            className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            <Eye className="w-6 h-6" />
            <span>View in AR (Google Scene Viewer)</span>
          </button>

          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-600">
              Open on mobile to place in your space
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="text-2xl font-bold text-slate-900 mb-1">360°</div>
            <div className="text-sm text-slate-600">Full Rotation</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="text-2xl font-bold text-slate-900 mb-1">Zoom</div>
            <div className="text-sm text-slate-600">Every Detail</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="text-2xl font-bold text-slate-900 mb-1">AR</div>
            <div className="text-sm text-slate-600">Real Space</div>
          </div>
        </div>
      </div>
    </div>
  );
}

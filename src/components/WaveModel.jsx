import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Environment } from '@react-three/drei';
import "../css/Skills.css";

function Model() {
  const gltf = useLoader(GLTFLoader, '3d-models/Wave/Twister.glb')
  const mixer = useRef()

  const diffuse = new THREE.TextureLoader().load('3d-models/Wave/Diffuse.png');
  const roughnessMap = new THREE.TextureLoader().load('3d-models/Wave/Alpha-inverted.png');
  const alphaMap = useLoader(THREE.TextureLoader, '3d-models/Wave/Alpha.png');
  const opacity = new THREE.TextureLoader().load('3d-models/Wave/opacity.png');

  useEffect(() => {
    // Asignar nuevo material a todos los Meshes
    const newMaterial = new THREE.MeshPhysicalMaterial({
      color: 'purple',
      roughness: 0.7,
      metalness: 1,
      clearcoat: 0.3,
      clearcoatRoughness: 1,
      transmission: 0,
      thickness: 0,
      map: diffuse,
      clearcoatRoughnessMap: roughnessMap,
      alphaMap: opacity,       // Mapa de opacidad
      transparent: true,        // Necesario para que se respete el alphaMap
      side: THREE.DoubleSide,   // Si quieres ver ambos lados
    })

    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = newMaterial
        child.castShadow = false
        child.receiveShadow = false
        child.material.side = THREE.DoubleSide
      }
    })

    // Animaciones
    if (gltf.animations.length) {
      mixer.current = new THREE.AnimationMixer(gltf.scene)
      gltf.animations.forEach((clip) => {
        mixer.current.clipAction(clip).play()
      })
    }
  }, [gltf])

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta)
  })

  return (
    <primitive
      object={gltf.scene}
      position={[-1, 1, -80]}
      rotation={[0, -1, 0]}
    />
  )
}

export default function waveModel() {
    return(
    <>
        <Canvas className='wave-model-canvas' camera={{ position: [0, 0, 0], fov: 20 }}>
                  <Environment
                    background={false}
                    files={'3d-models/Wave/HDRI-Studio-26-Light-Wrangler/environment2.exr'}
                  />
                  <Model />
        </Canvas>
    </>
    
)
}
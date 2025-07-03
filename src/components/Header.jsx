import '../css/Header.css';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Environment, Scroll } from '@react-three/drei';
import Nav from './nav';

import { Link } from 'react-scroll';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



//Codigo del modelo3D
function Model() {
  const gltf = useLoader(GLTFLoader, '3d-models/Plano.glb')
  const mixer = useRef()

  const diffuse = new THREE.TextureLoader().load('3d-models/plano uv.png');
  const clearCoatMap = new THREE.TextureLoader().load('3d-models/plano mask 3.png');
  const roughnessMap = new THREE.TextureLoader().load('3d-models/plano mask 5.png');


  useEffect(() => {
    // Asignar nuevo material a todos los Meshes
    const newMaterial = new THREE.MeshPhysicalMaterial({
      color: 'purple',
      roughness: 1,
      metalness: 1,
      clearcoat: 1,
      clearcoatRoughness: 1,
      transmission: 0,
      thickness: 0,
      map: diffuse,
      clearcoatMap: clearCoatMap,
      roughnessMap: roughnessMap,
      metalnessMap: clearCoatMap,
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
      position={[0, 0, -10]}
      rotation={[0, 4.7, 0]}
    />
  )
}


export default function Header({ isActive, setIsActive }) {

  const elementToAnim = useRef();
  const elementToAnim2 = useRef();
  const elementToAnim3 = useRef();
  const elementToAnim4 = useRef();
  const elementToAnim5 = useRef();
  const gsapScope = useRef();


  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.from(elementToAnim.current, { duration: 0.5, y: 100, opacity: 0, delay: 1.5 });
    timeline.from(elementToAnim2.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");
    timeline.from(elementToAnim3.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");
    timeline.from(elementToAnim4.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");
    timeline.from(elementToAnim5.current, { duration: 10, opacity: 0 }, "-=0.6");

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: gsapScope });



  return (
    <header id='home'>
      <Nav
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <div className='header-content'>
        <div className='title' ref={gsapScope}>
          <span ref={elementToAnim}>Soy Miguel Gutiérrez</span>
          <br />
          <h1 ref={elementToAnim2}>&lt;Full-Stack<br /> Developer&gt;</h1>
          <p ref={elementToAnim3}>Desarrollador web apasionado por transformar ideas en aplicaciones útiles y eficientes. Enfocado en generar impacto real y en un crecimiento continuo.</p>
        </div>
        <div className='portait-photo-container'>
          <img src="portait.png" alt="portait-photo" className='portait-photo' ref={elementToAnim4} />
        </div>


        <div className='header-bottom-container'>
          <a href="https://www.linkedin.com/in/miguel-guti%C3%A9rrez-48b225155/" target='_blank'><svg className="in-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g></svg></a>
          <Link to="about-me" smooth={true} duration={2000} offset={-120}>
            <svg className='chevron-header' xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#fff"><path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z" /></svg>
          </Link>
        </div>

      </div>
      <div className='three-model' ref={elementToAnim5}>
        <Canvas camera={{ position: [0, 0, 0], fov: [20] }}>
          <Environment
            background={false}
            files={'/3d-models/Wave/HDRI-Studio-26-Light-Wrangler/environment.exr'}
          />
          <Model />
        </Canvas>
      </div>


    </header>
  );
}

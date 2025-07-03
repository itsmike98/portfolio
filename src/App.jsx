import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import FeaturedWorks from "./components/FeaturedWorks";
import Skills from "./components/Skills";
import WaveModel from "./components/waveModel.jsx";
import Footer from "./components/Footer.jsx";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from "react";
import useNavScrollTriggers from "./hooks/useNavScrollTrigger.jsx";

gsap.registerPlugin(ScrollTrigger);


function App() {

  //Estado para manejar la pestaña del menu activa.
  const [isActive, setIsActive] = useState("inicio");

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const featuredWorksRef = useRef(null);
  const skillsRef = useRef(null);

  useNavScrollTriggers(
    {
      "inicio": homeRef,
      "sobre-mi": aboutMeRef,
      "featured-work": featuredWorksRef,
      "habilidades": skillsRef,
    },
    setIsActive
  );

  return (

    <>
      <div ref={homeRef}>
        <Header
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div className="model-relative-container" ref={featuredWorksRef}>
        <FeaturedWorks />
        <div className="wave-model disable">
          <WaveModel />
        </div>
        <div className="gradient-relative-container" ref={skillsRef}>
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default App;

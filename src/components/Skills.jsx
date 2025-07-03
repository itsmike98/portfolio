import '../css/Skills.css';

import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Popup from 'reactjs-popup';

export default function Skills() {
    //animaciones
    const elementToAnim = useRef();
    const elementToAnim2 = useRef();
    const elementToAnim3 = useRef();
    const elementToAnim4 = useRef();
    const elementToAnim5 = useRef();
    const elementToAnim6 = useRef();
    const gsapScope = useRef();
    const gsapScope2 = useRef();


    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: gsapScope.current,
                start: "top 60%",
            }
        });

        timeline.from(elementToAnim.current, { duration: 0.5, y: 100, opacity: 0 });
        timeline.from(elementToAnim2.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");
        timeline.from(elementToAnim3.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");

        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: gsapScope2.current,
                start: "top 70%",
            }
        });

        timeline2.from(elementToAnim4.current, { duration: 0.5, y: 100, opacity: 0 });
        timeline2.from(elementToAnim5.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");
        timeline2.from(elementToAnim6.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");

        return () => {
            timeline.kill();
            timeline2.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { scope: gsapScope });

    return (
        <>
            <section id='skills' className="skills-section">
                <div className="grid-container">
                    <div className="frontend-container" ref={gsapScope}>
                        <h2 className='subtitle' ref={elementToAnim}>Frontend</h2>
                        <p ref={elementToAnim2}>Soy un experto en desarrollo frontend con React, donde me dedico a crear interfaces que son dinámicas, responsivas y muy fáciles de usar. Tengo experiencia en integrar React con herramientas como Tailwind CSS para diseñar interfaces modernas y adaptativas. Me encargo de transformar maquetas de diseño, como las de Figma, en componentes reutilizables y optimizados, asegurando que la experiencia del usuario sea fluida en diferentes dispositivos. Además, tengo habilidades en el consumo de APIs y en la gestión del estado, lo que me permite construir aplicaciones que son escalables y fáciles de mantener.</p>
                        <div className="logos" ref={elementToAnim3}>
                            <Popup
                                trigger={<img className="logo" src="skills/React-logo.svg" alt="React" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">React</span>
                            </Popup>
                            <Popup
                                trigger={<img className='logo' src='skills/js-logo.svg' alt="JavaScript" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">JavaScript</span>
                            </Popup>
                            <Popup
                                trigger={<img className='logo' src='skills/Html-logo.svg' alt="HTML5" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">HTML5</span>
                            </Popup>
                            <Popup
                                trigger={<img className='logo' src='skills/css-logo.svg' alt="CSS3" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">CSS3</span>
                            </Popup>
                            <Popup
                                trigger={
                            <img className='logo' src='skills/tailwind-logo.svg' alt="Figma" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">Tailwind</span>
                            </Popup>
                            <Popup
                                trigger={
                            <img className='logo' src='skills/Figma-logo.svg' alt="Figma" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">Figma</span>
                            </Popup>
                            
                        </div>
                    </div>

                    <div className="backend-container" ref={gsapScope2}>
                        <h2 className='subtitle' ref={elementToAnim4}>Backend</h2>
                        <p ref={elementToAnim5}>En el backend, me especializo en el desarrollo con Laravel. A lo largo del tiempo, he ido profundizando en la estructura y funcionamiento del framework, abarcando desde la creación de APIs y rutas internas, hasta la implementación de middleware personalizado para optimizar la seguridad y el rendimiento de las aplicaciones. Considero que he logrado un progreso significativo en este aprendizaje, reflejado en la creación y gestión completa de dos proyectos desde cero, abarcando desde el diseño y gestión de la base de datos hasta su despliegue en ambientes de producción.</p>
                        <div className="logos" ref={elementToAnim6}>
                            <Popup
                                trigger={
                            <img className='logo' src='skills/laravel-logo.svg' alt="Laravel" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">Laravel</span>
                            </Popup>
                            <Popup
                                trigger={
                            <img className='logo' src='skills/php-logo.svg' alt="Php" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">Php</span>
                            </Popup>
                            <Popup
                                trigger={
                            <img className='logo' src='skills/Java-logo.svg' alt="Java" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">Java</span>
                            </Popup>
                            <Popup
                                trigger={
                            <img className='logo' src='skills/mysql-logo.svg' alt="mysql" />}
                                position="bottom center"
                                closeOnDocumentClick
                                on="hover"
                            >
                                <span className="tooltip-logo">Mysql</span>
                            </Popup>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
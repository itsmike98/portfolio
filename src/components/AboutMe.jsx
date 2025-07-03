import '../css/About-me.css';
import { useState, useRef, useEffect } from 'react';

// import Swiper core and required modules
import { Navigation, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function AboutMe() {
    const leftSwiperRef = useRef(null);
    const rightSwiperRef = useRef(null);

    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);

    function activeSlide(index) {
        return index === currentIndex2 ? "swiper-dates active" : "swiper-dates";
    }

    //animaciones
    const elementToAnim = useRef();
    const elementToAnim2 = useRef();
    const elementToAnim3 = useRef();
    const gsapScope = useRef();

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: gsapScope.current,
                start: "top 70%",
            },
            onComplete: () => {
                const waveEl = document.querySelector(".wave-model");
                if (waveEl) {
                    if (waveEl.classList.contains("disable")) {
                        waveEl.classList.remove("disable");
                    }
                }
            }
        });

        timeline.from(elementToAnim.current, { duration: 0.5, y: 100, opacity: 0 });
        timeline.from(elementToAnim2.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");
        timeline.from(elementToAnim3.current, { duration: 0.5, y: 100, opacity: 0 }, "-=0.3");

        return () => {
            timeline.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { scope: gsapScope });

    return (
        <>
            <section ref={gsapScope}>
                <div className="grid-container">
                    <div className="about-me">
                        <h2 className="subtitle" ref={elementToAnim}>Sobre mí</h2>
                        <p className='about-me-description' ref={elementToAnim2}>Me especializo en el desarrollo de sitios web y aplicaciones dinámicas, intuitivas y centradas en el usuario, combinando funcionalidad sólida con una experiencia visual cuidada. Gracias a mi formación como desarrollador full stack, tengo una base sólida tanto en frontend como en backend, lo que me permite abordar proyectos de forma integral. Actualmente me encuentro muy motivado, con muchas ganas de seguir aprendiendo y creciendo como desarrollador.</p>
                        
                        <div className="experience" ref={elementToAnim3}>
                            <div className='left-exp'>
                                {/* Swiper para los años */}
                                <Swiper
                                    direction={'vertical'}
                                    slidesPerView={1.5}
                                    modules={[Navigation, Controller]}
                                    onSwiper={(swiper) => {
                                        leftSwiperRef.current = swiper;
                                        if (rightSwiperRef.current) {
                                            swiper.controller.control = rightSwiperRef.current;
                                        }
                                    }}
                                    onSlideChange={(swiper) => setCurrentIndex1(swiper.activeIndex)}
                                    speed={1000}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <svg width="24" height="335" viewBox="0 0 24 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="12.5" y1="-6.55671e-08" x2="12.5" y2="335" stroke="#7157C3" strokeWidth="3" />
                                            <circle cx="12" cy="35" r="8" fill="#AB90FF" />
                                        </svg>
                                        <span className={activeSlide(0)}>Abr 2025 <br /> Oct 2024</span>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <svg width="24" height="335" viewBox="0 0 24 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="12.5" y1="-6.55671e-08" x2="12.5" y2="335" stroke="#7157C3" strokeWidth="3" />
                                            <circle cx="12" cy="35" r="8" fill="#AB90FF" />
                                        </svg>
                                        <span className={activeSlide(1)}>Feb 2020 <br />Jun 2025</span>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <svg width="24" height="335" viewBox="0 0 24 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="12.5" y1="-6.55671e-08" x2="12.5" y2="335" stroke="#7157C3" strokeWidth="3" />
                                            <circle cx="12" cy="35" r="8" fill="#AB90FF" />
                                        </svg>
                                        <span className={activeSlide(2)}>Sep 2023 <br /> Jun 2025</span>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <svg width="24" height="335" viewBox="0 0 24 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="12.5" y1="-6.55671e-08" x2="12.5" y2="335" stroke="#7157C3" strokeWidth="3" />
                                            <circle cx="12" cy="35" r="8" fill="#AB90FF" />
                                        </svg>
                                        <span className={activeSlide(3)}>Sep 2017 <br /> Jun 2019</span>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <svg width="24" height="335" viewBox="0 0 24 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="12.5" y1="-6.55671e-08" x2="12.5" y2="335" stroke="#7157C3" strokeWidth="3" />
                                            <circle cx="12" cy="35" r="8" fill="#AB90FF" />
                                        </svg>
                                        <span className={activeSlide(4)}>Sep 2015 <br /> Jun 2017</span>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className='right-exp'>
                                {/* Swiper derecho para la esxperiencia */}
                                <Swiper
                                    direction="vertical"
                                    navigation={true}
                                    modules={[Navigation, Controller]}
                                    onSwiper={(swiper) => {
                                        rightSwiperRef.current = swiper;
                                        if (leftSwiperRef.current) {
                                            swiper.controller.control = leftSwiperRef.current;
                                        }
                                    }}
                                    onSlideChange={(swiper) => {
                                        setCurrentIndex2(swiper.activeIndex)
                                    }}
                                    speed={1000}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <h3>Several.pro</h3>
                                        <span>Desarrollador Full-Stack</span>
                                        <p>Durante varios meses formé parte del equipo como desarrollador en prácticas, donde trabajé en distintos proyectos web utilizando tecnologías como Laravel (PHP) y JavaScript. También colaboré en tareas de mantenimiento y personalización de sitios desarrollados con WordPress, utilizando Elementor. Esta etapa me permitió familiarizarme con flujos de trabajo reales, afianzar mis conocimientos en frontend y mejorar mis habilidades en entornos de desarrollo colaborativo.</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h3>Salas plus habit</h3>
                                        <span>Técnico de mantenimiento web y visualización 3D</span>
                                        <p>Comencé en la empresa como renderista, encargándome de crear visualizaciones 3D de interiores y productos. Tras finalizar mis estudios, empecé a asumir también tareas de mantenimiento web, trabajando con WordPress y realizando ajustes en PHP. Esta transición me permitió ampliar mi perfil técnico y participar activamente en la mejora continua del sitio web de la empresa.</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h3>DAW</h3>
                                        <span>CFGS en desarrollo de aplicaciones web</span>
                                        <p>Estudios superiores en desarrollo web, donde he adquirido una base sólida tanto en frontend como backend. Durante el curso, he trabajado con tecnologías como PHP, JavaScript, MySQL, y he desarrollado proyectos completos desde cero.<br /><span style={{ fontWeight: 700, fontSize: '1.1em', color: "white" }}>
                                            Nota media final: 8.9
                                        </span>
                                        </p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h3>Desarrollo de videojuegos 3D</h3>
                                        <span>CFGS</span>
                                        <p>Estudios superiores donde aprendí modelado, animación y diseño en entornos 3D, además de programación orientada a videojuegos, trabajando con motores gráficos y herramientas especializadas.</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h3>Diseño gráfico</h3>
                                        <span>CFGM</span>
                                        <p>Formación centrada en los fundamentos del diseño visual, donde adquirí conocimientos en herramientas gráficas y composición, aplicables tanto en medios impresos como digitales.</p>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
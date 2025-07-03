import "../css/Featured-works.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import "reactjs-popup/dist/index.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow } from 'swiper/modules';

import { useState } from "react";
import WorkPopup from "./WorkPopup";


export default function FeaturedWorks() {
    const [active, setActive] = useState(0);

    return (
        <>
            <div className='featured-works' >
                <h2 className="subtitle">Trabajos destacados</h2>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    onSlideChange={(swiper) => {
                        setActive(swiper.realIndex);
                    }}
                    slidesPerView={2}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 400,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >

                    <SwiperSlide className={active === 0 ? "custom-slide" : ""}>
                        <WorkPopup
                            index={0}
                            isActive={active}
                            images={["works/Nutriday/Nutriday1.jpg", "works/Nutriday/Nutriday2.jpg", "works/Nutriday/Nutriday3.jpg", "works/Nutriday/Nutriday4.jpg", "works/Nutriday/Nutriday5.jpg"]}
                            title={"Nutriday"}
                            labels={["Laravel", "React", "php", "JavaScript", "Tailwind"]}
                            description={"NutriDay es una aplicación web desarrollada como proyecto final del ciclo superior, orientada a ayudar a los usuarios a gestionar su alimentación diaria de forma intuitiva y visual.\nPermite registrar los alimentos consumidos cada día y calcular automáticamente la cantidad de calorías, carbohidratos, proteínas y grasas ingeridas. Toda esta información se muestra en un dashboard dinámico, que compara los valores consumidos con los objetivos nutricionales definidos por el usuario. También cuenta con funcionalidades como el control de agua bebida, informes de progreso, media calórica semanal y un historial de peso.\n#titleDetalles técnicos:\n#listFrontend construido con React y Tailwind CSS para una interfaz limpia y responsive.\n#listBackend desarrollado con Laravel Breeze con Inertia.js, que integra perfectamente Laravel con React.\n  #listSistema de autenticación ya incorporado gracias a Laravel Breeze, gestionando sesiones y protección de rutas.\n  #listBase de datos en MySQL, estructurada para soportar relaciones complejas entre usuarios, alimentos, meals y días.\n  #listIntegración con la API de FatSecret para obtener información nutricional de los alimentos.\n  #listSe utilizó el protocolo OAuth 2.0 para autenticación y acceso seguro a los endpoints de la API.\n  #listSe implementó la lógica para obtener y renovar el token de acceso según la expiración del mismo.\n  #listGestión de datos personales del usuario, y generación de estadísticas personalizadas.\nEste proyecto me permitió consolidar mis conocimientos en desarrollo full stack, trabajar con autenticación vía OAuth, manejar relaciones complejas en base de datos y construir una experiencia de usuario fluida desde cero."}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={active === 1 ? "custom-slide" : ""}>
                        <WorkPopup
                            index={1}
                            isActive={active}
                            images={["works/Several/several1.jpg", "works/Several/several2.jpg", "works/Several/several3.jpg", "works/Several/several4.jpg", "works/Several/several5.jpg",]}
                            title={"Gestor contraseñas y clientes"}
                            labels={["Laravel", "php", "JavaScript", "Bootstrap"]}
                            description={"Desarrollé un sistema interno para la gestión segura de clientes, proyectos y contraseñas, utilizando Laravel en el backend y Bootstrap para la interfaz frontend, sin frameworks adicionales. El sistema contaba con autenticación para empleados, otorgando acceso controlado a la información.\nEste gestor permitía almacenar y organizar datos de clientes y sus proyectos vinculados, facilitando la consulta detallada de la información relevante de cada uno. También se implementó un almacenamiento seguro de contraseñas encriptadas, utilizando las capacidades de Laravel para garantizar la protección de datos sensibles.\nSe implementó un sistema de archivos en el cual los usuarios podían escribir notas sobre cada cliente o proyecto, y también un cargar y descargar archivos como facturas y documentos en cada cliente y proyecto, con el fin de centralizar y organizar toda la información de cada cliente y proyecto.\nEl diseño buscaba una experiencia simple, funcional y segura para el uso interno de la empresa, optimizando el manejo y acceso a información clave para los equipos de trabajo."}
                        />
                    </SwiperSlide >
                    <SwiperSlide className={active === 2 ? "custom-slide" : ""}>
                        <WorkPopup
                            index={2}
                            isActive={active}
                            images={["works/sosa/sosa1.jpg"]}
                            title={"Sosa"}
                            labels={["Wordpress", "Elementor", "php", "JavaScript", "CSS"]}
                            description={"Como parte del equipo de several.pro, participé en el desarrollo frontend de sosa.cat, una plataforma de productos alimenticios para la alta cocina. Mi rol se centró en implementar secciones clave de la web, utilizando WordPress con WP_Query y Custom Post Types para gestionar y mostrar dinámicamente la información de productos conforme al diseño proporcionado en Figma.\nMi trabajo consistió en convertir los diseños visuales en componentes funcionales y responsivos, asegurando una experiencia de usuario fluida y fiel a la identidad visual del cliente."}
                            link={"sosa.cat"}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={active === 0 ? "custom-slide" : ""}>
                        <WorkPopup
                            index={0}
                            isActive={active}
                            images={["works/Nutriday/Nutriday1.jpg", "works/Nutriday/Nutriday2.jpg", "works/Nutriday/Nutriday3.jpg", "works/Nutriday/Nutriday4.jpg", "works/Nutriday/Nutriday5.jpg"]}
                            title={"Nutriday"}
                            labels={["Laravel", "React", "php", "JavaScript", "Tailwind"]}
                            description={"NutriDay es una aplicación web desarrollada como proyecto final del ciclo superior, orientada a ayudar a los usuarios a gestionar su alimentación diaria de forma intuitiva y visual.\nPermite registrar los alimentos consumidos cada día y calcular automáticamente la cantidad de calorías, carbohidratos, proteínas y grasas ingeridas. Toda esta información se muestra en un dashboard dinámico, que compara los valores consumidos con los objetivos nutricionales definidos por el usuario. También cuenta con funcionalidades como el control de agua bebida, informes de progreso, media calórica semanal y un historial de peso.\n#titleDetalles técnicos:\n#listFrontend construido con React y Tailwind CSS para una interfaz limpia y responsive.\n#listBackend desarrollado con Laravel Breeze con Inertia.js, que integra perfectamente Laravel con React.\n  #listSistema de autenticación ya incorporado gracias a Laravel Breeze, gestionando sesiones y protección de rutas.\n  #listBase de datos en MySQL, estructurada para soportar relaciones complejas entre usuarios, alimentos, meals y días.\n  #listIntegración con la API de FatSecret para obtener información nutricional de los alimentos.\n  #listSe utilizó el protocolo OAuth 2.0 para autenticación y acceso seguro a los endpoints de la API.\n  #listSe implementó la lógica para obtener y renovar el token de acceso según la expiración del mismo.\n  #listGestión de datos personales del usuario, y generación de estadísticas personalizadas.\nEste proyecto me permitió consolidar mis conocimientos en desarrollo full stack, trabajar con autenticación vía OAuth, manejar relaciones complejas en base de datos y construir una experiencia de usuario fluida desde cero."}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={active === 1 ? "custom-slide" : ""}>
                        <WorkPopup
                            index={1}
                            isActive={active}
                            images={["works/Several/several1.jpg", "works/Several/several2.jpg", "works/Several/several3.jpg", "works/Several/several4.jpg", "works/Several/several5.jpg",]}
                            title={"Gestor contraseñas y clientes"}
                            labels={["Laravel", "php", "JavaScript", "Bootstrap"]}
                            description={"Desarrollé un sistema interno para la gestión segura de clientes, proyectos y contraseñas, utilizando Laravel en el backend y Bootstrap para la interfaz frontend, sin frameworks adicionales. El sistema contaba con autenticación para empleados, otorgando acceso controlado a la información.\nEste gestor permitía almacenar y organizar datos de clientes y sus proyectos vinculados, facilitando la consulta detallada de la información relevante de cada uno. También se implementó un almacenamiento seguro de contraseñas encriptadas, utilizando las capacidades de Laravel para garantizar la protección de datos sensibles.\nSe implementó un sistema de archivos en el cual los usuarios podían escribir notas sobre cada cliente o proyecto, y también un cargar y descargar archivos como facturas y documentos en cada cliente y proyecto, con el fin de centralizar y organizar toda la información de cada cliente y proyecto.\nEl diseño buscaba una experiencia simple, funcional y segura para el uso interno de la empresa, optimizando el manejo y acceso a información clave para los equipos de trabajo."}
                        />
                    </SwiperSlide >
                    <SwiperSlide className={active === 2 ? "custom-slide" : ""}>
                        <WorkPopup
                            index={2}
                            isActive={active}
                            images={["works/sosa/sosa1.jpg"]}
                            title={"Sosa"}
                            labels={["Wordpress", "Elementor", "php", "JavaScript", "CSS"]}
                            description={"Como parte del equipo de several.pro, participé en el desarrollo frontend de sosa.cat, una plataforma de productos alimenticios para la alta cocina. Mi rol se centró en implementar secciones clave de la web, utilizando WordPress con WP_Query y Custom Post Types para gestionar y mostrar dinámicamente la información de productos conforme al diseño proporcionado en Figma.\nMi trabajo consistió en convertir los diseños visuales en componentes funcionales y responsivos, asegurando una experiencia de usuario fluida y fiel a la identidad visual del cliente."}
                            link={"sosa.cat"}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
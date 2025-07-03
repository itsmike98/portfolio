import { useState, useRef, useEffect } from "react";
import "../css/Nav.css";

import { Link } from "react-scroll";

export default function Nav({isActive, setIsActive}) {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const navEl = navRef.current;
        const bgEl = bgRef.current;

        const updateBg = () => {
            const activeLink = navEl.querySelector(".active-link-nav");
            if (activeLink && bgEl) {
                const linkRect = activeLink.getBoundingClientRect();
                const navRect = navEl.getBoundingClientRect();

                const left = linkRect.left - navRect.left;
                const top = linkRect.top - navRect.top;

                bgEl.style.transform = `translate(${left}px, ${top}px)`;
                bgEl.style.width = `${linkRect.width}px`;
                bgEl.style.height = `${linkRect.height}px`;
            }
        };

        // Deja que el layout se calcule antes de aplicar el fondo
        requestAnimationFrame(updateBg);
        window.addEventListener("resize", updateBg); // Para manejar cambios de tamaño

        return () => {
            window.removeEventListener("resize", updateBg);
        };
    }, [isActive]);



    return (
        <>
            <nav className="nav-container">
                <div className={isOpen ? "active-nav" : "navbar"}>
                    <ul ref={navRef}>
                        <li className="menu-list-element">
                            <Link
                                to="home"
                                smooth={true}
                                duration={2000}
                                className={isActive === "inicio" ? "active-link-nav" : ""}
                                onClick={() => setIsActive("inicio")}
                                id="nav-link-home"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="menu-list-element">
                            <Link
                                to="about-me"
                                smooth={true}
                                duration={2000}
                                offset={-120}
                                className={isActive === "sobre-mi" ? "active-link-nav" : ""}
                                onClick={() => setIsActive("sobre-mi")}
                                id="nav-link-about-me"
                            >
                                Sobre mí
                            </Link>
                        </li>
                        <li className="menu-list-element">
                            <Link
                                to="featured-works"
                                smooth={true}
                                duration={2000}
                                offset={-120}
                                className={isActive === "featured-work" ? "active-link-nav" : ""}
                                onClick={() => setIsActive("featured-work")}
                                id="nav-link-fratured-works"
                            >
                                Trabajos destacados
                            </Link>
                        </li>
                        <li className="menu-list-element">
                            <Link
                                to="skills"
                                smooth={true}
                                duration={2000}
                                offset={-120}
                                className={isActive === "habilidades" ? "active-link-nav" : ""}
                                onClick={() => setIsActive("habilidades")}
                                id="nav-link-skills"
                            >
                                Habilidades
                            </Link>
                        </li>
                        <div className="link-background" ref={bgRef}></div>
                    </ul>
                    <div className={isOpen ? "contact-link-active" : "contact-link"}>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={2000}
                            offset={-120}
                            className="contact-text"
                            onClick={() => setIsActive("contact")}
                        >
                            Contacto
                        </Link>
                        <span className="contact-icon">
                            <svg fill="#ffffff" width="25px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fillRule="evenodd" />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <button className="hamburger" onClick={() => { setIsOpen(!isOpen) }}>
                        ☰
                    </button>
                </div>
            </nav>
        </>
    )
}

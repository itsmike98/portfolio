import "../css/Footer.css";

export default function Footer() {
    return (
        <>
            <footer id="contact" className="grid-container">
                <div className="footer-info">
                    <div className="info-container">
                        <img src="footer/ubicacion 1.svg" alt="location-icon" />
                        <div>
                            <span className="info-title">Dirección</span>
                            <span className="info-content">Rubí, Barcelona</span>
                        </div>

                    </div>
                    <div className="info-container">
                        <img src="footer/telefono 1.svg" alt="location-icon" />
                        <div>
                            <span className="info-title">Teléfono</span>
                            <span className="info-content">692560310</span>
                        </div>

                    </div>
                    <div className="info-container">
                        <img src="footer/correo-electronico 1.svg" alt="location-icon" />
                        <div>
                            <span className="info-title">Mail</span>
                            <span className="info-content">ilsmorenogutierrezmiguel@gmail.com</span>
                        </div>

                    </div>
                    <div className="info-container">
                        <img src="footer/linkedin.svg" alt="location-icon" />
                        <div>
                            <span className="info-title">Linkedin</span>
                            <span className="info-content">Miguel Gutiérrez Moreno</span>
                        </div>

                    </div>
                </div>
                <h2 className="subtitle">Ponte en contacto</h2>
                <img className="line-decoration" src="public/footer/line-composition.png" alt="line-composition-decoration" />
            </footer>
        </>
    )
}
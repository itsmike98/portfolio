import Popup from "reactjs-popup"
import "../css/Popup-styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function WorkPopup({ index, isActive, images, title, labels, description, link }) {
    return (
        <>
            <Popup
                trigger={<div className={isActive === index ? "active-slide" : "slide"} style={{
                backgroundImage: `url(${images[0]})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
                }}>
                    <div className="slide-content">
                        <h3 className="slide-card-title">{title}</h3>
                        <div className="work-labels">
                            {labels.map((label, index) => <span className="label" key={index}>{label}</span>)}
                        </div>
                        <button className="more-info"> Ver más</button>
                    </div>
                </div>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        
                        <div className="project-images">
                            
                            <Swiper className="mySwiper"
                                pagination={true}
                                navigation={true}
                                autoplay={{ delay: 5000}}
                                modules={[Autoplay, Pagination, Navigation]}
                            >
                                {images.map((slide, index) => (
                                    <SwiperSlide key={index}><img src={slide} alt={`Slide-${index}`}/></SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="work-content">
                            <div className="popup-header">
                                 <h3> {title} </h3>
                            <div className="work-labels-popup">
                                {labels.map((label) => <span className="label">{label}</span>)}

                            </div>
                            </div>
                            <div className="content">
                                {description.split("\n").map((line, index) => (
                                    line.includes("#title") ? <p className="work-title">{line.replace("#title", "")}</p> : line.includes("#list") ? <p className="work-list">{line.replace('#list', "")}</p> : <p>{line}</p>
                                ))}
                                {link ? (<a href={link} className="project-button" target="_blank">Ir al proyecto</a>) : null}
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </>
    )
}
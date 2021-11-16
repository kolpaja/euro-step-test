import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
import { dataSlider } from './dataSlider';
import { useTranslation } from 'react-i18next';


const Slider = () => {
    const { t } = useTranslation();

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider" >
            {
                dataSlider.map((item, index) => {
                    return (
                        <div
                            key={item.id.toString()}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img
                                src={item.img}
                            />
                            <div className="img-info">
                                <span className="line" />
                                <div>
                                    <span className="item-title">{item.title.toLocaleUpperCase()}</span>
                                    <div className="line-slider" />
                                    <p>{item.text}</p>
                                    <a>{t("shop_now")}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            < BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div >
    )
};

export default Slider;
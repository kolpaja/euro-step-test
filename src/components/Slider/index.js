import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
import { dataSlider } from './dataSlider'


const Slider = () => {

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
                            key={item.id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img
                                src={item.img}
                            />
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
import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
import { dataCollections } from './dataCollections';
import { useTranslation } from 'react-i18next';


const NewInSlider = () => {
    const { t } = useTranslation();

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataCollections.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataCollections.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataCollections.length)
        }
    }

    return (
        <div className="new-in-container" >
            {
                dataCollections.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className={slideIndex === index + 1 ? "new-in-slide new-in-active-anim" : "new-in-slide"}
                        >
                            <img
                                src={item.img}
                            />
                            <div className="new-in-img-info">
                                <span />
                                <div>
                                    <span className="item-name">{item.name.toLocaleUpperCase()}</span>
                                    <p>{item.description}</p>
                                    <a>{t("shop_now")}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            < BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div >
    )
};

export default NewInSlider;
import Slider from "react-slick";

import { data } from "./dataCategories";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} for-you-next`}
            onClick={onClick}
        />
    );
}
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} for-you-prev`}
            onClick={onClick}
        />
    );
}
const ForYouCollection = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        lazyLoad: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            }
        ]
    };
    return (
        <div className="for-you">
            <div className="for-you-header">
                <h1>For You</h1>
                <p>For you categories of items from our brands</p>
            </div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={item.id.toString()} className="for-you-item">
                        <div className="item-img">
                            <img alt={item.name} src={item.img} />
                            <span>{item.categories}</span>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    )
}

export default ForYouCollection;


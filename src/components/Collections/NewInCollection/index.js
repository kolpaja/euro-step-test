import Slider from "react-slick";
import BtnSlider from "./BtnSlider";
import { dataCollections } from "./dataCollections";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} new-in-next`}
            onClick={onClick}
        />
    );
}
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} new-in-prev`}
            onClick={onClick}
        />
    );
}

const NewInCollection = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="new-in">
            <div className="new-in-header">
                <h1>NEW IN</h1>
                <p>New in collections of items from our brands</p>
            </div>
            <Slider {...settings}>
                {dataCollections.map((item, index) => (
                    <div key={item.id.toString()} className="new-in-item">
                        <div className="item-img">
                            <img alt={item.name} src={item.img} />
                            {item.isPromo && <span>PROMO</span>}
                        </div>
                        <div className="descriptions">
                            <span className="item-name">{item.name}</span>
                            <span>{item.description}</span>
                            <span className="price">{
                                item.isPromo ? <span>
                                    <span className="discount">&#8364;{item.price.toFixed(2)}</span>
                                    &#8364;{item.promoPrice.toFixed(2)}
                                </span> :
                                    <span>
                                        &#8364;
                                        {item.price.toFixed(2)}
                                    </span>

                            }</span>
                            <span className="vat">
                                *VAT excluded
                            </span>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    )
}

export default NewInCollection

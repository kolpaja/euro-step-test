import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const BtnSlider = ({ direction, moveSlide }) => {
    console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            {direction === "next" ? <RightOutlined /> : <LeftOutlined />}
        </button>
    );
}

export default BtnSlider;

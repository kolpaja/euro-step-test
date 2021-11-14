import Explore from "../Explore";
import Slider from "../Slider";


const Home = (props) => {
    console.log(props);
    return (
        <div className="home">
            <Explore />
            <Slider />
        </div>
    )
}

export default Home

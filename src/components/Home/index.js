import Explore from "../Explore";
import Collections from "../Collections";
import Brands from "../Brands";


const Home = (props) => {
    console.log(props);
    return (
        <div className="home">
            <Explore />
            <Collections />
            <Brands />
        </div>
    )
}

export default Home

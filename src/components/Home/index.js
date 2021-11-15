import Explore from "../Explore";
import Collections from "../Collections";


const Home = (props) => {
    console.log(props);
    return (
        <div className="home">
            <Explore />
            <Collections />
        </div>
    )
}

export default Home

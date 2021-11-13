import Button from "../Button"
import ERLink from "../ERLink";

const Home = (props) => {
    console.log(props);
    return (
        <div className="home">
            <h1>Euro step keep it up</h1>
            <Button
                type="button"
                size="md"
                color="black"
                text="hello there" />
            <ERLink
                type="badge"
                text="link"
                to="#"
            />
        </div>
    )
}

export default Home

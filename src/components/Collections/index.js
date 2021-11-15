import DrinksCollection from './DrinksCollection'
// import ForYouCollection from './ForYouCollection'
import NewInCollection from './NewInCollection'
import ShoesCollection from './ShoesCollection'

import woman from "../../utils/assets/img/women.png";
import men from "../../utils/assets/img/men@2x.png"

const Collections = () => {
    return (
        <div className="collections">
            <ShoesCollection />
            <DrinksCollection />
            <NewInCollection />
            <div className="categories">
                <div className="woman">
                    <img src={woman} />
                    <span>WOMAN</span>
                </div>
                <div className="men">
                    <img src={men} />
                    <span>MEN</span>
                </div>
            </div>
            {/* <ForYouCollection /> */}
        </div>
    )
}

export default Collections

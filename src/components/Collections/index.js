import { useMediaQuery } from 'react-responsive';

import DrinksCollection from './DrinksCollection'
import NewInCollection from './NewInCollection'
import ShoesCollection from './ShoesCollection'
import ForYouCollection from './ForYouCollection';

import woman from "../../utils/assets/img/women.png";
import men from "../../utils/assets/img/men@2x.png"

import womanMob from "../../utils/assets/img/woman-mobile.png";
import menMob from "../../utils/assets/img/man-mobile.png"

const Collections = () => {
    const isMobile = useMediaQuery({ maxWidth: 375 })
    return (
        <div className="collections">
            <ShoesCollection />
            <DrinksCollection />
            <NewInCollection />
            <div className="categories">
                <div className="woman">
                    <img src={isMobile ? womanMob : woman} />
                    <span>WOMAN</span>
                </div>
                <div className="men">
                    <img src={isMobile ? menMob : men} />
                    <span>MEN</span>
                </div>
            </div>
            <ForYouCollection />
        </div>
    )
}

export default Collections

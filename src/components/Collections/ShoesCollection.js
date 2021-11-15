import { useTranslation } from 'react-i18next'
import ERimg from '../ERimg'
import taka from "../../utils/assets/img/taka.png"
import taka1 from "../../utils/assets/img/taka1.png"
import syze from "../../utils/assets/img/syze.png"

const ShoesCollection = () => {
    const { t } = useTranslation();
    return (
        <div className="shoes">
            <div className="left">
                <ERimg alt="shoes" src={taka} width="610" height="610" />
                <div className="frame" />
                <span>SHOES SELECTION</span>
                <button>{t("shop_now")}</button>
            </div>
            <div className="right">
                <div className="right-div">
                    <ERimg alt="shoes" src={syze} width="610" height="295" />
                    <span>SUNGLASSES SEASON</span>
                    <a>GO TO SUNGLASSES</a>
                </div>
                <div>
                    <ERimg alt="shoes" src={taka1} width="610" height="295" />
                    <span>THE SANDAL-SYMBOL</span>
                    <a>GO TO SANDALS</a>
                </div>
            </div>
        </div>
    )
}

export default ShoesCollection

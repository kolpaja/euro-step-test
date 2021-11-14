import { useTranslation } from 'react-i18next';

import bag from "../../utils/assets/icons/shopping-bag.png"
import ticket from '../../utils/assets/icons/ticket.png';
import { FaStoreAlt } from "react-icons/fa";

const Explore = () => {
    const { t } = useTranslation();
    return (
        <div className="explore">
            <div className="explore-brands">
                <img src={bag} alt="explore brands" />
                <span>{t("explore_brands")}</span>
            </div>
            <div className="dots">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <div className="plane">
                <img src={ticket} alt="airport" />
                <span>{t("insert_flight_info")}</span>
            </div>
            <div className="dots">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <div className="book">
                <FaStoreAlt className="fa-store" />
                <span>{t("book")}</span>
            </div>

        </div>
    )
}

export default Explore

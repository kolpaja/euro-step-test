import { Link } from 'react-router-dom'

import BrandLogo from '../BrandLogo';
import Language from '../Language';
import Nav from '../Nav';
import Order from '../Order';
import { FaBars } from "react-icons/fa"
import plane from '../../utils/assets/icons/airplane.png';
import bag from '../../utils/assets/icons/shopping-bag.png';
import { SearchOutlined } from '@ant-design/icons';

const Header = ({ isMobile }) => {
    return (
        <div className="header">
            <div className="navigate">
                {isMobile &&
                    <div className="naviage-menu">
                        <FaBars className="bars" />
                        <SearchOutlined className="search-icon" />
                    </div>
                }
                <BrandLogo isMobile={isMobile} />
                {!isMobile && <Nav />}
                <div className="d-flex">
                    <Link to="/airport"><img className="plane-icon" src={plane} alt='airport link' /></Link>
                    <Link to="/cart"><img className="bag-icon" src={bag} alt='shopping cart items' /></Link>
                </div>
            </div>
            {!isMobile &&
                <>
                    <Order />
                    <Language />
                </>
            }
        </div>
    )
};

export default Header;

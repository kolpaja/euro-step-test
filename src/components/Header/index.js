import React from 'react';
import Airport from '../Airport';
import BrandLogo from '../BrandLogo';
import Cart from '../Cart';
import Language from '../Language';
import Nav from '../Nav';
import Order from '../Order';

const Header = () => {
    return (
        <div className="header">
            <div className="navigate d-flex justify-content-between align-items-center">
                {/* <BrandLogo /> */}
                <Nav />
                <Airport />
                <Cart />
            </div>
            <Order />
            <Language />
        </div>
    )
};

export default Header;

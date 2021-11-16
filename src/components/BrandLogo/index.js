import React from 'react';
import brandLogo from '../../utils/assets/icons/8-logo.png'

const BrandLogo = ({ isMobile }) => {
    return (
        <div className="brand-logo d-flex justify-content-around">
            <img alt="brand logo" src={brandLogo} />
            {!isMobile && <span>BRAND LOGO</span>}
        </div>
    )
}

export default BrandLogo

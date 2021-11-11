import React from 'react';
import brandLogo from '../../utils/assets/icons/s-icon.png'

const BrandLogo = () => {
    return (
        <div className="brand-logo d-flex justify-content-around">
            <img alt="brand logo" src={brandLogo} />
            <span>BRAND LOGO</span>
        </div>
    )
}

export default BrandLogo

import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import logo from '../../utils/assets/icons/8-logo.png'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="assists">
                <div>
                    <span>set</span>
                    <span>How ut works</span>
                </div>
                <div>
                    <span>set</span>
                    <span>FAQ's</span>
                </div>
                <div>
                    <span>set</span>
                    <span>Need Help?</span>
                </div>
            </div>
            <div className="footer">
                <div className="top">
                    <div>
                        <h5>SHOPPING</h5>

                        <span>How to shop</span>
                        <span>FAQs</span>
                        <span>Brands</span>
                        <span>Customer Care</span>

                    </div>
                    <div>
                        <h5>SERVICES</h5>

                        <span>How to shop</span>
                        <span>FAQs</span>
                        <span>Customer Care</span>
                        <span>Brands</span>
                        <span>Customer Care</span>

                    </div>
                    <div>
                        <h5>AIRPORT</h5>

                        <span>How to shop</span>
                        <span>FAQs</span>
                        <span>Customer Care</span>
                        <span>Brands</span>
                    </div>
                    <div>
                        <h5>CHECK YOUR ORDER</h5>

                        <span>SHOPPING</span>
                        <span><a>TRACK ORDERS</a></span>
                    </div>
                    <div></div>
                    <div className="socials">
                        <div className="social-icons">
                            <a><FiFacebook /></a>
                            <a><FiInstagram /></a>
                            <a><FiYoutube /></a>
                            <a><FiTwitter /></a>
                        </div>
                        <div className="logo-footer">
                            <img src={logo} alt="brand logo" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <span>Content Copywrite 2021 Eurostep P.IVA</span>
                    <span className="terms">
                        <span>Privacy Policy</span>
                        <span>Cookies</span>
                        <span>Terns & Conditions</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer

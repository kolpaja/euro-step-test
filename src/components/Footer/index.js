import { useState } from "react";
import { QuestionCircleOutlined, QuestionOutlined } from "@ant-design/icons";
import { FiFacebook, FiInstagram, FiPhoneCall, FiSettings, FiTwitter, FiYoutube } from "react-icons/fi";
import logo from '../../utils/assets/icons/8-logo.png'
import { useMediaQuery } from "react-responsive";

import { Menu } from "antd";
const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 375 })
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div className="footer-container">
            <div className="assists">
                <div>
                    <span className="icons"><FiSettings /></span>
                    <span>How ut works</span>
                </div>
                <div>
                    <span className="icons"><QuestionOutlined /></span>
                    <span>FAQ's</span>
                </div>
                <div>
                    <span className="icons"><FiPhoneCall /></span>
                    <span>Need Help?</span>
                </div>
            </div>
            <div className="footer">
                {
                    isMobile ?
                        <Menu
                            className="footer-menu"
                            mode="inline"
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                        >
                            <SubMenu className="menu-submenu" key="sub1" title="AIRPORT">
                                <Menu.Item key="1">Airport Website</Menu.Item>
                                <Menu.Item key="2">Departures</Menu.Item>
                                <Menu.Item key="3">Landing</Menu.Item>
                                <Menu.Item key="4">Parking</Menu.Item>
                                <Menu.Item key="4">Terminal Maps</Menu.Item>
                            </SubMenu>
                            <SubMenu className="menu-submenu" key="sub2" title="SHOPPING">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu className="menu-submenu" key="sub3" title="SERVICES">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                            <SubMenu className="menu-submenu" key="sub4" title="CHECK YOU ORDER">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                        :
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
                }
                {
                    isMobile ?
                        <div className="bot-mob">
                            <div className="bot-privacy">
                                <span><a>Privacy</a></span>
                                <span><a>Cookies</a></span>
                                <span><a>Legal</a></span>
                                <span><a>Suppliers</a></span>
                            </div>
                            <div className="bot-social">
                                <a><FiFacebook /></a>
                                <a><FiInstagram /></a>
                                <a><FiYoutube /></a>
                                <a><FiTwitter /></a>
                                <a><img src={logo} alt="brand logo" /></a>
                            </div>
                            <div className="bot-terms">
                                <span>Content Copywrite 2021 Eurostep P.IVA</span>
                            </div>
                        </div>
                        :
                        <div className="bottom">
                            <span>Content Copywrite 2021 Eurostep P.IVA</span>
                            <span className="terms">
                                <span>Privacy Policy</span>
                                <span>Cookies</span>
                                <span>Terms & Conditions</span>
                            </span>
                        </div>
                }
            </div>
        </div>
    )
}

export default Footer

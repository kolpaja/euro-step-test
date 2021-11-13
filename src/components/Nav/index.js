import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Button from "../Button"

import { FiSearch } from 'react-icons/fi'
import { Dropdown, Menu, Space } from "antd";
import brandImg from "../../utils/assets/img/gucci.png"

const Nav = () => {
    const { t } = useTranslation();
    const menuShops = (
        <Menu className="shops-links">
            <span className="line"></span>
            <Space direction="vertical">
                <Menu.Item>
                    <a href="#" className="link">
                        Bottega Veneta Shop
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#" className="link">
                        Duffry Shop
                    </a>
                </Menu.Item>
            </Space>
        </Menu>
    );
    const menuBrands = (
        <Menu className="brands-links">
            <span className="line2"></span>
            <div className='brands-container'>
                <div className="brand-left">
                    <div className="left">
                        <div className="brands-view">
                            <span className="most">MOST VIEWED BRANDS</span>
                            <div className="brands-most">
                                <div className="links">
                                    <span className="link">Bottega veneta</span>
                                    <span className="link">Bottega veneta</span>
                                    <span className="link">Bottega veneta</span>
                                    <span className="link">Bottega veneta</span>
                                    <span className="link">Bottega veneta</span>
                                    <span className="link">Bottega veneta</span>
                                    <span className="link">Bottega veneta</span>
                                </div>
                                <div className="links">
                                    <span className="link">Bottega veneta</span>
                                    <span className="link">Bottega veneta</span>
                                    <span className="link">Bottega veneta</span>
                                </div>
                            </div>
                        </div>
                        <div className="explore">
                            <span className="most">EXPLORE</span>
                            <div className="alfabet">
                                <span className="letter"><a>0-9</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a></a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>

                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>
                                <span className="letter"><a>A</a></span>


                            </div>
                        </div>
                    </div>
                    <button>VIEW ALL BRANDS A-Z</button>
                </div>
                <div className="brand-right">

                    <h1>GUCCI</h1>
                    <h5>Mother's Day gift</h5>

                    <img
                        src={brandImg}
                        alt="brand image"
                        className="brands-img er-img" />
                </div>
            </div>
        </Menu >
    );
    const menuProducts = (
        <Menu className="products-links">
            <span className="line-products"></span>
            <Space direction="vertical">
                <Menu.Item>
                    <a href="#" className="link">
                        Bottega Veneta Shop
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#" className="link">
                        Duffry Shop
                    </a>
                </Menu.Item>
            </Space>
        </Menu>
    );
    return (
        <div className="nav">
            <Dropdown overlay={menuShops} placement="bottomCenter" >
                <span className="shops">
                    {t("nav_shops")}
                </span>
            </Dropdown>
            <Dropdown overlay={menuBrands} placement="bottomCenter">
                <span className="brands">
                    {t("nav_brands")}
                </span>
            </Dropdown>
            <span>{t("nav_products")}</span>
            <span>{t("nav_services")}</span>
            <span className="span-search"><FiSearch className="search-icon" /></span>
        </div>
    )
}

export default Nav

import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Button from "../Button"

import { FiSearch } from 'react-icons/fi'
import { Dropdown, Menu, Popover, Space, Tooltip } from "antd";
import brandImg from "../../utils/assets/img/gucci.png"
import { ArrowRightOutlined, CaretRightOutlined } from "@ant-design/icons";

const Nav = () => {
    const { t } = useTranslation();
    const menuShops = (
        <Menu className="shops-links">
            <span className="line-shops"></span>
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
            <span className="line-brands"></span>
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

    const contentProductBeauty = (
        <div className="beauty">
            <a>asdasdf</a>
            <a>asdasdf</a>
        </div>
    );

    const menuProducts = (
        <Menu className="products-links">
            <span className="line-products"></span>
            <div className="products">
                <Tooltip placement="right" title={contentProductBeauty}>
                    <span className="link">
                        <a>Product</a><CaretRightOutlined className="arrR" />
                    </span>
                </Tooltip>
                <span className="link"><a>Product</a><CaretRightOutlined className="arrR" /></span>
                <span className="link"><a>Product</a><CaretRightOutlined className="arrR" /></span>
                <span className="link"><a>Product</a><CaretRightOutlined className="arrR" /></span>
                <span className="link"><a>Product</a><CaretRightOutlined className="arrR" /></span>
            </div>
        </Menu>
    );


    const contentServicesAirport = (
        <div className="airport">
            <a>asdasdf</a>
            <a>asdasdf</a>
        </div>
    );

    const menuServices = (
        <Menu className="services-links">
            <span className="line-services"></span>
            <div className="services">
                <Tooltip placement="right" title={contentServicesAirport}>
                    <span className="link">
                        <a>Product</a><CaretRightOutlined className="arrR" />
                    </span>
                </Tooltip>
                <span className="link"><a>Product</a><CaretRightOutlined className="arrR" /></span>
                <span className="link"><a>Product</a><CaretRightOutlined className="arrR" /></span>
                <span className="link"><a>Product</a><CaretRightOutlined className="arrR" /></span>
                <span className="link"><a>Product</a><CaretRightOutlined className="arrR" /></span>
            </div>
        </Menu>
    );
    const menuSearch = (
        <Menu className="search-menu">
            <div className="search">
                <input placeholder={t("product_search")} />
                <ArrowRightOutlined className="search-arrow" />
            </div>
        </Menu>
    )

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
            <Dropdown overlay={menuProducts} placement="bottomCenter">
                <span className="products">
                    {t("nav_products")}
                </span>
            </Dropdown>
            <Dropdown overlay={menuServices} placement="bottomCenter">
                <span>
                    {t("nav_services")}
                </span>
            </Dropdown>
            <Dropdown overlay={menuSearch} placement="bottomRight">
                <span className="span-search">
                    <FiSearch className="search-icon" />
                </span>
            </Dropdown>
        </div>
    )
}

export default Nav

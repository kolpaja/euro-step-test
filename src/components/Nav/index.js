import { Link } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'
import { useTranslation } from 'react-i18next';
import { Dropdown, Menu } from "antd";

const Nav = () => {
    const { t } = useTranslation();
    const menuShops = (
        <Menu className="shops-links">
            <span className="line"></span>
            <Menu.Item>
                <a href="#">
                    1st menu item
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="nav">
            <Dropdown overlay={menuShops} placement="bottomCenter" >
                <span className="shops">
                    {t("nav_shops")}
                </span>
            </Dropdown>
            <span>{t("nav_brands")}</span>
            <span>{t("nav_products")}</span>
            <span>{t("nav_services")}</span>
            <span className="span-search"><FiSearch className="search-icon" /></span>
        </div>
    )
}

export default Nav

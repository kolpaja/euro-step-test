import { useState } from 'react';
import { Link } from 'react-router-dom'

import BrandLogo from '../BrandLogo';
import Language from '../Language';
import Nav from '../Nav';
import Order from '../Order';
import { FaBars } from "react-icons/fa"
import plane from '../../utils/assets/icons/airplane.png';
import bag from '../../utils/assets/icons/shopping-bag.png';
import { SearchOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';

import { Menu } from "antd";
const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Header = ({ isMobile }) => {
    const [visible, setVisible] = useState(false);
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const onClose = () => {
        setVisible(false);
    };
    const showDrawer = () => {
        setVisible(true);
    };
    return (
        <div className="header">
            <div className="navigate">
                {isMobile &&
                    <div className="naviage-menu">
                        <FaBars className="bars" onClick={() => showDrawer()} />
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
            <Drawer
                placement="left"
                width="310"
                onClose={onClose}
                closable
                visible={visible}>
                <Menu
                    className="header-menu"
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                >
                    <SubMenu className="menu-submenu" key="sub1" title="SHOPS">
                        <Menu.Item key="1">Airport Website</Menu.Item>
                        <Menu.Item key="2">Departures</Menu.Item>
                        <Menu.Item key="3">Landing</Menu.Item>
                        <Menu.Item key="4">Parking</Menu.Item>
                        <Menu.Item key="4">Terminal Maps</Menu.Item>
                    </SubMenu>
                    <SubMenu className="menu-submenu" key="sub2" title="BRANDS">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu className="menu-submenu" key="sub3" title="PRODUCTS">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu>
                    <SubMenu className="menu-submenu" key="sub4" title="Services">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
                <div className="mob-line" />
                <div className="mob-links">
                    <Language />
                    <span className="mob-order"> Check your order</span>
                </div>
                <div className="mob-line" />
            </Drawer>
        </div>
    )
};

export default Header;

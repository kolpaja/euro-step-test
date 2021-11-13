import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { languages } from './lanuages';
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames';

import { Menu, Dropdown, } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';


const Language = () => {
    const { t } = useTranslation();
    // console.log(document.querySelector('html').lang);

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
        // document.title = t('app_title')
    }, [currentLanguage, t])

    const menu = (
        <Menu>
            {languages.map(({ code, name, country_code }) => (
                <Menu.Item key={country_code}>
                    <span
                        className={classNames('dropdown-item', {
                            disabled: currentLanguageCode === code,
                        })}
                        onClick={() => {
                            i18next.changeLanguage(code)
                        }}
                    >
                        <span
                            className={`flag-icon flag-icon-${country_code} mx-2`}
                            style={{
                                opacity: currentLanguageCode === code ? 0.5 : 1,
                            }}
                        ></span>
                        {name}
                    </span>
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <div className="language">
            <Dropdown overlay={menu} placement="topRight" arrow>
                <button className="btn-lang">
                    <span>{currentLanguage.name}</span>
                    <i><CaretDownOutlined /></i>
                </button>
            </Dropdown>
        </div>
    )
}

export default Language;

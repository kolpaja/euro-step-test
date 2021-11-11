import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import GlobeIcon from '../icons/GlobeIcon';
import { languages } from './lanuages';
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'

const Language = () => {
    const { t } = useTranslation();
    // console.log(document.querySelector('html').lang);

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
        // document.title = t('app_title')
    }, [currentLanguage, t])
    return (
        <div className="language my-2">
            <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <GlobeIcon width="24" height="24" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <span className="dropdown-item-text">{t('language')}</span>
                    </li>
                    {languages.map(({ code, name, country_code }) => (
                        <li key={country_code}>
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Language;

import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive';
import Footer from '../../components/Footer';
import Button from "../../components/Button"
import Header from "../../components/Header"
import { Divider } from 'antd';
import background from "../../utils/assets/img/home.png"

const AppLayout = ({ children }) => {
    console.log(children);
    const { t } = useTranslation();

    const isMobile = useMediaQuery({ maxWidth: 375 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    console.log({ isMobile, isTablet });
    return (
        <div className="app-layout">
            <div className="header-backdrop">
                <Header isMobile={isMobile} />
                <div className="header-animate">
                    <div className="line" />
                    <div className="text-animate">
                        <h1>EVER SEEN</h1>
                        <h1>SOMETHING LIKE THIS?</h1>
                        <p>
                            Electric blues, cotton-candy pinks and citrus greens
                            fall's is all over the color wheel
                        </p>
                        <Button
                            size="main"
                            color="black"
                            text="DISCOVER NEW COLLECTION"
                            type="button"
                        />
                        {isMobile && <div className="dividers" />}
                    </div>
                </div>
            </div>
            <div className="inner-content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout

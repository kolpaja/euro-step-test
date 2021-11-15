import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer';
import Button from "../../components/Button"
import Header from "../../components/Header"

const AppLayout = ({ children }) => {
    console.log(children);
    const { t } = useTranslation();
    return (
        <div className="app-layout">
            <div className="header-backdrop">
                <Header />
                <div className="header-animate">
                    <div className="line" />
                    <div>
                        <h1>EVER SEEN</h1>
                        <h1>SOMETHING LIKE THIS?</h1>
                        <p>
                            Electric blues, cotton-candy pinks and citrus greens fall's is all over the color wheel
                        </p>
                        <Button
                            size="main"
                            color="black"
                            text="DISCOVER NEW COLLECTION"
                            type="button"
                        />
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

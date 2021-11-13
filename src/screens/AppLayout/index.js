import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Loading from '../../components/Loading';
import Header from "../../components/Header"

const AppLayout = ({ children }) => {
    console.log(children);
    const { t } = useTranslation();
    return (
        <div className="app-layout">
            <div className="header-backdrop">
                <Header />

            </div>
            <div className="inner-content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout

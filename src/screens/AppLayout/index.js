import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Loading from '../../components/Loading';

const AppLayout = () => {
    const { t } = useTranslation();
    return (
        <div className="app-layout">
            <Home />
            <h1> {t("welcome_message")}</h1>
            <Loading />
            <Footer />
        </div>
    )
}

export default AppLayout

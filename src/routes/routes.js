import { Redirect } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import Settings from '../components/Settings';
import Error from '../components/Error';
import Cart from '../components/Cart';
import Airport from '../components/Airport';
import Home from '../components/Home';

const routes = [
    { path: '/home', exact: true, name: 'Home', component: Home },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/airport', exact: true, name: 'Airport', component: Airport },
    { path: '/cart', exact: true, name: 'Cart', component: Cart },
    { path: '/register', exact: true, name: 'Register', component: Register },
    { path: '/settings', exact: true, name: 'Settings', component: Settings, breadcrumbName: 'Settings' },
    { path: '/', exact: true, component: () => <Redirect to="/home" />, breadcrumbName: 'AppLayout' },
    // { path: '*', exact: false, name: 'Error', component: Error },
];

export default routes;
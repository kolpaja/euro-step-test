import { Redirect } from 'react-router-dom';

import AppLayout from '../screens/AppLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import Settings from '../components/Settings';
import Error from '../components/Error';

const routes = [
    { path: '/AppLayout', exact: true, name: 'AppLayout', component: AppLayout, breadcrumbName: 'AppLayout' },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/register', exact: true, name: 'Register', component: Register },
    { path: '/settings', exact: true, name: 'Settings', component: Settings, breadcrumbName: 'Settings' },
    { path: '/', exact: true, component: () => <Redirect to="/AppLayout" />, breadcrumbName: 'AppLayout' },
    { path: '*', exact: true, name: 'Error', component: Error },
];

export default routes;
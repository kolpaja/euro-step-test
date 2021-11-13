import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AppLayout from "../screens/AppLayout";
import routes from "./routes";

function Routing() {
    return (
        <Router>
            <Switch>
                <AppLayout>
                    {routes.map((route, index) => {
                        return (<Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            breadcrumbName={route.breadcrumbName}
                            component={(props) => {
                                return (
                                    <route.component {...props} />
                                );
                            }}
                        />)
                    })}
                </AppLayout>
            </Switch>
        </Router>
    );
}

export default Routing;

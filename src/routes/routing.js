import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from "./routes";

function Routing() {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        breadcrumbName={route.breadcrumbName}
                        component={(props) => {
                            return (
                                <div>
                                    <route.component {...props} />
                                </div>
                            );
                        }}
                    />
                })}
            </Switch>
        </Router>
    );
}

export default Routing;

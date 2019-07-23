import React, {Fragment} from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const Main = () => (
    <Fragment>
        <Switch>
            <Route exact path="/Home" component={Home} />
        </Switch>
    </Fragment>
);

export default Main;

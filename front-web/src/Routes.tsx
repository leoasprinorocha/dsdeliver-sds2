import { Switch } from "react-router-dom";

import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import NavBar from "./Navbar";
import Orders from "./Orders";
function Routes(){
    return(
        <BrowserRouter>

        <NavBar />
        <Switch>

        <Route path="/orders">
            <Orders />

        </Route>

        <Route path="/">
            <Home />

        </Route>

        </Switch>
        </BrowserRouter>
    );
}

export default Routes;
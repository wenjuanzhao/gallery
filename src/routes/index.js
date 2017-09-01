import React from "react";
import {HashRouter,Route} from "react-router-dom";
import {Home} from '../containers/home/index.js';
function Routes() {
    return (
        <HashRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route  path="/tab/:id" component={Home}></Route>
            </div>
        </HashRouter>
    )
}
export default Routes
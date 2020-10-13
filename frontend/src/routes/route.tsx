import React from 'react'
import {Switch, BrowserRouter, Route } from 'react-router-dom'

import Landing from '../components/Landing'
import OrphanageMap from '../components/OrphanageMap'

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}></Route>
                <Route path="/app" component={OrphanageMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
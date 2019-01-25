
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Index';
import Anuncio from './pages/Anuncio/Index';

const Routes = () =>  (

        <Switch>
            <Route path="/" exact componet = { Home }/>  
            <Route path="/anuncio/:id" componet = { Anuncio  }/>  
                      
        </Switch>
    );

export default Routes;
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Route, Switch } from "react-router-dom";

import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import PageNotFound from './pages/page-not-found/page-not-found.component';


function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact={true} path="/" component={HomePage}/>
    <Route exact={false} path="/shop" component={ShopPage}/>
    <Route path="/contact" component={PageNotFound}/>
    </Switch>
    </div>
  );
}

export default App;

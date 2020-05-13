import React from "react";
//Implementing nested route
import { Route } from "react-router-dom";

import "./shop-page.styles.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

//We get the match from Route (in App.js): route always passes match, location and history to children
const ShopPage = ({match}) => {
  // console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
};

export default ShopPage;

import React from "react";
//Implementing nested route
import { Route } from "react-router-dom";
// Make a connected component
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../services/firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

// The 2 components we want to pass the loading HOC spinner
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//We get the match from Route (in App.js): route always passes match, location and history to children
class ShopPage extends React.Component {
  // React will already invoke the super for us
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  //this is a one of call to Firestore (instead of the observable pattern)
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    fetch(
      "https://firestore.googleapis.com/v1/projects/crown-db-7357e/databases/(default)/documents/collections"
    )
      .then(response => response.json())
      .then(collections => console.log(collections));

    // collectionRef.get().then(snapshot => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          //instead of Component we pass the method render, so we can actually pass a function, it will take  the props from Route (match, but also isLoading)
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);

// unsubscribeFromSnapshot = null;

//   componentDidMount() {
//     const { updateCollections } = this.props;
//     // get the documentRef from Firestore and assign it to a localstate variable
//     const collectionRef = firestore.collection("collections");

//     //use SnapShot to get the data: whenever the collection updates, or the code is run for the first time, it will send us
//     //the snapshot of the document (aka, the data)
//     collectionRef.onSnapshot(async snapshot => {
//       const collectionMap = convertCollectionSnapshotToMap(snapshot);
//       updateCollections(collectionMap);
//       this.setState({ loading: false });
//     });
//   }

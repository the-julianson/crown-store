import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import PageNotFound from "./pages/page-not-found/page-not-found.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import {
  auth,
  createUserProfileDocument
} from "./services/firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={false} path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="." />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/contact" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // No need to load the data twice
  // collectionsArray: selectCollectionForPreview
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// unsubscribeFromAuth = null;

//   componentDidMount() {
//     const { setCurrentUser } = this.props;
//     //to load data in firestore
//     // const { collectionsArray } = this.props;

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         // we only get the data if we use the .data
//         userRef.onSnapshot(snapShot => {
//           setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data()
//           });
//         });
//       }
//       //if the user is none, it will come back as null, we assign it to userAuthv()
//       setCurrentUser(userAuth);
//       // addCollectionAndDocuments(
//       //   "collections",
//       //   collectionsArray.map(({ title, items }) => ({ title, items }))
//       // );
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

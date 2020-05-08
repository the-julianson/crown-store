import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import { Route, Switch } from "react-router-dom";

import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import PageNotFound from "./pages/page-not-found/page-not-found.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {
  auth,
  createUserProfileDocument
} from "./services/firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} =this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // we only get the data if we use the .data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          console.log(this.state);
        });
      }
      //if the user is none, it will come back as null, we assign it to userAuthv()
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
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/contact" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

// Use mapDispatchToProps to send the payload? 
// Connect takes 2 arguments, 1st one we don't need because it doesnt need (in this case) props
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
 
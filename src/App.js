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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // we only get the data if we use the .data
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      //if the user is none, it will come back as null, we assign it to userAuthv()
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;

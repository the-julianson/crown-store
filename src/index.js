import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

// Config Redux, define Provider, and pass it the store
import { Provider } from "react-redux";

//COnfig Persistor for Redux; PersistGate is the component to Wrap our app where we want to persist things.
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

//Provider is the parent, we want everything to access the content of the APP
// import the store and pass it to the provider
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

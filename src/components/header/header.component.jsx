import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";

import { auth } from "../../services/firebase/firebase.utils";

//HOC for redux
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

//Pass the state as props to the component: mapStateToProps and Connect will be used when a component  needs props.
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

// we pass 2 arguments here, the first is the function that allows us to access the state
//Connect is a HOC
export default connect(mapStateToProps)(Header);

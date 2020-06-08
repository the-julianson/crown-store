import React from "react";
import "./header.styles.scss";

// styled components
import {
  OptionDiv,
  OptionLink,
  OptionsContainer,
  LogoContainer,
  HeaderContainer
} from "./header.styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import { auth } from "../../services/firebase/firebase.utils";

//HOC for redux
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//Pass the state as props to the component: mapStateToProps and Connect will be used when a component  needs props.
// Advanced way to destructure: nested objects or arrays.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

// we pass 2 arguments here, the first is the function that allows us to access the state
//Connect is a HOC
export default connect(mapStateToProps)(Header);

import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-botton.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// we just pass dispatch to CartDropDown because it connect will still pass it 
//even if we don't pass it as a second argument (before we passed the dispatchStateToProps() function which was a dispatch function)
const CartDropdown = ({ cartItems, history, dispatch, ...otherProps }) => {
  
  //console.log(otherProps)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )
        }
      </div>
      <CustomButton onClick={() => {
        history.push('./checkout');
        dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
}); 

export default withRouter(connect(mapStateToProps)(CartDropdown));

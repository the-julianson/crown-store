import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-botton.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (<CartItem key={cartItems.id} item={cartItem} />))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems : selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);

import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selector'


import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// Simple CartIcon that when clicked will display drop-down menu, it also consumes the state (w/Redux)
const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapToStateProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})


export default connect(mapToStateProps, mapDispatchToProps)(CartIcon);

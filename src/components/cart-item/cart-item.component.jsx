import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
          <span className='name'>{name}</span>
          <span className='price'>{quantity} x {price}</span>
      </div>
    </div>
  );
};

export default CartItem;


// to destructure this, nested objects in an array: { items : { id, ...otherPros}}
// || to destructure this, nested objects in an array: { items : { name, imageUrl, price}}
// const SHOP_DATA = [
//     {
//       id: 1,
//       title: 'Hats',
//       routeName: 'hats',
//       items: [
//         {
//           id: 1,
//           name: 'Brown Brim',
//           imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//           price: 25

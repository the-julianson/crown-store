import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-botton.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <CustomButton className="inverted" />
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

// we define a dispatch func that takes an object, the property is addItem (pero podria ser perro)
// y el value is a dispatch function that takes a function and add the item to the argument so in the end
//it will give us the object with type and payload (the argument here, is generic, it could well just be "gato")
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

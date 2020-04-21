import React, { Component } from "react";
import "./shop-page.styles.scss";
import SHOP_DATA from "./shop-page.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherShop }) => (
          <CollectionPreview key={id} {...otherShop} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

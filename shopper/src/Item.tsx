import React from "react";
import { ItemType } from "./static-data";
import "./Item.css";

type props = {
  item: ItemType;
  onAddToCart: (item: ItemType) => void;
};

export default class Item extends React.Component<props> {
  render() {
    return (
      <div className="Item">
        <div className="Item-left">
          <div className="Item-image" />
          <div className="Item-title">{this.props.item.name}</div>
          <div className="Item-description">{this.props.item.description}</div>
        </div>
        <div className="Item-right">
          <div className="Item-price">${this.props.item.price}</div>
          <button
            className="Item-addToCart"
            onClick={() => this.props.onAddToCart(this.props.item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

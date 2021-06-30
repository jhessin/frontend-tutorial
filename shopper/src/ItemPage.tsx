import React from "react";
import { ItemType } from "./static-data";
import Item from "./Item";
import "./ItemPage.css";

type props = {
  items: ItemType[];
	onAddToCart: (item: ItemType) => void;
};

export default class ItemPage extends React.Component<props> {
  render() {
    return (
      <ul className="ItemPage-items">
        {this.props.items.map((item) => (
          <li key={item.id} className="ItemPage-item">
						<Item 
							item={item}
							onAddToCart={() => this.props.onAddToCart(item)}
						/>
          </li>
        ))}
      </ul>
    );
  }
}

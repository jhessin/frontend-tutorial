import React, { useState } from "react";
import ItemPage from "./ItemPage";
import { items, ItemType } from "./static-data";
import Nav from "./Nav";
import "./App.css";

export const App = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState<ItemType[]>([]);

  const addToCart = (item: ItemType) => {
    setCart((prevCart: ItemType[]) => [...prevCart, item]);
  };

  return (
    <div className="App">
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div>{cart.length} items</div>

      <main className="App-content">
        <Content addToCart={addToCart} tab={activeTab} />
      </main>
    </div>
  );
};

type Props = {
  tab: string;
  addToCart: (item: ItemType) => void;
};

class Content extends React.Component<Props> {
  render() {
    const { tab, addToCart } = this.props;

    switch (tab) {
      default:
      case "items":
        return <ItemPage items={items} onAddToCart={addToCart} />;
      case "cart":
        return <span>the cart</span>;
    }
  }
}

export default App;

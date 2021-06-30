import React from "react";

const Nav = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}) => {
  const itemClass = (tabName: string) =>
    `App-nav-item ${activeTab === tabName ? "selected" : ""}`;

  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass("items")}>
          <button onClick={() => setActiveTab("items")}>Items</button>
        </li>
        <li className={itemClass("cart")}>
          <button onClick={() => setActiveTab("cart")}>Cart</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

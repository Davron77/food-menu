import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  console.log(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }

    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <Categories filterItems={filterItems} categories={categories} />
        </div>
        <div className="section-center">
          {menuItems.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

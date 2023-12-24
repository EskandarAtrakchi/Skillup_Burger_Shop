import React, { useState } from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import Cart from "../cart/Cart";
import { Navigate } from "react-router-dom";

const Menu = () => {
  const [cartItems, setCartItems] = useState({
    1: 0,
    2: 0,
    3: 0,
  });

  const Handler = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: prevItems[itemId] + 1,
    }));
    console.log(`Item ${itemId} added to cart!`);
    
  };

  return (
    <div className="wappingDiv">
        <div className="menu">
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            price={200}
            title="Cheese Burger"
            handler={() => Handler(1)}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            price={180}
            title="Veggie Burger"
            handler={() => Handler(2)}
            delay={0.2}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            price={250}
            title="Cheese Burger with French Fries"
            handler={() => Handler(3)}
            delay={0.3}
          />
          <Cart cartItems={cartItems} />
        </div>
    </div>
  );
};

export default Menu;
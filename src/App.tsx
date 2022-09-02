import React, { useState } from "react";
import "./App.css";
import { Chocolate } from "./Chocolate";
import { chocolates } from "./chocolates";
import { ShoppingBag } from "./ShoppingBag";
import { IChocolateItem } from "./chocolates";

export const App: React.FC = () => {
  //since now we want try yo make it like wen you click on add button , then your object add to add to shp[[img button]]
  const [shoppingBagItems, setShoppingBagItems] = useState<IChocolateItem[]>(
    []
  );
  const addToShoppingBag = (itemToAdd: IChocolateItem) => {
    setShoppingBagItems([...shoppingBagItems, itemToAdd]);
  };
  return (
    <>
      <div>
        <h1>something Header</h1>
        <ShoppingBag items={shoppingBagItems} />
      </div>
      <div>
        {chocolates.map((each) => (
          <Chocolate chocolate={each} addToShoppingBag={addToShoppingBag} />
        ))}
      </div>
    </>
  );
};

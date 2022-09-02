import React, { useState } from "react";
import { IChocolateItem } from "./chocolates";
interface IShoppingBagProps {
  items: IChocolateItem[];
}

export const ShoppingBag: React.FC<IShoppingBagProps> = ({ items }) => {
  const [bascket, setBascket] = useState<boolean>(false);
  const Clicking = () => {
    setBascket(!bascket);
  };
  return (
    <div>
      <button className="btn" onClick={Clicking}>
        Bascket Logo
      </button>
      {bascket && ( //&& its uqual with if this is true do that
        <div className="shopping-bag-container">
          {items.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

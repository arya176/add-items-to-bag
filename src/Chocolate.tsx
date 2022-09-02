import React from "react";
import { IChocolateItem } from "./chocolates";

interface IChocolateProps {
  chocolate: IChocolateItem;
  addToShoppingBag: (itemToAdd: IChocolateItem) => void;
}
export const Chocolate: React.FC<IChocolateProps> = ({
  chocolate,
  addToShoppingBag,
}) => {
  return (
    <>
      <div className="chocolate">
        <img
          className="chocolate-image"
          src={chocolate.imgURL}
          alt="chocolate"
        />
        <h6>{chocolate.name}</h6>
        <p>${chocolate.price}</p>
        <button className="btn" onClick={() => addToShoppingBag(chocolate)}>
          Add to Bascket
        </button>
      </div>
    </>
  );
};

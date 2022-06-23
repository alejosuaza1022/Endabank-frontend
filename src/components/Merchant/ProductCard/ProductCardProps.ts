import ShoppingItemProps from "../ShoppingItem/ShoppingItemProps";
import React from "react";

interface ProductCardProps {
    name: string;
    description: string;
    publishedDays: number;
    placeToPickUp: string;
    price:number;
    id:number;
    urlImage:string,
    shoppingList: Array<ShoppingItemProps>,
    setShowPopUpMessage: React.Dispatch<React.SetStateAction<boolean>>;
    setShoppingList: React.Dispatch<React.SetStateAction<Array<ShoppingItemProps>>>;

}
export default ProductCardProps;
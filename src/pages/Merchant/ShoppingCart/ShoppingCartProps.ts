import ShoppingItemProps from "../../../components/Merchant/ShoppingItem/ShoppingItemProps";
import React from "react";

interface ShoppingCartProps {
    shoppingList: Array<ShoppingItemProps>,
    setShoppingList: React.Dispatch<React.SetStateAction<Array<ShoppingItemProps>>>;
}
export default ShoppingCartProps;
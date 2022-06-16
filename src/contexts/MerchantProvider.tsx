import React, {createContext, ReactNode, useState} from "react";
import ShoppingCartProps from "../pages/Merchant/ShoppingCart/ShoppingCartProps";
import ShoppingItemProps from "@components/Merchant/ShoppingItem/ShoppingItemProps";

const ShoppingCartContext = createContext<ShoppingCartProps>({
    shoppingList: [], setShoppingList: () => {
    }, totalPrice: 0, setTotalPrice: () => {
    }
});
const ShoppingCartProvider = ({children}: { children: ReactNode }) => {
    const [shoppingList, setShoppingList] = useState<Array<ShoppingItemProps>>([])
    const [totalPrice, setTotalPrice] = useState(0)
    return (
        <ShoppingCartContext.Provider value={{shoppingList, setShoppingList,totalPrice,setTotalPrice}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export {ShoppingCartProvider, ShoppingCartContext};

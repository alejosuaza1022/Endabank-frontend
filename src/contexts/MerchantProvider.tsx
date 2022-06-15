import React, {createContext, ReactNode, useState} from "react";
import ShoppingCartProps from "../pages/Merchant/ShoppingCart/ShoppingCartProps";
import ShoppingItemProps from "@components/Merchant/ShoppingItem/ShoppingItemProps";

const ShoppingCartContext = createContext<ShoppingCartProps>({
    shoppingList: [], setShoppingList: () => {
    }
});
const ShoppingCartProvider = ({children}: { children: ReactNode }) => {
    const [shoppingList, setShoppingList] = useState<Array<ShoppingItemProps>>([])
    return (
        <ShoppingCartContext.Provider value={{shoppingList, setShoppingList}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export {ShoppingCartProvider, ShoppingCartContext};

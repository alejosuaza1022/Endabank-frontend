import "./index.css"
import React, {useContext, useState} from "react";
import QuatityCounterProps from "./QuantityCounterProps";
import {ShoppingCartContext} from "../../../contexts/MerchantProvider";


const QuantityCounter: React.FC<QuatityCounterProps> = ({price, setTotalPriceItem, currentQuantity, id}) => {
    const {setShoppingList, shoppingList} = useContext(ShoppingCartContext)
    const [quantity, setQuantity] = useState(currentQuantity);
    const updateQuantityToItem = (newQuantity: number) => {
        setShoppingList(shoppingList.map(x => {
            if (x.id === id) {
                x.quantity = newQuantity;
            }
            return x;
        }))
    }
    const increaseQuantity = () => {
        let auxQuantity = quantity + 1;
        setQuantity(auxQuantity)
        updateQuantityToItem(auxQuantity)
        setTotalPriceItem(price * auxQuantity)
    }
    const decreaseQuantity = () => {
        if (quantity - 1 < 0)
            return
        let auxQuantity = quantity - 1;
        setQuantity(auxQuantity)
        updateQuantityToItem(auxQuantity)
        setTotalPriceItem(price * auxQuantity)
    }

    return (
        <div className="custom-number-input h-10 w-32">
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button onClick={() => decreaseQuantity()}
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                    className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number" readOnly={true} value={quantity}/>
                <button onClick={() => increaseQuantity()}
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )


}
export default QuantityCounter;
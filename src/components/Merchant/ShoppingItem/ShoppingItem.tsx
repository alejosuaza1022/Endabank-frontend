import React, {useContext, useState} from "react";
import ShoppingItemProps from "./ShoppingItemProps";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import {ShoppingCartContext} from "../../../contexts/MerchantProvider";
import NumberFormat from "react-number-format";

const ShoppingItem: React.FC<ShoppingItemProps> = ({urlImage, name, price, id,quantity}) => {
    const [totalPrice, setTotalPrice] = useState(price * quantity);
    const {shoppingList, setShoppingList} = useContext(ShoppingCartContext)
    const deleteItemFromCart = () => {
        setShoppingList(shoppingList.filter(x => x.id !== id));
    }

    return (
        <>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="#" className="block relative">
                                <img alt="image" src={urlImage}
                                     className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {name}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <QuantityCounter price={price} setTotalPrice={setTotalPrice} currentQuantity={quantity}/>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <NumberFormat className="text-indigo-600 text-sm font-semibold" value={totalPrice}
                                  displayType={'text'}
                                  thousandSeparator={true} prefix={'$'}/>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <svg className="  w-4 h-4 hover:cursor-pointer" viewBox="0 0 26 26"
                         onClick={() => deleteItemFromCart()} fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 1L1 25" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M1 1L25 25" stroke="#27272A" strokeWidth="1.25" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </td>
            </tr>
        </>
    )
}
export default ShoppingItem;
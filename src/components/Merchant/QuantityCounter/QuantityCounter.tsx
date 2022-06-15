import "./index.css"
import React, {useState} from "react";
import QuatityCounterProps from "./QuantityCounterProps";


const QuantityCounter: React.FC<QuatityCounterProps> = ({price, setTotalPrice, currentQuantity}) => {

    const [quantity, setQuantity] = useState(currentQuantity);
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
        setTotalPrice(price * (quantity+1))
    }
    const decreaseQuantity = () => {
        setQuantity(quantity - 1)
        setTotalPrice(price * (quantity-1))
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
                    name="custom-input-number" readOnly={true}  value={quantity}/>
                <button onClick={() => increaseQuantity()}
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )


}
export default QuantityCounter;
import React from "react";

interface QuantityCounterProps {
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    price: number,
    currentQuantity:number
}
export default QuantityCounterProps;

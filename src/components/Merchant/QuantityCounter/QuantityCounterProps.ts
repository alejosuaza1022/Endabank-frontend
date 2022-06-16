import React from "react";

interface QuantityCounterProps {
    setTotalPriceItem: React.Dispatch<React.SetStateAction<number>>;
    price: number,
    currentQuantity:number,
    id: number
}
export default QuantityCounterProps;

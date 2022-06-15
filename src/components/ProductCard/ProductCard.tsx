import React from "react";
import ProductCardObject from "@components/ProductCard/ProductCard.interface";

const ProductCard:React.FC<ProductCardObject> = ({
                                                     name,
                                                     description,
                                                     publishedDays,
                                                     placeToPickUp,
                                                     price,
                                                 }) => {
    return (<div className="mx-2 w-64  mb-8">
        <div>
            <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                 className="w-full h-44 rounded-t-md" alt="product"/>
        </div>
        <div className="bg-white rounded-b-md">
            <div className="flex items-center justify-between px-4 pt-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="icon icon-tabler icon-tabler-bookmark" width={20}
                         height={20}
                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"/>
                    </svg>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between pr-4">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-xs text-gray-600 pl-5">{publishedDays} days ago</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">{description}</p>
                <div className="flex mt-4">
                    <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months
                            warranty</p>
                    </div>
                    <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete
                            box</p>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">{placeToPickUp}</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">${price}</h3>
                </div>
            </div>
        </div>
    </div>)
}
export default ProductCard; 
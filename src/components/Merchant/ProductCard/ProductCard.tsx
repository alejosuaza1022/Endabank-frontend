import React from "react";
import NumberFormat from "react-number-format";
import "./index.css"
import ProductCardProps from "./ProductCardProps";

const ProductCard: React.FC<ProductCardProps> = ({
                                                     name,
                                                     description,
                                                     publishedDays,
                                                     placeToPickUp,
                                                     price,
                                                     setShoppingList,
                                                     shoppingList,
                                                     id, urlImage,
                                                     setShowPopUpMessage
                                                 }) => {
    const addToShoppingList = () => {
        const item = shoppingList.filter(x => x.id === id)
        setShowPopUpMessage(true)
        setTimeout(() => {
            setShowPopUpMessage(false)
        }, 3000)
        if (item.length !== 0) {
            const newList = shoppingList.map(x => {
                if (x.id === id) {
                    return {
                        ...x,
                        quantity: x.quantity + 1
                    }
                }
                return x
            })
            setShoppingList(newList)
            return
        }
        setShoppingList([...shoppingList, {name, price, id, urlImage, quantity: 1}])

    }
    return (
        <div className="card mx-2 w-64 mb-8 hover:cursor-pointer ">
            <div>
                <img src={urlImage}
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
                    <div className="bg-indigo-600  py-1.5 px-3 rounded-full" onClick={() => addToShoppingList()}>
                        <p className="text-xs text-white">Add to cart</p>
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
                    <div className="flex items-center justify-between py-4 pr-2">
                        <h2 className="text-indigo-600 text-sm font-semibold">{placeToPickUp}</h2>
                        <NumberFormat className="text-indigo-600 text-sm font-semibold" value={price}
                                      displayType={'text'}
                                      thousandSeparator={true} prefix={'$'}/>
                    </div>
                </div>
            </div>
        </div>)
}
export default ProductCard;
import HeaderNavigationMerchant from "./HeaderNavigationMerchant"
import FilterMerchant from "./FilterMerchant";
import ProductCard from "../../../components/Merchant/ProductCard/ProductCard";
import productList from "../../../components/Merchant/ProductCard/ProductList";
import React, {useContext, useState} from "react";
import {ShoppingCartContext} from "../../../contexts/MerchantProvider";
import {PopUpMessage} from "../../../components/index";

const MerchantSite = () => {
    const [showPopUpMessage, setShowPopUpMessage] = useState(false)
    const {shoppingList, setShoppingList} = useContext(ShoppingCartContext)
    return (
        <>
            <div className="flex flex-col ">
                <div className="w-full "><HeaderNavigationMerchant/></div>
                <div className="flex w-full">
                    <div className="w-1/4">
                        <FilterMerchant/>
                    </div>
                    <div className="bg-gray-50 w-3/4 py-8 self-end pr-4	">
                        <div className="flex flex-wrap w-full items-center lg:justify-between justify-center">
                            {productList.map(x => <ProductCard key={x.id} name={x.name} description={x.description}
                                                               publishedDays={x.publishedDays}
                                                               placeToPickUp={x.placeToPickUp} price={x.price} id={x.id}
                                                               setShoppingList={setShoppingList} urlImage={x.urlImage}
                                                               shoppingList={shoppingList}
                                                               setShowPopUpMessage={setShowPopUpMessage}/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                {showPopUpMessage && <PopUpMessage message={"Product added to cart"} isColorError={false}
                                                   setShowPopUpMessage={setShowPopUpMessage}/>}
            </div>
        </>
    );
};

export default MerchantSite;
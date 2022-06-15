import HeaderNavigationMerchant from "./HeaderNavigationMerchant"
import FilterMerchant from "./FilterMerchant";
import ProductCard from "../../components/ProductCard/ProductCard";
import productList from "../../components/ProductCard/ProductList";

const MerchantSite = () => {

    return (
        <div className="flex flex-col ">
            <div className="w-full "><HeaderNavigationMerchant/></div>
            <div className="flex w-full">
                <div className="w-1/4">
                    <FilterMerchant/>
                </div>
                <div className="bg-gray-50 w-3/4 py-8 self-end pr-4	">
                    {/* Remove py-8 */}
                    <div className="flex flex-wrap w-full items-center lg:justify-between justify-center">
                        {productList.map(x => <ProductCard name={x.name} description={x.description}
                                                           publishedDays={x.publishedDays}
                                                           placeToPickUp={x.placeToPickUp} price={x.price}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchantSite;
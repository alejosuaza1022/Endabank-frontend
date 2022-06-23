import {Outlet} from "react-router-dom";
import "./index.css";
import {ShoppingCartProvider} from "../contexts/MerchantProvider";

const MerchantLayout = () => {

    return (
        <ShoppingCartProvider>
            <div className="h-screen">
                <Outlet/>
            </div>
        </ShoppingCartProvider>
    );
};

export default MerchantLayout;

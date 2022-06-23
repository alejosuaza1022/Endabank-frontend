
import MerchantLogProps from "./merchantLogProps.interface";

interface MerchantLogPaginationDataProps {
    totalPages: number;
    totalElements: number;
    size: number;
    content: Array<MerchantLogProps>;
}

export default MerchantLogPaginationDataProps;
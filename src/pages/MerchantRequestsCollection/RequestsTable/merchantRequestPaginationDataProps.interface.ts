import MerchantRequestProps from "./merchantRequestProps.interface";

interface MerchantRequestPaginationDataProps {
    totalPages: number;
    totalElements: number;
    size: number;
    content: Array<MerchantRequestProps>;
}

export default MerchantRequestPaginationDataProps;
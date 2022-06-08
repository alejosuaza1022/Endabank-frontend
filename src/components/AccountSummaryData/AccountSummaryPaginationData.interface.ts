import TransactionSummaryProps from "@components/AccountSummaryData/AccountSummaryTransactionsSummary.interface";

interface PaginationDataProps {
    totalPages: number;
    totalElements: number;
    size: number;
    content: Array<TransactionSummaryProps>;
}
export default PaginationDataProps;
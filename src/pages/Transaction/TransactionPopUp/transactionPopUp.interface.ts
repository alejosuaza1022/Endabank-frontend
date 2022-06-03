interface TransactionPopUpInterface{
    amount: number;
    bankAccountReceiver: {accountNumber: string};
    bankAccountIssuer: {accountNumber: string};
    createAt: string;
}
export default TransactionPopUpInterface;

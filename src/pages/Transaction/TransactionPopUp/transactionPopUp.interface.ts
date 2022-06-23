interface TransactionPopUpInterface{
    amount: number;
    bankAccountReceiver: {accountNumber: string};
    bankAccountIssuer: {accountNumber: string};
    createAt: string;
    stateType:{name:string};
    stateDescription: string;
}
export default TransactionPopUpInterface;

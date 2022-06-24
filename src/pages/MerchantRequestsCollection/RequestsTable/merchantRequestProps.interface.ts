interface MerchantRequestProps {
    id: string,
    merchantRequestStateName: string,
    createAt: string,
    storeName: string,
    approveOptionState?: boolean,
    rejectOptionState?: boolean,
    token?: string
}

export default MerchantRequestProps;
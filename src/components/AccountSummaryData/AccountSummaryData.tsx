import TransactionSummaryProps from "@components/AccountSummaryData/AccountSummaryTransactionsSummary.interface";
import React from "react";
import NumberFormat from "react-number-format";

const SelectForm: React.FC<TransactionSummaryProps> = ({
    createAt,
    description,
    amount,
    wasReceived,
    id,
    stateTypeId,
    }) => {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center justify-left space-x-60">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Date: <NumberFormat
                                value={createAt}
                                displayType={'text'}
                                format={'####/##/## ##:##:##'}
                    />
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Description: {description}
                    </p>
                </div>{wasReceived?(
                    <div
                        className="inline-flex items-center text-base font-semibold text-green-500 dark:text-white">
                        <NumberFormat
                            value={amount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                        />
                    </div>
                ):(
                <div
                    className="inline-flex items-center text-base font-semibold text-red-500 dark:text-white">
                    <NumberFormat
                        value={amount}
                        className="foo"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$-'}
                    />
                </div>
            )}
            </div>
        </li>
);
};

export default SelectForm;
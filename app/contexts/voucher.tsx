import React from 'react'
import { VoucherType } from '../../types';
import { Vouchers } from './voucherData';

export type AllVouchersType = {
currentVouchers: VoucherType[];
pastVouchers: VoucherType[];
}

export interface VoucherContextInterface {
    loading: boolean;
    error: boolean;
    data?: AllVouchersType,
    refetchData?: () => void,
    networkStatus?: number
}

export const defaultVoucher: VoucherContextInterface = {
    loading: true,
    error: false,
    networkStatus: 4,
    data:Vouchers
};

const VoucherContext = React.createContext<VoucherContextInterface>(defaultVoucher);

type Props = {
    children: React.ReactNode;
};
export const VoucherContextProvider = ({ children }: Props) => {
    const [voucher, setVoucher] = React.useState<VoucherContextInterface>(defaultVoucher);
    React.useEffect(() => {
        (async () => {
            setVoucher({ ...voucher, data: Vouchers, loading: false });
            // setTimeout(() => {
            //     setStore({ ...store, data: storeData, loading: false });
            // }, 2000)
        })()
    }, []);

    const refetchData = () => {
        setVoucher({ ...voucher, networkStatus: 7, });
        (async () => {
            setTimeout(() => {
                setVoucher({ ...voucher, networkStatus: 4 });
            }, 2000)
        })()
    }

    return (
        <VoucherContext.Provider value={{ ...voucher, refetchData }}>{children}</VoucherContext.Provider>
    );
};

export const VoucherContextConsumer = VoucherContext.Consumer;

export const useVoucher = (): VoucherContextInterface => React.useContext(VoucherContext);
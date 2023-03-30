import React from 'react'

import { CategoryType } from '../../types';
import { storeData } from './storeData';

type StoreType = {
    categories?: CategoryType[];
    image?: string;
    name?: string;
    currency: string,
    deliveryFee: number
}
export interface StoreContextInterface {
    loading: boolean;
    error: boolean;
    data?: StoreType,
    refetchData?: () => void,
    networkStatus?: number
}

export const defaultStore: StoreContextInterface = {
    loading: true,
    error: false,
    networkStatus: 4,
};

const StoreContext = React.createContext<StoreContextInterface>(defaultStore);

type Props = {
    children: React.ReactNode;
};
export const StoreContextProvider = ({ children }: Props) => {
    const [store, setStore] = React.useState<StoreContextInterface>(defaultStore);
    React.useEffect(() => {
        (async () => {
            setStore({ ...store, data: storeData, loading: false });
            // setTimeout(() => {
            //     setStore({ ...store, data: storeData, loading: false });
            // }, 2000)
        })()
    }, []);

    const refetchData = () => {
        setStore({ ...store, networkStatus: 7, });
        (async () => {
            setTimeout(() => {
                setStore({ ...store, networkStatus: 4 });
            }, 2000)
        })()
    }

    return (
        <StoreContext.Provider value={{ ...store, refetchData }}>{children}</StoreContext.Provider>
    );
};

export const StoreContextConsumer = StoreContext.Consumer;

export const useStore = (): StoreContextInterface => React.useContext(StoreContext);
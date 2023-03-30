import React, { useEffect, useState, Dispatch, useReducer } from 'react'
import { AddressAction, addressInitialState, addressReducer } from '../reducers';
import { AddressType } from '../../types';

export interface AddressContextInterface {
    address?: AddressType[],
    dispatchAddress?: Dispatch<AddressAction>
}

const AddressContext = React.createContext<AddressContextInterface>({});

type Props = {
    children: React.ReactNode;
};
export const AddressContextProvider = ({ children }: Props) => {
    // const {loading, error, address} = useQuery(AddressesQuery)
    const[address, dispatchAddress] = useReducer(addressReducer, addressInitialState)
    return (
        <AddressContext.Provider value={{address, dispatchAddress }}>{children}</AddressContext.Provider>
    );
};

export const AddressContextConsumer = AddressContext.Consumer;

export const useAddress = (): AddressContextInterface => React.useContext(AddressContext);
import React, { Dispatch, useReducer } from 'react'
import { CartAction, cartInitialState, cartReducer } from '../reducers';
import { ItemType } from '../../types';


export interface CartContextInterface {
    cart: ItemType[],
    dispatchCart?: Dispatch<CartAction>
}

const CartContext = React.createContext<CartContextInterface>({cart: []});

type Props = {
    children: React.ReactNode;
};
export const CartContextProvider = ({ children }: Props) => {
    const [cart, dispatchCart] = useReducer(cartReducer, cartInitialState)
    return (
        <CartContext.Provider value={{ cart, dispatchCart }}>{children}</CartContext.Provider>
    );
}

export const CartContextConsumer = CartContext.Consumer;

export const useCart = (): CartContextInterface => React.useContext(CartContext);
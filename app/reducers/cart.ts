import { ItemType } from '../../types'

export enum CartActionType { 'increment', 'decrement', 'multiItems' }

export type CartAction = {
    type: CartActionType;
    payload?: ItemType | ItemType[]
}
export type CartState = ItemType[]

export const cartInitialState: CartState = []


export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case CartActionType.increment:
            {
                const currentState = state
                const index = currentState.findIndex(item => item.id === action.payload?.id)
                if (index > -1) {
                    currentState[index].quantity = currentState[index].quantity + 1
                    return [...currentState]
                }
                return [...currentState, {
                    id: (action.payload as ItemType)?.id || '',
                    title: (action.payload as ItemType)?.title || '',
                    image: (action.payload as ItemType)?.image || '',
                    price: (action.payload as ItemType)?.price || 0,
                    description: (action.payload as ItemType)?.description || '',
                    quantity: 1
                }]
            }
        case CartActionType.decrement:
            {
                const currentState = state
                const index = currentState.findIndex(item => item.id === action.payload?.id)
                if (index > -1) {
                    if (currentState[index]?.quantity > 1) {
                        currentState[index].quantity = currentState[index].quantity - 1
                    }
                    else {
                        currentState.splice(index, 1)
                    }
                    return [...currentState]
                }

                return [...currentState]
            }

          case CartActionType.multiItems:
            {
              const currentState = state
              console.log('action payload',  (action.payload as ItemType[]))
              return action.payload as ItemType[]
            }  
            
        default:
            return state
    }
}

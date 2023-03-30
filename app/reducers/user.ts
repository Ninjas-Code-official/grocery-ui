import { UserType } from '../../types'

export enum UserActionType { 'update', 'logout'}

export type UserAction = {
    type: UserActionType;
    payload?: UserType
}
export type UserState = UserType

export const userInitialState: UserState = {id:'1',logout:false, firstName:'kumail', lastName:'Raza', email:'mqumailr@gmail.com', mobile:923352493858}


export function userReducer(state: UserState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionType.update:
            {
              console.log('state', state)
              console.log(action.payload)
              return action.payload? action.payload : state
            }

        case UserActionType.logout:
            {
                console.log('action', action)
            }    
        default:
            return state
    }
}

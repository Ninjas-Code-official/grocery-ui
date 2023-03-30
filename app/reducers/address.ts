import { AddressType } from '../../types'

export enum AddressActionType {'update', 'delete', 'add'}

export type AddressAction = {
    type: AddressActionType;
    payload?: AddressType
}
export type AddressState = AddressType[]

export const addressInitialState: AddressState = [{Id:'1',selected:false, label:1, address:'rabab garden near nishter park opp fatimiyah girls school, flat 302, karachi', note:'yes', region:{"latitude": 33.7000514,
"latitudeDelta": 0.0022021015338999916,
"longitude": 72.9736049,
"longitudeDelta": 0.0017779693007469177}},
{Id:'2', label:2, selected:true, address:'rabab garden near bhojani hall', note:'', region:{"latitude": 33.7000514,
"latitudeDelta": 0.0022021015338999916,
"longitude": 72.9736049,
"longitudeDelta": 0.0017779693007469177,}}
]
    


export function addressReducer(state: AddressState, action: AddressAction): AddressState {
    switch (action.type) {
        case AddressActionType.delete:
            {
              console.log('state', state)
              console.log('payload', action.payload)
              return state.filter((item)=> action.payload?.Id !== item.Id)
            }
        case AddressActionType.add:
            {
                return [...state, action.payload]
            }    
        case AddressActionType.update:
            {
                console.log('action payload', action.payload)
                return state.map((item)=>{
                    if(item.Id == action.payload?.Id){
                        return action.payload
                    }
                    else{
                        return item
                    }
                })
            }    
        default:
            return state
    }
}

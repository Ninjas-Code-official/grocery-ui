import React, { useEffect, useState, Dispatch, useReducer, useRef } from 'react'
import { UserAction, userInitialState, userReducer } from '../reducers';
import { UserType } from '../../types';
import { userData } from './userData';

// export interface UserContextInterface {
//     loading?: Boolean
//     error?: Boolean
//     user?: UserType
// }

export interface UserContextInterface {
    user?: UserType,
    dispatchUser?: Dispatch<UserAction> 
    authRef: any,
    logoutModalVisible?:boolean,
    toggleLogoutModal?:()=>void
}

const UserContext = React.createContext<UserContextInterface>({});

type Props = {
    children: React.ReactNode;
};
export const UserContextProvider = ({ children }: Props) => {
    // const {loading,error,data}= useQuer(UserQuery)
    // const [user, setUser] = useState<UserType| undefined>();
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const authRef = useRef()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const toggleLogoutModal = ()=> {
        console.log('toggle func')
        setLogoutModalVisible(!logoutModalVisible)
    }
    // useEffect(() => {
    //     (async()=>{
    //         setUser(userData)
    //         setLoading(false)
    //     })()
    // }, [])
    const[user, dispatchUser] = useReducer(userReducer, userInitialState)
    return (
        <UserContext.Provider value={{user, dispatchUser, authRef, toggleLogoutModal, logoutModalVisible }}>{children}</UserContext.Provider>
    );
};

export const UserContextConsumer = UserContext.Consumer;

export const useUser = (): UserContextInterface => React.useContext(UserContext);


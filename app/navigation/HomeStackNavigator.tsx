import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Items from '../screens/Items';
import ItemDetail from '../screens/ItemDetail';
import Cart from '../screens/Cart';
import Header from '../components/Header';
import { HomeStackParamList } from '../../types';
import Checkout from '../screens/Checkout';
import InProcessOrder from '../screens/InProcessOrder';
import OrderDetails from '../screens/OrderDetails';
import SearchStackNavigator from './SearchStackNavigator';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TopTabNavigator'
import Orders from '../screens/Orders';
import Profile from '../screens/Profile'
import Address from '../screens/Address'
import AddAddress from '../screens/AddAddress'
import EditAddress from '../screens/EditAddress'
import SearchPlace from '../screens/SearchPlace';
import ApplyVoucher from '../screens/ApplyVoucher'
import ReOrder from "../screens/ReOrder";
import Settings from "../screens/Settings";
import TermsAndConditions from '../screens/TermsAndConditions';
import PaymentMethod from "../screens/PaymentMethod";
import AuthStackNavigator from "./AuthStackNavigator";
import PhoneNumber from '../screens/PhoneNumber';
import OTP from '../screens/OTP';
import CurrentLocation from '../screens/CurrentLocation';
import SelectLocation from '../screens/SelectLocation';
import SelectAddress from '../screens/SelectAddress';
import DeliveryDetail from '../screens/DeliveryDetail';

const HomeStack = createStackNavigator<HomeStackParamList>()

export default function HomeStackNavigator() {
    return (
        <HomeStack.Navigator headerMode='screen' initialRouteName="CurrentLocation">
            <HomeStack.Screen
                name='Home'
                component={DrawerNavigator}
                options={{ headerShown: false }} />
            <HomeStack.Screen
                name='Search'
                component={SearchStackNavigator}
                options={{
                    header: () => (<Header backIcon cartIcon searchInput />)
                }} />
            <HomeStack.Screen
                name='Items'
                component={Items}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon title={scene.route.params?.title} searchIcon cartIcon />)
                    }
                }} />
            <HomeStack.Screen
                name='ItemDetail'
                component={ItemDetail}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon cartIcon />)
                    }
                }} />
            <HomeStack.Screen
                name='Cart'
                component={Cart}
                options={{
                    header: ({ scene }) => {
                        return (<Header title={'Your cart'} backIcon />)
                    }
                }} />
            <HomeStack.Screen
                name='Checkout'
                component={Checkout}
                options={{
                    header: ({ scene }) => {
                        return (<Header title={'Checkout'} backIcon />)
                    }
                }} />
            <HomeStack.Screen
                name='InProcessOrder'
                component={InProcessOrder}
                options={{
                    header: ({ scene }) => {
                        return (<Header title={scene.route.params?.title} backIcon />)
                    }
                }} />
            <HomeStack.Screen
                name='OrderDetails'
                component={OrderDetails}
                options={{
                    header: ({ scene }) => {
                        return (<Header title={'Order Details'} backIcon />)
                    }
                }} />
            <HomeStack.Screen
                name='Orders'
                component={Orders}
                options={{
                    header: ({ scene }) => {
                        return (<Header title={'Orders'} backIcon />)
                    }
                }} />
            <HomeStack.Screen
                name='Profile'
                component={Profile}
                options={{
                    header: ({ scene }) => {
                        return (<Header title={'Profile'} backIcon />)
                    },
                }} />
            <HomeStack.Screen
                name='Address'
                component={Address}
                options={{
                    header: ({ scene }) => {
                        return (<Header title={'Address'} backIcon />)
                    },
                }} />
            <HomeStack.Screen
                name='AddAddress'
                component={AddAddress}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon />)
                    },
                }} />
            <HomeStack.Screen
                name='EditAddress'
                component={EditAddress}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon />)
                    },
                }} />
            <HomeStack.Screen
                name='Vouchers'
                component={TabNavigator}
                options={{
                    header: ({ scene }) => {
                        return (<Header title={"Vouchers"} backIcon />)
                    },
                }} />
            <HomeStack.Screen
                name='SearchPlace'
                component={SearchPlace}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon />)
                    },
                }} />
            <HomeStack.Screen
                name='ApplyVoucher'
                component={ApplyVoucher}
                options={{
                    header: ({ scene }) => {
                        return (<Header crossIcon title={"Apply a voucher"} />)
                    },
                }} />
            <HomeStack.Screen
                name='ReOrder'
                component={ReOrder}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon title={"Previous Order"} />)
                    },
                }} />
            <HomeStack.Screen
                name='Settings'
                component={Settings}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon title={"Settings"} />)
                    },
                }} />
            <HomeStack.Screen
                name='TermsAndConditions'
                component={TermsAndConditions}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon title={"More"} />)
                    },
                }} />
            <HomeStack.Screen
                name='PaymentMethod'
                component={PaymentMethod}
                options={{
                    header: ({ scene }) => {
                        return (<Header crossIcon title={"Payment method"} />)
                    },
                }} />
            <HomeStack.Screen
                name='Auth'
                component={AuthStackNavigator}
                options={{ headerShown: false }} />
            <HomeStack.Screen
                name='PhoneNumber'
                component={PhoneNumber}
                options={{ headerShown: false }} />
            <HomeStack.Screen
                name='OTP'
                component={OTP}
                options={{ headerShown: false }} />
            <HomeStack.Screen
                name='CurrentLocation'
                component={CurrentLocation}
                options={{ headerShown: false }} />
            <HomeStack.Screen
                name='SelectLocation'
                component={SelectLocation}
                options={{
                    // header: ({ scene }) => {
                    //     return (<Header backIcon title={''} />)
                    // }
                    headerShown:false
                }}
                />
                   <HomeStack.Screen
                name='SelectAddress'
                component={SelectAddress}
                options={{
                    header: ({ scene }) => {
                        return (<Header backIcon title={"Addresses"} />)
                    },
                }} />
                    <HomeStack.Screen
                name='DeliveryDetail'
                component={DeliveryDetail}
                options={{
                  headerShown:false
                }} />

        </HomeStack.Navigator>
    )
}

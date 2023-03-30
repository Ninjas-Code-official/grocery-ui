import React, { useState, useRef } from 'react';
import {StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerContentComponentProps
} from '@react-navigation/drawer';
import { LogoutItem } from "../components/LogoutItem";
import Home from '../screens/Home';
import i18n from "i18n-js";
import { DrawerNavigatorParamList } from '../../types';
import { AntDesign, FontAwesome, MaterialIcons, useThemeColor } from '../components/Themed';
import { Colors, moderateScale } from '../constants';
import { Profile } from "../components/Profile";

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

function DrawerNavigator() {
    const color = useThemeColor({}, 'background');

    return (
        <Drawer.Navigator drawerStyle={{
            backgroundColor: color
        }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Main" component={Home} />
        </Drawer.Navigator>
    );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
    const color = useThemeColor({}, 'text');   
    
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
            <Profile {...props} />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t('Home')}
                onPress={() => { navigation.navigate('Home') }}
                icon={({ focused, size, color }) => (<AntDesign name='home' />)}
            />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t('Favourites')}
                onPress={() => { }}
                icon={({ focused, size, color }) => (<AntDesign name='hearto' />)}
            />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t('Orders')}
                icon={({ focused, size, color }) => (<MaterialIcons name='list-alt' />)}
                onPress={() => { navigation.navigate('Orders') }}
            />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t('Profile')}
                icon={({ focused, size, color }) => (<MaterialIcons name='person' />)}
                onPress={() => { navigation.navigate('Profile')}}
            />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t('Addresses')}
                icon={({ focused, size, color }) => (<MaterialIcons name='location-pin' />)}
                onPress={() => {navigation.navigate('Address') }}
            />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t('Challenges')}
                icon={({ focused, size, color }) => (<FontAwesome name='trophy' />)}
                onPress={() => { }}
            />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t("Vouchers")}
                icon={({ focused, size, color }) => (<AntDesign name='qrcode' />)}
                onPress={() => {navigation.navigate('Vouchers') }}
            />
            <DrawerItem
                labelStyle={[[styles.labelText,{color}]]}
                label={i18n.t('HelpCenter')}
                icon={({ focused, size, color }) => (<MaterialIcons name='help-outline' />)}
                onPress={() => { }}
            />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t('Settings')}
                icon={({ focused, size, color }) => (<AntDesign name='setting' />)}
                onPress={() => {navigation.navigate('Settings') }}
            />
            <DrawerItem
                labelStyle={[styles.labelText,{color}]}
                label={i18n.t('TermsAndConditions')}
                icon={({ focused, size, color }) => (<MaterialIcons name="local-police" />)}
                onPress={() => { navigation.navigate('TermsAndConditions')}}
            />
            <LogoutItem {...props} />
        </DrawerContentScrollView>
    
    );
}

const styles = StyleSheet.create({
    labelText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(12),
        color: Colors.dark.primary
    }
})

export default DrawerNavigator
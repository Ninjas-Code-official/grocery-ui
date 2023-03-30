import React from 'react';
import { StyleSheet, View as DefaultView} from 'react-native';
import { AntDesign as DefaultAntDesign} from "@expo/vector-icons";
import { DrawerItem } from "@react-navigation/drawer";
import {Text,useThemeColor } from '../components/Themed';
import { Colors, moderateScale } from '../constants';
import { useUser } from '../contexts';
export const LogoutItem = (props:any) => {
    const {toggleLogoutModal} = useUser()
    return (
        <DrawerItem
            labelStyle={styles.labelText}
            label={'Logout'}
            onPress={() => {
                toggleLogoutModal && toggleLogoutModal()
                props.navigation.closeDrawer()
                // props.navigation.closeDrawer()

            }}
        />
    )
}

const styles = StyleSheet.create({
    labelText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(12),
        color: '#fff'
    }
})




import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, MaterialIcons, FontAwesome, TouchableOpacity } from '../../../components/Themed'
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from '../../../constants'

export const PaymentMethod = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.headerContainer}>
                    <MaterialIcons name={'account-balance-wallet'} size={20} />
                    <Text style={styles.paymentHeaderText}>Payment method</Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('PaymentMethod')}}>
                <MaterialIcons name={'edit'} size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.headerContainer}>
                    <FontAwesome name={'money'} size={20} />
                    <Text style={styles.cashText}>Cash</Text>
                </View>
                <Text style={styles.balanceText}>
                    Rs. 209
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: moderateScale(10),
        paddingVertical: moderateScale(20),
        paddingHorizontal: moderateScale(10),
        borderWidth: 1
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    paymentHeaderText: {
        fontFamily: 'OpenSans-SemiBold',
        paddingLeft: moderateScale(10),
    },
    bottomContainer: {
        marginTop: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cashText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(11),
        paddingLeft: moderateScale(12),
    },
    balanceText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(11),
    }
})
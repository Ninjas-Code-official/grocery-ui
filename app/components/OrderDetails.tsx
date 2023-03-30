import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from './Themed'
import { Colors, moderateScale } from '../constants'

export const OrderDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.seperator} />
            <View style={styles.topContainer}>
                <Text style={styles.orderDetailsText}>Order Details</Text>
                <View style={styles.orderNumberContainer}>
                    <Text style={styles.regularLabel}>Your order number:</Text>
                    <Text style={styles.orderNumberText} numberOfLines={1}>#n0eh-0hov</Text>
                </View>
                <View style={styles.orderFromContainer}>
                    <Text style={styles.regularLabel}>Your order from:</Text>
                    <Text style={styles.shopNameText} numberOfLines={1}>Well Mart Grocery</Text>
                </View>
                <View style={styles.deliveryAddressContainer}>
                    <Text style={styles.regularLabel}>Delivery address:</Text>
                    <Text style={styles.deliveryTextAddress} numberOfLines={2}>Islamabad Physiocure Islamabad</Text>
                </View>
            </View>
            <View style={styles.seperator} />
            <View style={styles.middleContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemQuantityText}>1x</Text>
                    <Text style={styles.itemTitleText} numberOfLines={1}>Kolson Slanty Jalapeno 60 gKolson Slanty Jalapeno 60 g</Text>
                    <Text style={styles.priceText}>Rs. 50</Text>
                </View>
            </View>
            <View style={styles.seperator} />
            <View style={styles.bottomContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.semiBoldLabel}>Subtotal</Text>
                    <Text style={styles.priceText}>Rs. 185.00</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.regularLabel}>Delivery fee</Text>
                    <Text style={styles.priceText}>Rs. 99.00</Text>
                </View>
                <View style={styles.totalContainer} lightColor={Colors.light.lightBackGround} darkColor={Colors.dark.lightBackGround}>
                    <Text style={styles.semiBoldLabel}>Total (incl. GST)</Text>
                    <Text style={styles.priceText}>Rs. 284.00</Text>
                </View>
            </View>
            <View style={styles.seperator} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: moderateScale(25),
        paddingHorizontal: moderateScale(15)
    },
    seperator: {
        borderWidth: StyleSheet.hairlineWidth,
        width: '100%',
        marginVertical: moderateScale(15)
    },
    topContainer: {},
    middleContainer: {},
    bottomContainer: {},
    orderDetailsText: {
        paddingVertical: moderateScale(10),
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(15)
    },
    orderNumberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: moderateScale(15)
    },
    regularLabel: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(13)
    },
    semiBoldLabel: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(13)
    },
    orderNumberText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(13),
        color: '#075ee0',
        backgroundColor: '#e0ecff',
    },
    orderFromContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderFromLabel: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(13)
    },
    shopNameText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(13)
    },
    deliveryAddressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: moderateScale(15)
    },
    deliveryAddresslabel: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(13)
    },
    deliveryTextAddress: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(13),
        width: '50%',
        textAlign: 'right'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: moderateScale(10)
    },
    itemQuantityText: {
        fontFamily: 'OpenSans-SemiBold'
    },
    itemTitleText: {
        fontFamily: 'OpenSans-Regular',
        textAlign: 'center',
        width: '50%'
    },
    priceText: {
        fontFamily: 'OpenSans-Regular'
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: moderateScale(10),
        paddingVertical: moderateScale(15),
    },
})



import React from 'react'
import { StyleSheet } from 'react-native'

import { View, Text, FontAwesome } from '../../../components/Themed'
import { moderateScale } from '../../../constants'

export const PaymentDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Paid With</Text>
            <View style={styles.topContainer}>
                <View style={styles.leftContainer}>
                    <FontAwesome name='money' size={20} />
                    <Text style={styles.paymentMethodText}>cash on delivery</Text>
                </View>
                <Text style={styles.priceText}>Rs. 284.00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        paddingBottom: moderateScale(20)
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: moderateScale(25),
        paddingHorizontal: moderateScale(10),
        alignItems: 'center'
    },
    headingText: {
        fontFamily: 'OpenSans-SemiBold'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    paymentMethodText: {
        fontFamily: 'OpenSans-Regular',
        paddingLeft: moderateScale(25)
    },
    priceText: {
        fontFamily: 'OpenSans-Regular',
    }
})

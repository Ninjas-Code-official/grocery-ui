import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, MaterialIcons } from '../../../components/Themed'
import { moderateScale } from '../../../constants'

export const ListHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialIcons name={'delivery-dining'} size={80} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.titleText}>Estimated delivery</Text>
                <Text style={styles.deliveryTimeText}>NOW (10 min)</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: moderateScale(5),
        marginBottom: moderateScale(25),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    iconContainer: {
        // borderRadius: moderateScale(50),
        // overflow: 'hidden',
    },
    detailsContainer: {
        justifyContent: 'center',
        paddingLeft: moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-Light',
        fontSize: moderateScale(10)
    },
    deliveryTimeText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(14),
        marginTop: moderateScale(2)
    }
})

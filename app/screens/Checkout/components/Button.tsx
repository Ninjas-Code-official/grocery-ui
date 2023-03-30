import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'

type ButtonProps = {
    currency: string,
    total: number,
    text: string,
    onPress: () => void
}

export const Button = (props: ButtonProps) => {
    const insets = useSafeAreaInsets()
    return (
        <View style={[styles.container, { paddingBottom: insets.bottom || moderateScale(10) }]}>
            <View style={styles.topContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.vatText}>(incl.VAT)</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{props.currency} {props.total.toFixed(2)} </Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    onPress={props.onPress}
                    activeOpacity={0.7}
                    style={styles.checkoutButton}
                    lightColor={Colors.light.primary}>
                    <Text style={styles.btnText} lightColor={Colors.dark.text}>{props.text.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(10),
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: moderateScale(10)
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    totalText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(14)
    },
    vatText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(9),
        marginLeft: moderateScale(5),
    },
    priceContainer: {},
    priceText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(14)
    },
    bottomContainer: {
        marginTop: moderateScale(10),
    },
    checkoutButton: {
        width: '100%',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        paddingVertical: moderateScale(10)
    },
    btnText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(13)
    },
})


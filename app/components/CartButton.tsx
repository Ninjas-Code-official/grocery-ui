import { useNavigation } from '@react-navigation/native'
import React, { useMemo } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Colors, moderateScale, verticalScale } from '../constants'
import { useCart, useStore } from '../contexts'
import { View, Text, TouchableOpacity } from './Themed'

type CartButtonProps = {
    verticalOffset?: number
}
const CartButton = (props: CartButtonProps) => {
    const navigation = useNavigation()
    const { cart } = useCart()
    const { data } = useStore()

    const { currency } = data || {}

    const cartTotal = cart.reduce((prev, curr) => {
        return {
            quantity: prev.quantity + (curr?.quantity || 0),
            total: prev.total + (curr.price * (curr.quantity || 0))
        }
    }, { quantity: 0, total: 0 })
    // find a solution for this later
    // const inset = useSafeAreaInsets()
    // const verticalOffset = moderateScale(props.verticalOffset || 0) + inset.bottom
    // console.log('verticalOffset', props.verticalOffset, inset.bottom)
    return useMemo(() => {
        if (cartTotal.quantity > 0)
            return (
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={props.verticalOffset}>
                    <View style={styles.buttonContainer} darkColor={Colors.light.background}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Cart') }}
                            style={styles.buttonWrapper}
                            lightColor={Colors.light.primary}
                            darkColor={Colors.dark.background}>
                            <View style={styles.countWrapper} lightColor={Colors.light.primary}>
                                <Text style={styles.countText} lightColor={Colors.dark.text}>{cartTotal.quantity}</Text>
                            </View>
                            <Text style={styles.buttonText} lightColor={Colors.dark.text}>View your cart</Text>
                            <Text style={styles.priceText} lightColor={Colors.dark.text} >{currency} {cartTotal.total.toFixed(2)}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            )
        return null
    }, [cartTotal.total, cartTotal.quantity])
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: moderateScale(60),
        padding: moderateScale(10),
        paddingHorizontal:moderateScale(20),
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: moderateScale(10),
        borderRadius: moderateScale(10)
    },
    countWrapper: {
        height: moderateScale(20),
        width: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: moderateScale(20),
        borderColor: Colors.dark.text
    },
    countText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: verticalScale(12)
    },
    buttonText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: verticalScale(12)
    },
    priceText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: verticalScale(12)
    },
})

export default CartButton

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'
import { ItemType } from "../../../../types";
import { useCart } from '../../../contexts';
import { CartActionType } from '../../../reducers';

type AddToCartButtonProps={
    item:ItemType[]
}

export const AddToCartButton = (props:AddToCartButtonProps) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const { cart, dispatchCart } = useCart()


    const addToCart = ()=> {
        console.log('props',props)
        dispatchCart && dispatchCart({
            type: CartActionType.multiItems,
            payload: props.item
        })
        navigation.navigate('Cart')
    }

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom || moderateScale(10) }]}>
                <TouchableOpacity
                    onPress={addToCart}
                    activeOpacity={0.7}
                    style={styles.AddToCart}
                    lightColor={Colors.light.primary}>
                    <Text style={styles.btnText} lightColor={Colors.dark.text}>Add To Cart</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(10),
    },
    AddToCart: {
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


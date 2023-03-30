import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    StyleSheet,
} from 'react-native'
import { AddToCartButton } from './AddToCartButton'
import { View, Text, ImageBackground, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'
import { useStore } from '../../../contexts'
import { ItemType } from '../../../../types'

export const Item = (props: ItemType) => {
    const navigation = useNavigation()
    const { loading, error, data } = useStore()
    if (loading) return null
    if (error) return null
    const { currency } = data || {}

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.itemWrapper} onPress={() => { navigation.navigate('ItemDetail', { ...props }) }}>
            <>
                <View style={styles.itemImageWrapper} lightColor={Colors.light.imageBackground} darkColor={Colors.dark.imageBackground}>
                    <ImageBackground style={styles.itemImage} source={{ uri: props.image }}>
                        <AddToCartButton {...props} />
                    </ImageBackground>
                </View>
                <View style={styles.itemDetailsWrapper}>
                    <Text style={styles.itemPrice} numberOfLines={1}>{currency} {props.price}</Text>
                    <Text style={styles.itemTitle} numberOfLines={1}>{props.title}</Text>
                </View>
            </>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        marginRight: moderateScale(10)
    },
    itemImageWrapper: {
        borderRadius: 5,
        overflow: 'hidden',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemImage: {
        height: moderateScale(115),
        width: moderateScale(115),
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    itemTitle: {
        fontSize: moderateScale(10),
        fontFamily: 'OpenSans-Light'
    },
    itemPrice: {
        fontSize: moderateScale(10),
        fontFamily: 'OpenSans-Regular'
    },
    itemDetailsWrapper: {
        marginTop: moderateScale(5)
    }
})

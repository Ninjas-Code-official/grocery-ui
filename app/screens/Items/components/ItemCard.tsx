import React from 'react'
import { StyleSheet } from 'react-native'

import { View, Text, ImageBackground, TouchableOpacity } from '../../../components/Themed'
import { AddToCartButton } from '../../Home'
import { moderateScale, verticalScale } from '../../../constants'
import { ItemType } from '../../../../types'
import { useStore } from '../../../contexts'
import { useNavigation } from '@react-navigation/native'

export const ItemCard = (props: ItemType) => {
    const navigation = useNavigation()
    const { data } = useStore()
    const { currency } = data || {}
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('ItemDetail', { ...props }) }}
                activeOpacity={0.7}>
                <>
                    <View style={styles.itemImageWrapper}>
                        <ImageBackground style={styles.image} source={{ uri: props.image }}>
                            <AddToCartButton {...props} />
                        </ImageBackground>
                    </View>
                    <Text style={styles.priceText}>{`${currency} ${props.price}`}</Text>
                    <Text numberOfLines={2} style={styles.titleText}>{props.title}</Text>
                </>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        marginRight: moderateScale(10),
        marginBottom: moderateScale(10),
    },
    itemImageWrapper: {
        flex: 1,
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
    image: {
        aspectRatio: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    priceText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: verticalScale(10),
        marginTop: verticalScale(5)
    },
    titleText: {
        fontFamily: 'OpenSans-Light',
        fontSize: verticalScale(9),
    },
})


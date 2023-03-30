import React from 'react';
import { StyleSheet } from 'react-native';

import { AddToCartButton } from '../../Home';
import CartButton from '../../../components/CartButton';
import { View, Text, Image, ScrollView } from '../../../components/Themed';

import { Colors, moderateScale, scale, verticalScale } from '../../../constants';
import { useStore } from '../../../contexts';


export const ItemList = () => {
    const { data } = useStore()
    const { categories, currency } = data || {}
    {/* 
        this is temporary data, return searched results here
        instead also put limit to number of results to show
        because we are using scrollview and too many results
        could cause memory usage issues. dev:adnan
     */ }
    const items = (categories?.map(category => category.data))?.flat()?.map(subCategory => subCategory?.data).flat()
    return (
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: verticalScale(90) }}
                showsVerticalScrollIndicator={false}
                bounces={false}>

                {items?.slice(0, 10).map((item) => (
                    <View key={item?.id} style={styles.itemContainer}>
                        <View style={styles.itemDetailsContainer}>
                            <View style={styles.imageContainer} lightColor={Colors.light.imageBackground} darkColor={Colors.dark.imageBackground}>
                                <Image style={styles.itemImage} source={{ uri: 'https://picsum.photos/200/300' }} />
                            </View>
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemTitle}>{item?.title}</Text>
                                <Text style={styles.itemPrice}>{currency} {item?.price}</Text>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <AddToCartButton {...item} />
                        </View>
                    </View>
                ))}
            </ScrollView>
            <CartButton verticalOffset={70} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: verticalScale(30),
        paddingLeft: scale(16),
        paddingRight: scale(5)
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(10)
    },
    itemDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageContainer: {
        height: moderateScale(70),
        width: moderateScale(70)
    },
    itemImage: {
        height: moderateScale(70),
        width: moderateScale(70)
    },
    itemDetails: {
        height: moderateScale(70),
        justifyContent: 'space-evenly',
        marginLeft: scale(10)
    },
    itemTitle: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: verticalScale(11)
    },
    itemPrice: {
        fontFamily: 'OpenSans-Light',
        fontSize: verticalScale(11)
    },
    buttonContainer: {},
})

import React from 'react';
import { StyleSheet } from 'react-native';

import { ListFooter, ListHeader, ListEmpty, CheckoutButton } from './components';
import { AddToCartButton } from '../Home';
import { View, Text, FlatList, Image, TouchableOpacity } from '../../components/Themed';
import { useNavigation } from "@react-navigation/native";
import { ItemType } from '../../../types';
import { useStore, useCart } from '../../contexts';
import { Colors, moderateScale } from '../../constants';


const defaultImage = require('../../../assets/images/loading.png')

const Cart = () => {
    const navigation = useNavigation()
    const { cart } = useCart()
    const { data } = useStore()
    const subTotal = cart.reduce((prev, curr) => (prev + curr.price * curr.quantity), 0)
    const { currency, deliveryFee } = data || {}
    const renderItem = (data: { item: ItemType }) => {
        return (<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('ItemDetail', {...data.item})} style={styles.itemContainer}>
            {/* <View style={[StyleSheet.absoluteFill, styles.quantityActionContainer]}>
                <View style={{ width: 0 }}>
                    <AddToCartButton quantity={1} />
                </View>
            </View> */}
            <View style={styles.leftContainer}>
                <AddToCartButton {...data.item} />
                {/* <View style={styles.quantityContainer}> */}
                {/* <Text style={styles.quantityText}>{item.item.quantity}</Text> */}
                {/* </View> */}
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.imageContainer}>
                    <Image defaultSource={defaultImage} source={{ uri: data.item.image }} style={styles.image} />
                </View>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={2}
                        style={styles.titleText}
                        lightColor={Colors.light.primary}>{data.item.title}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.priceText}>{currency} {data.item.price * data.item.quantity}</Text>
            </View>
        </TouchableOpacity>)
    }

    const itemSeperatorComponent = () => (<View style={styles.itemSeperator} />)
    const renderFooter = cart.length > 0 ? () => (<ListFooter
        currency={currency || ''}
        deliveryFee={deliveryFee || 0}
        subTotal={subTotal} />) : null
    const renderHeader = cart.length > 0 ? () => (<ListHeader />) : null

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{
                    flexGrow: 1,
                    padding: moderateScale(10),
                    marginBottom: moderateScale(10),
                }}
                alwaysBounceVertical={false}
                ListEmptyComponent={ListEmpty}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}
                ItemSeparatorComponent={itemSeperatorComponent}
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id} />
            {cart.length > 0 && <CheckoutButton currency={currency || ''} total={subTotal + (deliveryFee || 0)} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftContainer: {
        // width: moderateScale(35),
        // zIndex: 1,
        // justifyContent: 'center',
    },
    middleContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: moderateScale(12),
    },
    rightContainer: {
        width: moderateScale(50),
        alignItems: 'flex-end'
    },
    image: {
        width: moderateScale(60),
        height: moderateScale(60),
    },
    imageContainer: {
        borderRadius: moderateScale(10),
        overflow: 'hidden'
    },
    quantityContainer: {
        borderRadius: moderateScale(5),
        borderWidth: 1,
        width: moderateScale(35),
        height: moderateScale(35),
        borderColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(11)
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: moderateScale(10),
    },
    titleText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(12),
    },
    priceText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(11),
    },
    itemSeperator: {
        marginVertical: moderateScale(15),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    quantityActionContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1,
        justifyContent: 'center'
    }
})

export default Cart

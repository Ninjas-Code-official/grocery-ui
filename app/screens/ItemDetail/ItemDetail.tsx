import { useRoute } from '@react-navigation/native'
import React, { useMemo, useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Modalize } from 'react-native-modalize'
import ImageView from "react-native-image-viewing";
import { AvailabilityModal } from './components'
import { View, Text, Image, AntDesign, TouchableOpacity } from '../../components/Themed'
import CartButton from '../../components/CartButton'
import i18n from "i18n-js";
import { useCart, useStore } from '../../contexts'
import { ItemType } from '../../../types'
import { Colors, moderateScale } from '../../constants'
import { CartActionType } from '../../reducers'

const defaultImage = require('../../../assets/images/loading.png')

const ItemDetail = () => {
    const route = useRoute()
    const [visible, setIsVisible] = useState(false);
    const { cart, dispatchCart } = useCart()
    const item: ItemType = route.params
    const modalizeRef = useRef<Modalize>(null)
    const { data } = useStore()
    const { currency } = data || {}
    const quantity = cart.find(i => i.id === item?.id)?.quantity || 0

    const onOpen = () => {
        modalizeRef.current?.open()
    }
    const onClose = () => {
        modalizeRef.current?.close()
    }

    const addQuantity = async () => (dispatchCart && dispatchCart({
        type: CartActionType.increment, payload: {
            ...item
        }
    }))

    const removeQuantity = async () => (dispatchCart && dispatchCart({
        type: CartActionType.decrement, payload: {
            ...item
        }
    }))

    return useMemo(() => (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{setIsVisible(true)}} activeOpacity={1} style={styles.topContainer}>
                <Image defaultSource={defaultImage} source={{ uri: item?.image }} style={{ flex: 1, resizeMode: 'cover' }} />
            </TouchableOpacity>
            <View style={styles.middleContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{item?.title}</Text>
                    <Text style={styles.priceText}>{currency} {item?.price}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text numberOfLines={2} style={styles.descriptionText}>{item?.description}</Text>
                </View>
                <View style={styles.availabilityContainer}>
                    <>
                        <Text style={styles.availabilityText}>If this product is not available</Text>
                        <TouchableOpacity
                            onPress={onOpen}
                            activeOpacity={0.7}
                            style={styles.dropdownView}>
                            <>
                                <Text style={styles.dropdownText}>Remove it from my order</Text>
                                <AntDesign name={'right'} size={15} />
                            </>
                        </TouchableOpacity>
                    </>
                </View>
                <View style={styles.actionContainer}>
                    {quantity > 0 ? <View style={styles.actionButtons}>
                        <TouchableOpacity onPress={removeQuantity}>
                            {
                                quantity === 1 ?
                                    <AntDesign name={'delete'} size={20} /> :
                                    <AntDesign name={'minus'} size={20} />
                            }
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity onPress={addQuantity}>
                            <AntDesign name={'plus'} size={20} />
                        </TouchableOpacity>
                    </View> :
                        <TouchableOpacity style={styles.addButton} onPress={addQuantity} lightColor={Colors.light.primary}>
                            <Text style={styles.addButtonText} lightColor={Colors.dark.text}>{i18n.t('AddToCart')}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
            {/* <CartButton /> */}
            <Modalize ref={modalizeRef}
                modalHeight={moderateScale(200)}>

                <AvailabilityModal onClose={onClose} />
            </Modalize>
            <ImageView
                images={[{ uri: item.image }]}
                imageIndex={0}
                visible={visible}
                backgroundColor={Colors.light.lightPink}
                onRequestClose={() => setIsVisible(false)}
            />
        </View>
    ), [quantity, visible])
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(5)
    },
    topContainer: {
        flex: 2
    },
    middleContainer: {
        flex: 3,
        paddingHorizontal: moderateScale(5),
        justifyContent: 'space-evenly'
    },
    titleContainer: {
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingVertical: moderateScale(10)
    },
    availabilityContainer: {
        paddingTop: moderateScale(10),
    },
    actionContainer: {
        paddingTop: moderateScale(10),
    },
    actionButtons: {
        flexDirection: 'row',
        height: moderateScale(50),
        paddingHorizontal: moderateScale(10),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: moderateScale(5),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(18)
    },
    priceText: {
        fontSize: moderateScale(10),
        fontFamily: 'OpenSans-Regular'
    },
    availabilityText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(14)
    },
    dropdownView: {
        marginTop: moderateScale(5),
        borderWidth: 1,
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(10),
        borderColor: '#e0e0e0'
    },
    dropdownText: {
        fontFamily: 'OpenSans-Regular'
    },
    descriptionContainer: {
        paddingTop: moderateScale(5)
    },
    descriptionText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(12),
    },
    addButton: {
        flexDirection: 'row',
        height: moderateScale(45),
        marginHorizontal: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(5),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    addButtonText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(13)
    },
    quantityText: {
        fontFamily: 'OpenSans-SemiBold'
    }
})

export default ItemDetail

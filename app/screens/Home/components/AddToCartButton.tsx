import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    StyleSheet,
    NativeModules,
    LayoutAnimation,
} from 'react-native';

import { View, Text, AntDesign, TouchableOpacity } from '../../../components/Themed';
import { Colors, moderateScale, scale } from '../../../constants';
import { useCart } from '../../../contexts';
import { CartActionType } from '../../../reducers';
import { ItemType } from '../../../../types';

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true)


export const AddToCartButton = (props: ItemType) => {
    const [showButtons, setShowButtons] = useState(false)
    const listener = useRef<NodeJS.Timeout>()
    const { cart, dispatchCart } = useCart()
    const quantity = cart.find(i => i.id === props.id)?.quantity || 0
    useEffect(() => {
        return () => {
            listener.current && clearTimeout(listener.current)
        }
    }, [])

    const hideButtonTimeout = () => {
        // clear previous timeout
        listener.current && clearTimeout(listener.current)
        // hide action buttons after 4s,using timeout
        listener.current=setTimeout(() => {
                LayoutAnimation.easeInEaseOut();
                setShowButtons(false)
            }, 4000)
        
    }

    const onPressAdd = () => {
        if (!showButtons) {
            LayoutAnimation.easeInEaseOut();
            if (quantity === 0) {
                addQuantity()
            }
        }
        else {
            addQuantity()
        }
        setShowButtons(true)
        hideButtonTimeout()
    }
    const onPressRemove = () => {
        if (quantity - 1 === 0) {
            LayoutAnimation.easeInEaseOut();
            setShowButtons(false)
        }
        else {
            setShowButtons(true)
            hideButtonTimeout()
        }
        removeQuantity()
    }

    const addQuantity = async () => (dispatchCart && dispatchCart({
        type: CartActionType.increment, payload: {
            ...props
        }
    }))

    const removeQuantity = async () => (dispatchCart && dispatchCart({
        type: CartActionType.decrement, payload: {
            ...props
        }
    }))

    return useMemo(() => {
        if (showButtons) return (
            <View style={[styles.actionButtonContainer, {  padding: scale(5) }]}>
                <TouchableOpacity onPress={onPressRemove}>
                    <AntDesign name={quantity > 1 ? 'minus' : 'delete'} size={20} lightColor={Colors.light.primary} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.itemQuantity}>{quantity}</Text>
                </View>
                <TouchableOpacity onPress={onPressAdd}>
                    <AntDesign name={'plus'} size={20} lightColor={Colors.light.primary} />
                </TouchableOpacity>
            </View>)

        return (<TouchableOpacity style={styles.actionButtonContainer} onPress={onPressAdd} >
            <View style={styles.iconWrapper} lightColor={quantity > 0 ? Colors.light.primary : Colors.light.background}>
                {quantity > 0 ?
                    <Text style={styles.itemQuantity} lightColor={'#fff'}>{quantity}</Text>
                    :
                    <AntDesign name={'plus'} size={20} />
                }
            </View>
        </TouchableOpacity>)
    }, [quantity, showButtons])
}

const styles = StyleSheet.create({
    actionButtonContainer: {
        flexDirection: 'row',
        borderRadius: scale(25),
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: scale(5),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconWrapper: {
        height: scale(35),
        width: scale(35),
        borderRadius: scale(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemQuantity: {
        fontSize: scale(12),
        fontFamily: 'OpenSans-Bold',
        marginHorizontal:moderateScale(10)
    }
})


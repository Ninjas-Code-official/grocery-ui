import { useNavigation } from '@react-navigation/native'
import React, {useContext} from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { scale, verticalScale, Colors, moderateScale } from '../../constants'
import { View, Text, AntDesign, TouchableOpacity, Entypo } from '../Themed'
import SearchInput from './SearchInput'
import { useCart } from "../../contexts";

type HeaderProps = {
    backIcon?: boolean;
    title?: string;
    searchIcon?: boolean;
    searchInput?: boolean;
    cartIcon?: boolean;
    crossIcon?: boolean;
}

const Header = (props: HeaderProps) => {
    const { cart } = useCart()
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const cartTotal = cart.reduce((prev, curr) => {
        return {
            quantity: prev.quantity + (curr?.quantity || 0),
            total: prev.total + (curr.price * (curr.quantity || 0))
        }
    }, { quantity: 0, total: 0 })
    const title = props.title ? (<View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{props.title}</Text>
    </View>) : <View />
    return (
        <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
            {props.backIcon && <TouchableOpacity style={styles.iconWrapper} onPress={() => { navigation.goBack() }}><AntDesign name={'arrowleft'} size={25} /></TouchableOpacity>}
            {props.searchInput && <SearchInput />}
            {props.crossIcon && <TouchableOpacity style={styles.iconWrapper} onPress={() => { navigation.goBack() }}><Entypo name={'cross'} size={25} /></TouchableOpacity>}            
            {title}
            {props.searchIcon && <TouchableOpacity style={styles.iconWrapper} onPress={() => { navigation.navigate('Search') }}><AntDesign name={'search1'} size={25} /></TouchableOpacity>}
            {
            props.cartIcon &&
             <TouchableOpacity style={styles.iconWrapper} onPress={() => { navigation.navigate('Cart') }}>
                <AntDesign name={'shoppingcart'} size={25} />
                {cartTotal.quantity > 0 && 
                <View style={styles.cartNumberStyle}>
                <Text style={styles.numberText} lightColor={Colors.light.background}>{cartTotal.quantity}</Text>    
                </View>        
                }
                
                 </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: verticalScale(70),
        paddingHorizontal: scale(5),
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleWrapper: {
        flex: 1,
        paddingLeft: scale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-SemiBold'
    },
    numberText:{
        fontFamily: 'OpenSans-Bold',
        fontSize:moderateScale(8)
    },
    iconWrapper: {
        marginHorizontal: scale(5)
    },
    cartNumberStyle:{
        position:'absolute',
        backgroundColor: Colors.light.primary,
        top:moderateScale(-3),
        left:moderateScale(12), 
        width:moderateScale(17),
        borderRadius:moderateScale(17),
        justifyContent:'center', 
        alignItems:'center',
        height:moderateScale(17), 
        
    }
})

export default Header

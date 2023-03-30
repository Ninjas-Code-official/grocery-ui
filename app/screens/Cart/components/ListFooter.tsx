import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Colors} from '../../../constants'
import { View, Text, AntDesign } from '../../../components/Themed'
import { moderateScale } from '../../../constants'
import Navigation from '../../../navigation'
import { VoucherCart } from './VoucherCart'


type ListFooterProps={
    currency:string,
    subTotal:number,
    deliveryFee:number
}

export const ListFooter = (props:ListFooterProps) => {
    const navigation = useNavigation()
    const [isVoucherApplied, setIsVoucherApplied] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.itemSeperator} />
            <View style={styles.subTotalContainer}>
                <Text style={styles.subTotalText}>Subtotal</Text>
                <Text style={styles.subTotalPriceText}>{props.currency} {props.subTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.deliveryFeeContainer}>
                <Text style={styles.deliveryFeeText}>Delivery Fee</Text>
                <Text style={styles.deliveryFeePriceText}>{props.currency} {props.deliveryFee.toFixed(2)}</Text>
            </View>
            {/* if restaurant dosent accept vouchers */}
            <View style={styles.subTextContainer}>
                {/* <Text style={styles.subText}>This restaurant doesn't accept vouchers</Text> */}
            
            {/* if restaurant accept vouchers */}
            {
                isVoucherApplied ? 
                    <VoucherCart currency={'$'} voucherCode={'vuaufh4'} price={60} />
                :
                    <TouchableOpacity onPress={()=>{navigation.navigate('ApplyVoucher')}} style={styles.subTextContainer}>
                    <AntDesign name='qrcode' size={18} />
                    <Text lightColor={Colors.light.primary} style={styles.voucherText}>Apply a voucher</Text>
                    </TouchableOpacity>
            }
           
           
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: moderateScale(10),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 5
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deliveryFeeContainer: {
        flexDirection: 'row',
        marginTop: moderateScale(10),
        justifyContent: 'space-between'
    },
    voucherText:{
        fontFamily:"OpenSans-Bold",
        fontSize:moderateScale(15)
    },
    subTextContainer: {
        flexDirection: 'row',
        marginTop: moderateScale(10),
        marginBottom: moderateScale(10),
        alignItems:'center'
    },
    subTotalText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(12)
    },
    subTotalPriceText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(12)
    },
    deliveryFeeText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(12)
    },
    deliveryFeePriceText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(12)
    },
    subText: {
        fontFamily: 'OpenSans-Light',
        fontSize: moderateScale(11)
    },
    itemSeperator: {
        marginVertical: moderateScale(10),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    }
})


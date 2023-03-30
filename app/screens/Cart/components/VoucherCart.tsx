import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {Text} from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'

type voucherCartProps = {
    voucherCode: string;
    price: number;
    currency: string
}

export const VoucherCart = (props:voucherCartProps) => {
    
    const insets = useSafeAreaInsets()
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.labelContainer}>
                    <MaterialIcons name="fastfood" size={22} color={Colors.light.primary} />
                   <View style={styles.codeContainer}>
                    <Text style={styles.codeText}>{props.voucherCode}</Text>
                    <TouchableOpacity style={styles.removeContainer}>
                    <Text lightColor={Colors.light.primary} style={styles.priceText}>Remove voucher</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{props.currency} {props.price}.00</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    removeContainer:{
        paddingTop:moderateScale(5)
    },
    topContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingTop: moderateScale(10),
        backgroundColor: Colors.light.lightPink,
        padding:moderateScale(20),
        borderWidth:1,
        borderColor:Colors.light.borderColor,
        borderRadius: moderateScale(10)
    },
    labelContainer: {
      flexDirection:'row',
      alignItems:'center',  
    },
    codeContainer:{
        paddingLeft:moderateScale(50)
    },
    priceContainer: {},
    priceText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(14)
    },
    codeText:{
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(14)
    },
})


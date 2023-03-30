import React, { useState } from 'react';
import { StyleSheet, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, TextInput, FlatList } from '../../components/Themed';
import { Colors, moderateScale, scale } from '../../constants'
import {useVoucher} from '../../contexts'
import {VoucherType} from '../../../types'

export const CurrentVouchers = () => {
   
    const {data} = useVoucher()
    console.log('vouchers', data)

    const renderItem = (data: { item: VoucherType }) => {
        return (<View style={styles.voucherContainer}>
        <View style={styles.topContainer}>
       <Text style={styles.titleText}>{data.item.title}</Text>
       <Text style={styles.titleText}>Rs. {data.item.price}.00 </Text>
       </View>
       <Text lightColor={Colors.light.placeholderText} style={styles.codeText}>{data.item.code}</Text>
        <View style={styles.BottomContainer}>
          <Text style={styles.titleText}>Rs. {data.item.minimum}</Text>
          <Text lightColor={Colors.light.placeholderText}>minimum</Text> 
          <Text lightColor={Colors.light.placeholderText}>Valid until</Text>
          <Text style={styles.titleText}>{data.item.validDate}</Text>  
        </View>
        <View style={styles.divider} />
        </View>)
    }
    

    return (
        <View style={styles.container}>
       {
        data?.currentVouchers?.length ?
        <FlatList
                contentContainerStyle={{
                    flexGrow: 1,
                }}
               
                alwaysBounceVertical={true}
                data={data.currentVouchers}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.code} />
        :
        <View style={styles.noVoucherContainer}>
        <Text style={styles.noVoucherTitleText}>No Vouchers Yet !</Text>
        <Text style={styles.noVoucherSubTitleText}>It seems you have no vouchers yet. You can refer a friend to get your first one.</Text>
        </View>
       }
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(10),
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:moderateScale(5)
    },
    BottomContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:moderateScale(10),
        alignItems:'center'
    },
    codeText:{
        fontFamily: 'OpenSans-SemiBold'
    },
    noVoucherContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        backgroundColor:Colors.light.lightBackGround
    },
    divider:{
    marginTop:moderateScale(5),
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    marginBottom:moderateScale(20)
    },
    voucherContainer: {
        borderRadius: moderateScale(5),
        marginTop: moderateScale(10),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
        padding: moderateScale(10),
    },
    noVoucherTitleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15),
        marginBottom: moderateScale(15)
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15),
    },
    noVoucherSubTitleText:{
        width:'80%',
        fontFamily: 'OpenSans-Regular',
    }
})

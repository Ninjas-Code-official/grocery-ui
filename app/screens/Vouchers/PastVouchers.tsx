import React from 'react';
import { StyleSheet, View as DefaultView } from 'react-native';
import { View, Text, FlatList } from '../../components/Themed';
import { Colors, moderateScale } from '../../constants'
import {useVoucher} from '../../contexts'
import {VoucherType} from '../../../types'
import { color } from 'react-native-reanimated';

export const PastVouchers = () => {
   
    const {data} = useVoucher()
    console.log('vouchers', data)

    const renderItem = (data: { item: VoucherType }) => {
        return (<View style={styles.voucherContainer}>
        <DefaultView style={styles.topContainer}>
       <Text style={styles.titleText}>{data.item.title}</Text>
       <Text style={styles.titleText}>Rs. {data.item.price}.00 </Text>
       </DefaultView>
       <DefaultView style={styles.middleContainer}>
       <Text style={styles.codeText}>{data.item.code}</Text>
       <DefaultView style={styles.availStyle}>
       <Text style={styles.availText}>{data.item.avail}</Text>
       </DefaultView>
       </DefaultView>
        <DefaultView style={styles.BottomContainer}>
          <Text style={styles.titleText}>Rs. {data.item.minimum}</Text>
          <Text lightColor={Colors.light.placeholderText}>minimum</Text> 
          <Text lightColor={Colors.light.placeholderText}>Valid until</Text>
          <Text style={styles.titleText}>{data.item.validDate}</Text>  
        </DefaultView>
        <DefaultView style={styles.divider} />
        </View>)
    }
    

    return (
        <View style={styles.container}>
       {
        data?.pastVouchers?.length ?
        <FlatList
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                alwaysBounceVertical={true}
                data={data.pastVouchers}
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
    availStyle:{
        padding:moderateScale(6), 
        backgroundColor:Colors.light.placeholderText, 
        borderRadius:moderateScale(20)
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:moderateScale(5),
    },
    availText:{
        fontSize:moderateScale(10),
        fontFamily:'OpenSans-Bold'
    },
    middleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    BottomContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:moderateScale(10),
        alignItems:'center',
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
        opacity:0.7,
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
        padding: moderateScale(10),
        width:'100%'
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

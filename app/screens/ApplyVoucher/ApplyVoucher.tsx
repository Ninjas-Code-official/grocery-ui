import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, FlatList , TouchableOpacity} from '../../components/Themed'
import { moderateScale, Colors } from '../../constants'
import {useVoucher} from '../../contexts'
import {VoucherType} from '../../../types'
import {ListHeader} from './components'

const ApplyVoucher = () => {
    
    const {data} = useVoucher()
    console.log('vouchers', data)

    const renderItem = (data: { item: VoucherType }) => {
        return (<TouchableOpacity style={styles.voucherContainer}>
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
        </TouchableOpacity>)
    }
    const renderHeader = () => <ListHeader />
    
    return (
        <View style={styles.container}>
          <FlatList
                contentContainerStyle={{
                    flexGrow: 1,
                    padding: moderateScale(10),
                    marginBottom: moderateScale(10),
                }}
                alwaysBounceVertical={false}
                // ListEmptyComponent={ListEmpty}
                ListHeaderComponent={renderHeader}
                // ListFooterComponent={renderFooter}
                data={data?.currentVouchers}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.code} />
        </View>
    )
}

const styles = StyleSheet.create({
    voucherText:{
        fontFamily:"OpenSans-Bold",
        fontSize:moderateScale(15)
    },
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
    
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15),
    },
})

export default ApplyVoucher;


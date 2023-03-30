import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'
import {VoucherInput} from './VoucherInput'

export const ListHeader = () => {
    
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()    
    const [params, setParams] = useState({
        isError:false,
        voucherCode:''
    })
    const apply_voucher = () => {
        // if voucher valid :
        if(params.voucherCode)
        {
            setParams({...params,
            isError:true
            })
        }
        else{
            navigation.goBack()
        }
        

        // else:
        // alert
    }

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom || moderateScale(20) }]}>
             <View style={styles.voucherInputStyle}>
              <VoucherInput error={params.isError} onChangeText={(text:string)=>{setParams({...params,voucherCode:text})}} />
              </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    onPress={apply_voucher}
                    activeOpacity={0.7}
                    style={styles.ApplyButton}
                    lightColor={Colors.light.primary}>
                    <Text style={styles.btnText} lightColor={Colors.dark.text}>Apply</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemSeperator} />
            <Text style={styles.titleText}>
                Select a voucher
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: moderateScale(10),
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: moderateScale(10)
    },
    itemSeperator: {
        marginVertical: moderateScale(15),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    titleText:{
        fontFamily:"OpenSans-Bold",
        fontSize:moderateScale(16)
    },
    bottomContainer: {
        marginTop: moderateScale(10),
        marginBottom:moderateScale(10)
    },
    ApplyButton: {
        width: '100%',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        paddingVertical: moderateScale(10)
    },
    btnText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(13)
    },
    voucherInputStyle:{
        paddingBottom:moderateScale(10)
    }
})


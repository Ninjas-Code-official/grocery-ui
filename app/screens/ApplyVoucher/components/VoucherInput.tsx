import { useLinkProps } from '@react-navigation/native'
import React, { useRef } from 'react'
import { StyleSheet } from 'react-native'
import { TextField, FilledTextField } from 'react-native-material-textfield'
import {View, OutlinedTextField } from '../../../components/Themed'
import { Colors, moderateScale, verticalScale } from '../../../constants'

type VoucherInputProps = {
    onChangeText : (text:string)=> void
    error: boolean
}

export const VoucherInput = (props:VoucherInputProps) => {

    const Ref = useRef()
   
    return (
        <View style={styles.searchContainer}>
            <OutlinedTextField
             label="Voucher Code"
             placeholder="Voucher Code"
             activeLineWidth={1}
             error={props.error ? 'voucher does not exist' : ''}
             lineWidth={1}
             inputContainerStyle={styles.searchInput}    
             onChangeText={props.onChangeText}
             selectionColor={Colors.light.primary}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    searchInput: {
        height: moderateScale(50)
    },
})


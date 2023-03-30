import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'

type AddAddressButtonProps = {
    navigateTo? : string
}

export const AddAddressButton = (props :AddAddressButtonProps) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    return (
        <View style={[styles.container, { paddingBottom: insets.bottom || moderateScale(10) }]}>
                <TouchableOpacity
                    onPress={() => {props.navigateTo ? navigation.navigate('DeliveryDetail',{title:'Delivery Detail'}) : navigation.navigate('AddAddress')}}
                    activeOpacity={0.7}
                    style={styles.ButtonContainer}
                    lightColor={Colors.light.primary}>
                    <Text style={styles.btnText} lightColor={Colors.dark.text}>Add New Address</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(10),
        marginTop: moderateScale(10),
        alignItems:'center'
    },
    ButtonContainer: {
        width: '80%',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        paddingVertical: moderateScale(15)
    },
    btnText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(13)
    },
})


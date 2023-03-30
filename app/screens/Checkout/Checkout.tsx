import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, ScrollView } from '../../components/Themed'
import { Colors, moderateScale } from '../../constants'
import { Button, DeliveryAddress, PaymentMethod } from './components'

const Checkout = () => {
    const navigation = useNavigation()
    const onVerifyPhone = () => {
        console.log('onVerifyPhone')
    }

    const onPlaceOrder = () => {
        navigation.navigate('InProcessOrder',{title:'#n0eh-0hov'})
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <DeliveryAddress />
                <PaymentMethod />
                <View style={styles.conditions}>
                    <Text style={styles.conditionsText}>By completeting this order I agree to all </Text>
                    <Text style={styles.conditionsText} lightColor={Colors.light.primary}>terms & agreements</Text>
                </View>
            </ScrollView>
            {/* <Button currency={'$'} total={209} onPress={onVerifyPhone} text={'Verify Phone number'}/> */}
            <Button currency={'$'} total={209} onPress={onPlaceOrder} text={'Place Order'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    conditions: {
        paddingLeft: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    conditionsText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(9)
    }
})

export default Checkout

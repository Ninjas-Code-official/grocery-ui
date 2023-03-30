import React from 'react'
import { StyleSheet } from 'react-native'
import { View, ScrollView } from '../../components/Themed'
import { PaymentDetails, OrderStatusAndTime } from './components'
import { OrderDetails } from '../../components/OrderDetails'

const InProcessOrder = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <OrderStatusAndTime />
                <OrderDetails />
                <PaymentDetails />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default InProcessOrder

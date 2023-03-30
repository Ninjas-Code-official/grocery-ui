import React from 'react'

import { Header, ReOrder } from './components'
import { OrderDetails as OrderDetailsComponent } from '../../components/OrderDetails'
import { ScrollView, View } from '../../components/Themed'
import { StyleSheet } from 'react-native'


const OrderDetails = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={true}
            >
                <Header />
                <OrderDetailsComponent />
            </ScrollView>
            <ReOrder />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    }
})

export default OrderDetails

import React from 'react'
import { StyleSheet } from 'react-native'

import { Item, Header } from './components'
import { SectionList } from '../../components/Themed'
import { moderateScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const Orders = () => {
    const navigation = useNavigation()
    const { refetchData, networkStatus } = {
        refetchData: null,
        networkStatus: null
    }
    const sections = [{ title: 'Active orders', data: ['Cheese Cake', 'Ice Cream'] }, { title: 'Past orders', data: ['Water', 'Coke', 'Beer'] }]
    return (
        <SectionList
            bounces={true}
            showsVerticalScrollIndicator={false}
            sections={sections}
            keyExtractor={(item, index) => item + index}
            onRefresh={refetchData}
            refreshing={networkStatus === 7}
            renderItem={()=><Item navigation={navigation}/>}
            renderSectionHeader={Header}
            contentContainerStyle={{
                padding: moderateScale(5)
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Orders

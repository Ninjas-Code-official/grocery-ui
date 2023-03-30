import React from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Text, ScrollView, AntDesign, TouchableOpacity, View } from '../../../components/Themed'
import { Colors, scale, verticalScale } from '../../../constants'
import { useStore } from '../../../contexts'
import CartButton from '../../../components/CartButton'

export const CategoriesList = () => {
    const navigation = useNavigation()
    const { data } = useStore()
    const { categories } = data || {}
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: verticalScale(20) }}
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <Text style={styles.headingText}>All Categories</Text>
                {categories?.map(category => (
                    <TouchableOpacity style={styles.itemContainer} key={category.id} onPress={() => { navigation.navigate('SubCategoriesList', { id: category.id }) }}>
                        <Text style={styles.itemText}>{category.title}</Text>
                        <AntDesign name={'right'} size={15} lightColor={Colors.light.imageBackground} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <CartButton verticalOffset={70} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: verticalScale(20),
        paddingLeft: scale(12),
    },
    headingText: {
        fontSize: verticalScale(16),
        fontFamily: 'OpenSans-Bold'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(12),
        marginTop: verticalScale(20)
    },
    itemText: {
        fontSize: verticalScale(12),
        fontFamily: 'OpenSans-Regular'
    }
})

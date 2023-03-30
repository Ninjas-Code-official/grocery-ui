import React from 'react'
import { StyleSheet } from 'react-native'

import { View, TextInput } from '../Themed'
import { Colors, moderateScale, verticalScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const SearchInput = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.searchContainer}>
            <TextInput
                clearButtonMode={'always'}
                // autoFocus
                returnKeyType={'search'}
                style={styles.searchInput}
                selectionColor={Colors.light.primary}
                placeholderTextColor={Colors.light.placeholderText}
                placeholder={'Search products and categories'}
                autoCapitalize='none'
                onFocus={() => {
                    navigation.navigate('ItemsList')
                }}
            ></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        marginHorizontal: 5,
        padding: moderateScale(5)
    },
    searchInput: {
        height: '100%',
        borderRadius: moderateScale(5),
        paddingLeft: moderateScale(10),
        fontFamily: 'OpenSans-Regular',
        fontSize: verticalScale(11)
    },
})
export default SearchInput

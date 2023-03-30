import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import i18n from "i18n-js";
import { Text, TouchableOpacity } from '../../../components/Themed'
import { Colors, scale, verticalScale } from '../../../constants'

type CategoryHeaderProps = {
    id: string;
    title: string;
}

export const CategoryHeader = (props: CategoryHeaderProps) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.categoryHeaderWrapper} onPress={() => navigation.navigate('Items', { id: props.id, title: props.title })}>
            <Text style={styles.categoryHeaderText}>{props.title}</Text>
            <Text style={styles.text} lightColor={Colors.light.primary}>{i18n.t('ViewAll')}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryHeaderWrapper: {
        flexDirection: 'row',
        margin: scale(12),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    categoryHeaderText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: verticalScale(14),

    },
    text: {
        fontFamily: 'OpenSans-Regular',
    }
})

export default CategoryHeader

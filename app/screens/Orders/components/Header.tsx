import React from 'react'
import { DefaultSectionT, SectionListData, StyleSheet } from 'react-native'

import { Text, View } from '../../../components/Themed'
import { moderateScale } from '../../../constants'


export const Header = ({ section: { title } }: { section: SectionListData<any, DefaultSectionT> }) => {
    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        marginVertical: moderateScale(5),
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(17),
        paddingLeft: moderateScale(5)
    },
    header:{
        padding:moderateScale(10),
        position:'relative'
    }
})
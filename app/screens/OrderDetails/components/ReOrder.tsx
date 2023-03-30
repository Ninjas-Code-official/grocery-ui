import React from 'react'
import { StyleSheet } from 'react-native'

import { View, Text, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'

export const ReOrder = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} lightColor={Colors.light.primary}>
                <Text style={styles.buttonText} lightColor={Colors.dark.text}>Reorder</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(12),

    },
    button: {
        width: '100%',
        padding: moderateScale(12),
        borderRadius: moderateScale(5),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(13)
    }
})


import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'

type ButtonProps = {
    text: string,
    onPress: () => void
}

export const Button = (props: ButtonProps) => {
    return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={props.onPress}
                    activeOpacity={0.7}
                    style={styles.updateButton}
                    lightColor={Colors.light.primary}>
                    <Text style={styles.btnText} lightColor={Colors.dark.text}>{props.text.toUpperCase()}</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'flex-end',
        marginTop: moderateScale(10),
    },
    updateButton: {
        width: '50%',
        alignItems: 'center',
        paddingTop:moderateScale(15),
        paddingBottom:moderateScale(15),
        paddingVertical: moderateScale(10)
    },
    btnText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(13)
    },
})


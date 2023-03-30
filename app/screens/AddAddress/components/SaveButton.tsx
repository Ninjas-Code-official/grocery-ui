import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'

type SaveButtonProps = {
    onPress:()=>void,
}

export const SaveButton = (props:SaveButtonProps) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    return (
        <View style={[styles.container, { paddingBottom: insets.bottom || moderateScale(10) }]}>
                <TouchableOpacity
                    onPress={props.onPress}
                    activeOpacity={0.7}
                    style={styles.ButtonContainer}
                    lightColor={Colors.light.primary}>
                    <Text style={styles.btnText} lightColor={Colors.dark.text}>Save and continue</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: moderateScale(20),
        // margin: moderateScale(10),

        alignItems:'center'
    },
    ButtonContainer: {
        width: '90%',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        paddingVertical: moderateScale(15),
        height:moderateScale(50)
    },
    btnText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(13)
    },
})


import React from 'react'
import { StyleSheet } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Search } from './Search'
import { View, ImageBackground, MaterialIcons, TouchableOpacity, TouchableWithoutFeedback } from '../../../components/Themed'
import { Colors, moderateScale, verticalScale } from '../../../constants'

type HeaderImageProps = {
    image?: string;
}

export const HeaderImage = (props: HeaderImageProps) => {
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    return (
        <ImageBackground source={{ uri: props.image }} style={[styles.image, { paddingVertical: insets.top, paddingHorizontal:moderateScale(10) }]}>
            <TouchableWithoutFeedback
                onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}
            >
                <View style={styles.iconWrapper}>
                    <MaterialIcons name={'menu'} size={30}/>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.searchWrapper}>
                <Search />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        height: verticalScale(200),
        justifyContent: 'space-between'
    },
    searchWrapper: {
        borderRadius: verticalScale(5),
        margin:moderateScale(15)
    },
    iconWrapper: {
        height: moderateScale(40),
        width: moderateScale(40),
        backgroundColor: ' rgba(255, 255, 255, 0)'
    }
})


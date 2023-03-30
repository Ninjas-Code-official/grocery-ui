import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, MaterialIcons, TouchableOpacity } from '../../../components/Themed'
import { Colors, moderateScale } from '../../../constants'

export const ListEmpty = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <MaterialIcons name={'remove-shopping-cart'} size={100} />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.titleText}>Hungry?</Text>
                <Text style={styles.descriptionText}>You haven't added anything to your cart!</Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}
                    style={styles.btnContainer}
                    lightColor={Colors.light.primary}>
                    <Text style={styles.btnText} lightColor={Colors.dark.text} >BROWSE ITEMS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(16)
    },
    descriptionText: {
        marginTop: moderateScale(10),
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(12)
    },
    btnContainer: {
        marginTop: moderateScale(10),
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
    },
    btnText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(11),
    },
})


import React from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { View, Text, TouchableOpacity } from '../../../components/Themed'
import { moderateScale, Colors } from '../../../constants'
import {  } from 'react-native/Libraries/NewAppScreen'

export const Item = (props) => {
    return (

        <TouchableOpacity activeOpacity={1} onPress={() => { props.navigation.navigate('OrderDetails') }}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={styles.titleText}>Lebanese Food Garden</Text>
                    <View style={styles.bottomContainer}>
                    <Text style={styles.descriptionText}>Chicked Patty Burger</Text>
                    <Text style={styles.descriptionText}>2021-02-20 00:21</Text>
                    </View>       
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.titleText}>Rs. 184.00</Text>
                    <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('ReOrder')}} activeOpacity={1} lightColor={Colors.light.primary} style={styles.reOrderButton}>
                    <Text lightColor={Colors.light.lightBackGround} style={styles.titleText}>Reorder</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: moderateScale(10),
        padding: moderateScale(17),
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5,
        borderRadius: moderateScale(5)
    },
    leftContainer: {
        // alignItems: 'flex-start'
    },
    rightContainer: {
        alignItems: 'center'
    },
    titleText:{
        fontSize:moderateScale(14),
        fontFamily:'OpenSans-Bold'
    },
    descriptionText:{
        fontSize:moderateScale(13),
        fontFamily:'OpenSans-Regular'
    },
    bottomContainer:{
        marginTop:moderateScale(20)
    },
    reOrderButton:{
        padding:moderateScale(8),
        borderRadius:moderateScale(10)
    },
    btnText:{
        fontSize:moderateScale(14),
        fontFamily:'OpenSans-SemiBold'
    }

})


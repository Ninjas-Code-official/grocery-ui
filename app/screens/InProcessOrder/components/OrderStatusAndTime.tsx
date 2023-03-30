import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, MaterialIcons } from '../../../components/Themed'
import { moderateScale, Colors } from '../../../constants'
import ProgressBar from 'react-native-progress/Bar'

export const OrderStatusAndTime = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.remaingTimeText}>5 - 15 mins</Text>
                <Text style={styles.deliveryTimeText}>Estimated delivery time</Text>

            </View>
            <View style={styles.middleContainer}>
                <View style={styles.iconContainer}>
                    <MaterialIcons name='shopping-bag' size={150} />
                </View>
                <View style={styles.progressContainer}>
                <ProgressBar animated={false}  borderWidth={0} unfilledColor={Colors.light.lightBackGround} style={{width:moderateScale(50)}} indeterminate={false} color={Colors.light.primary} progress={1} width={null} />
                <ProgressBar animated={true} borderWidth={0} unfilledColor={Colors.light.lightBackGround} style={{width:moderateScale(50)}} indeterminate={false} color={Colors.light.primary} progress={1} width={null} />
                <ProgressBar animated={true} borderWidth={0} unfilledColor={Colors.light.lightBackGround} style={{width:moderateScale(50)}} indeterminate={true} color={Colors.light.primary} progress={1} width={null} />
                <ProgressBar animated={true} borderWidth={0} unfilledColor={Colors.light.lightBackGround} style={{width:moderateScale(50)}} indeterminate={false} color={Colors.light.primary} progress={0} width={null} />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.statusText}>
                    Preparing you order.Your rider will pick it up once it's ready
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: moderateScale(25)
    },
    topContainer: {
        alignItems: 'center'
    },
    middleContainer: {
        alignItems: 'center'
    },
    bottomContainer: {
        alignItems: 'center',
        paddingTop: moderateScale(25),
        paddingHorizontal: moderateScale(50)
    },
    remaingTimeText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(30)
    },
    deliveryTimeText: {
        fontFamily: 'OpenSans-Light',
        fontSize: moderateScale(11)
    },
    iconContainer: {
        paddingTop: moderateScale(20)
    },
    progressContainer: {
        paddingTop: moderateScale(25),
        // paddingHorizontal: moderateScale(15),
        flexDirection:'row',
        width:'70%',
        justifyContent:'space-between'
    },
    statusText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(13),
        textAlign: 'center'
    }
})

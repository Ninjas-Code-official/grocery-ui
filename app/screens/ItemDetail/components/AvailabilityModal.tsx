import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, TouchableOpacity, MaterialIcons } from '../../../components/Themed';
import { Colors, moderateScale } from '../../../constants';

type AvailabilityModalProps = {
    onClose?: () => void
}

export const AvailabilityModal = (props: AvailabilityModalProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>If this product is not available</Text>
            </View>
            <View style={styles.middleContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.optionContainer}>
                    <>
                        <MaterialIcons name="radio-button-on" size={15} />
                        <Text style={styles.optionText}>Remove it from my order</Text>
                    </>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.optionContainer}>
                    <>
                        <MaterialIcons name="radio-button-off" size={15} />
                        <Text style={styles.optionText}>Cancel the entire order</Text>
                    </>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer} darkColor={Colors.light.background}>
                <TouchableOpacity
                    onPress={props.onClose}
                    style={styles.buttonContainer}
                    lightColor={Colors.light.primary}
                    darkColor={Colors.dark.background}>
                    <Text style={styles.buttonText} lightColor={Colors.dark.text}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
        justifyContent: 'space-between'
    },
    topContainer: {
        height: moderateScale(40),
        justifyContent: 'center',
    },
    middleContainer: {
        height: moderateScale(80),
        justifyContent: 'space-evenly',
    },
    bottomContainer: {
        padding: moderateScale(2),
        height: moderateScale(45),
        marginBottom: moderateScale(20),
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(10),
    },
    buttonText: {
        fontFamily: 'OpenSans-SemiBold',
    },
    titleText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(16)
    },
    optionText: {
        fontFamily: 'OpenSans-Regular',
        marginLeft: moderateScale(5)
    }
})

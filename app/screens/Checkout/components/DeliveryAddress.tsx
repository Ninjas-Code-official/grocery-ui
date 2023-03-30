import React, { useState } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { View, Text, MaterialIcons, AntDesign, Switch, TouchableOpacity } from '../../../components/Themed'
import { moderateScale } from '../../../constants'
import MapViewer from "../../../components/MapView";
import { useNavigation } from "@react-navigation/native";

export const DeliveryAddress = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const region = {
        latitude:33.7003371,
        longitude:72.9739039,
        latitudeDelta:0.009,
        longitudeDelta:0.009

    }
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.mapHeaderContainer}>
                    <View style={styles.headerContainer}>
                        <MaterialIcons name={'location-pin'} size={20} />
                        <Text style={styles.addressHeaderText}>Delivery address</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('SelectAddress')} activeOpacity={0.9}>
                    <MaterialIcons name={'edit'} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.mapContainer}>
                    <MapViewer scrollEnabled={true} region={region} />
                </View>
                <View style={styles.addressDetailsContainer}>
                    <Text style={styles.addressDetailsHeaderText}>Home</Text>
                    <Text style={styles.addressDetailsText}>Executive Residency Guest House 44</Text>
                    <Text style={styles.addressDetailsText}>Islamabad</Text>
                </View>
            </View>
            <View style={styles.seperatorLine} />
            <View style={styles.middleContainer}>
                <Text style={styles.phoneText}>00923331234567</Text>
                <AntDesign name={'right'} size={15} />
            </View>
            <View style={styles.seperatorLine} />
            <View style={styles.bottomContainer}>
                <View style={styles.instructionsContainer} >
                    <Text numberOfLines={2} style={styles.instructionsText}>Contactless delivery: switch to online payment for this option</Text>
                </View>
                <Switch
                    trackColor={{ false: "#9e9ea1", true: "#17e432" }}
                    thumbColor={isEnabled ? Platform.OS === 'ios' ? "#eaf1eb" : "#0ec026" : "#f5f6fc"}
                    ios_backgroundColor="#9e9ea1"
                    value={isEnabled}
                    onValueChange={toggleSwitch} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: moderateScale(10),
        paddingVertical: moderateScale(20),
        paddingHorizontal: moderateScale(10),
        borderWidth: 1
    },
    topContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    middleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: moderateScale(15)
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mapHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addressHeaderText: {
        paddingLeft: moderateScale(10),
        fontFamily: 'OpenSans-SemiBold'
    },
    mapContainer: {
        marginTop: moderateScale(15),
        height: moderateScale(100),
        width: '100%',
        backgroundColor: 'red'
    },
    addressDetailsContainer: {
        paddingTop: moderateScale(10)
    },
    addressDetailsHeaderText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(12)
    },
    addressDetailsText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(11)
    },
    phoneText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(11),
        marginVertical: moderateScale(5)
    },
    seperatorLine: {
        borderWidth: StyleSheet.hairlineWidth,
        width: '100%',
        marginVertical: moderateScale(15)
    },
    instructionsContainer: {
        flex: 1,
        paddingRight: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    instructionsText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(11)
    }
})

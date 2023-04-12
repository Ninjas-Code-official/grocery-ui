import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Linking} from 'react-native'
import { moderateScale,Colors } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, AntDesign, MaterialIcons, TouchableOpacity, Entypo, useThemeColor } from '../../components/Themed'
import MapViewer from "../../components/MapView";
import * as Location from 'expo-location';
import Loading from "../../components/Loading";
import { FlashMessage } from "../../components/FlashMessage";
import { showMessage, hideMessage } from "react-native-flash-message";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import getEnvVars from "../../../Environment";
const Constants = getEnvVars()


const LATITUDE = 33.699265
const LONGITUDE = 72.974575
const LATITUDE_DELTA = 40
const LONGITUDE_DELTA = 40

type regionType = {
    latitude: number | undefined;
    longitude: number | undefined;
    longitudeDelta: number;
    latitudeDelta: number;
}

type locationType = regionType | null

export default function SelectLocation() {
    const background = useThemeColor({},'background')
    const [region, setRegion] = useState<locationType>(null);
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const [isLoading, setIsLoading] = useState(false)
    const gogoleRef = useRef()
    const getCurrentLocation = async () => {
        setIsLoading(true)
        let { status, canAskAgain } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            FlashMessage({
                message:
                    'Tap on this message to open Settings then allow app to use location from permissions.',
                    title:'Location denied!',
                onPress: async () => {
                    await Linking.openSettings()
                }
            })
            return;
        }
        try{

        
        let location = await Location.getCurrentPositionAsync({});
        setIsLoading(false)
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0029,
            longitudeDelta: 0.0029
        })
    }
    catch(err){
        setIsLoading(false)
        console.log('err',err)
    }
    }

    const onRegionChangeComplete = (region:regionType) => {
        console.log('region', region)
        setRegion(region)
       
    }

    const search = () => {
        console.log('region', region);
        region ? navigation.navigate('Home') : 
        showMessage({
            message: "Please Select a location to deliver!",
            type: 'default',
          });
    }
    const clearInput = () => {
        gogoleRef.current.clear()
    }
useEffect(()=>{
    console.log('render')
})
    return (
        <>
            <View style={[styles.container, { paddingTop: insets.top }]}>
                <MapViewer
                    googleAutoComplete={true}
                    searchButton={true}
                    region={region}
                    onRegionChangeComplete={onRegionChangeComplete}
                    getCurrentLocation={getCurrentLocation}
                    search={search}
                    isLoading={isLoading}
                >
                    <GooglePlacesAutocomplete
                        minLength={2} // minimum length of text to search
                        placeholder='Search'
                        onPress={(data, details) => {
                            // 'details' is provided when fetchDetails = true
                            console.log('dataa', details?.geometry.location);
                            setRegion({
                                latitude: details?.geometry.location.lat,
                                longitude: details?.geometry.location.lng,
                                latitudeDelta: 0.0029,
                                longitudeDelta: 0.0029
                            })
                        }}
                        query={{
                            key: Constants.GOOGLE_MAPS_KEY,
                            language: 'en',
                        }}
                        renderLeftButton={() =>
                            <>
                                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.iconButtonLeft}>
                                    <AntDesign name="arrowleft" />
                                </TouchableOpacity>
                            </>
                        }
                        renderRightButton={() =>
                            <>
                                {/* <TouchableOpacity onPress={getCurrentLocation} activeOpacity={1} style={styles.iconButton}>
                                    <MaterialIcons name="my-location" />
                                </TouchableOpacity> */}
                                <TouchableOpacity activeOpacity={1} onPress={() => { clearInput() }} style={styles.iconButton}>
                                    <Entypo name="circle-with-cross" />
                                </TouchableOpacity>
                            </>
                        }
                        renderDescription={row => row.description
                        } // custom description render
                        ref={gogoleRef}
                        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                        listViewDisplayed="auto" // true/false/undefined
                        fetchDetails={true}
                        
                        textInputProps={{
                            clearButtonMode:"never",
                            placeholderTextColor:Colors.light.placeholderText
                          }}
                        styles={{
                            description: {
                                fontWeight: 'bold',
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                            textInputContainer: {
                                // borderWidth:1,
                                // borderRadius:moderateScale(5),
                                backgroundColor: background
                            },
                            textInput: {
                                color:'black'
                            },
                        }}

                    />
                </MapViewer>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15),
        textAlign: 'center'
    },
    searchBar: {
        height: moderateScale(50),
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50)
    },
    imageStyle: {
        width: moderateScale(200),
        height: moderateScale(250)
    },
    buttonStyle: {
        width: '80%',
        alignSelf: 'center',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        padding: moderateScale(10)
    },
    iconButton: {
        justifyContent: 'center',
        paddingRight: moderateScale(10),
        // paddingLeft:moderateScale(10)
    },
    iconButtonLeft: {
        justifyContent: 'center',
        paddingLeft: moderateScale(10)
    },
    marginBottom: {
        marginBottom: moderateScale(20)
    },

})
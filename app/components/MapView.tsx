import { useNavigation } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import { StyleSheet, View as DefaultView, TouchableOpacity as DefaultTouchableOpacity, SafeAreaView } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Callout, Marker } from 'react-native-maps';
import { Colors, moderateScale, verticalScale } from '../constants'
import { View, MaterialIcons, Text } from './Themed'
import Loading from "../components/Loading";


const MapViewer = (props: any) => {
    const [isLoading, setIsLoading] = useState(false)
    const [marginBottom, setMarginBottom] = useState(-1)
    let mapRef = null;
    const _onMapReady = () => {
        setMarginBottom(0)
    }
    return (
        <SafeAreaView style={{flex:1}}>
                <MapView
                    onMapReady={_onMapReady}
                    style={[{ flex: 1,marginBottom: marginBottom }]}
                    // style={styles.mapview}
                    provider={PROVIDER_GOOGLE}
                    ref={ref => {
                        mapRef = ref
                    }}
                    loadingEnabled={true}
                    mapPadding={{ bottom: moderateScale(80), top:moderateScale(80)}}
                    // mapPadding={{  top:80 }}
                    on
                    loadingIndicatorColor={Colors.light.primary}
                    // region={props.region}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    initialRegion={props.region}
                    // onRegionChange={props.onRegionChange}
                    onRegionChangeComplete={props.onRegionChangeComplete}
                    scrollEnabled={props.scrollEnabled ? false : true}
                    // loadingBackgroundColor={Colors.light.primary}
                    onPress={() => { }}
                    onPanDrag={(event) => {
                        !isLoading && setIsLoading(true)
                    }}

                // onResponderMove={()=>console.log('move')}
                // onPress={() => { console.log('map press') }}
                />
                {
                    props.googleAutoComplete &&
                    <DefaultView style={styles.topContainer}>
                        {
                            props.children
                        }
                    </DefaultView>
                }
                {
                    props.backButton &&
                    <Callout>
                        {
                            props.children
                        }
                    </Callout>
                }

                <DefaultView
                    style={styles.marker}>
                    <MaterialIcons size={30} name="location-history" />
                </DefaultView>
                {
                    props.searchButton &&
                    <DefaultTouchableOpacity onPress={props.search} style={styles.buttonStyle}>
                        <Text lightColor={Colors.light.background} style={styles.titleText}>SEARCH</Text>
                    </DefaultTouchableOpacity>
                }
                {
                    props.isLoading &&
                    <DefaultView style={{ bottom: '50%' }}>
                        <Loading />
                    </DefaultView>
                }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: moderateScale(60),
        padding: moderateScale(10)
    },
    mapview: {
        height: '100%',
        // flex: 1
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15),
        textAlign: 'center'
    },
    iconButton: {
        justifyContent: 'center',
        paddingRight: moderateScale(10)
    },
    searchContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        top: 20,
        zIndex: 100,
        elevation: 3,
        paddingHorizontal: 15,
    },
    listViewContainer: {
        position: 'absolute',
        zIndex: 100,
        elevation: 3,
        top: 30,
        paddingHorizontal: 15,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: moderateScale(10),
        borderRadius: moderateScale(10)
    },
    buttonStyle: {
        width: '80%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: '5%',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        padding: moderateScale(10),
        backgroundColor: Colors.light.primary
    },

    countWrapper: {
        height: moderateScale(20),
        width: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: moderateScale(20),
        borderColor: Colors.dark.text
    },
    countText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: verticalScale(12)
    },
    buttonText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: verticalScale(12)
    },
    priceText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: verticalScale(12)
    },
    marker: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: '50%',
        left: '53%',
        zIndex: 0,
        transform: [{ translateX: -25 }, { translateY: -25 }]
    },
    topContainer: {
        position: 'absolute',
        zIndex: 999,
        width: '100%',
    }
})

export default MapViewer
import React, { useRef, useState, useEffect } from 'react';
import { Alert, Platform, StyleSheet, TouchableOpacity, View as DefaultView, KeyboardAvoidingView } from 'react-native';
import { View, Text, Entypo,FontAwesome } from '../../components/Themed'
import { Colors, moderateScale, Layout } from '../../constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'
import getEnvVars from '../../../Environment'
const Constants = getEnvVars()

const SearchPlace = (props:any)=> {
  
    const gogoleRef = useRef()
    const {defaultAddress, backScreen, title} = props.route.params
    const navigation = useNavigation()

    useEffect(() => {
        gogoleRef.current?.setAddressText(defaultAddress);
        gogoleRef.current.focus()
      }, []);
    
    const clearInput = () => {
        gogoleRef.current.clear()
    }  

    return(
        <View style={styles.container} >
                <Text style={styles.titleText}>{title}</Text>
                <GooglePlacesAutocomplete
                 placeholder="Search"
                 minLength={2} // minimum length of text to search
                 autoFocus={true}
                 ref={gogoleRef}
                 
                 returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                 listViewDisplayed="auto" // true/false/undefined
                 fetchDetails={true}
                 renderDescription={row => row.description
                    } // custom description render
                 onPress={(data, details = null) => {
                   console.log('data',data);
                   setTimeout(()=>{
                     navigation.goBack()
                   },500)
                  
                 }}
                 getDefaultValue={() => {
                   return ''; // text input default value
                 }}
                 query={{
                   // available options: https://developers.google.com/places/web-service/autocomplete
                   key: Constants.GOOGLE_MAPS_KEY,
                   language: 'en', // language of the results
                 }}
                 currentLocation={true}
                 renderRightButton ={()=>(
                     <TouchableOpacity style={styles.clearButtonContainer} onPress={()=>{clearInput()}}>
                       <Entypo name="circle-with-cross" size={20} color={Colors.light.primary} />
                     </TouchableOpacity>
                 )}
                 textInputProps={{
                   clearButtonMode:"never"
                 }}
                 styles={{
                   description: {
                     fontWeight: 'bold',
                   },
                   predefinedPlacesDescription: {
                     color: '#1faadb',
                   },
                   textInputContainer:{
                       borderWidth:1,
                       borderRadius:moderateScale(5)
                   },
                   textInput:{
                       
                   },
                   container:{
                       paddingTop: moderateScale(10)
                   }
                 }}
                 //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                 currentLocationLabel="Current location"
                 nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                 GoogleReverseGeocodingQuery={{
                   // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                 }}
                 GooglePlacesSearchQuery={{
                   // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                   rankby: 'distance',
                 }}
                 // filterReverseGeocodingByTypes={[
                 //   'locality',
                 // ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                 debounce={200}
               />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(14),
    },
    clearButtonContainer:{
        alignItems:'center',
        justifyContent:'center',
        padding:moderateScale(5)
    }
  
})

export default SearchPlace
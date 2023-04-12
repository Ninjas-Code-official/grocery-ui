import React, { useState } from 'react'
import { StyleSheet, Linking, Image, View as DefaultView } from 'react-native'
import { Colors, moderateScale } from '../../constants'
import { View, Text, TouchableOpacity } from '../../components/Themed'
import * as Location from "expo-location";
import { FlashMessage } from "../../components/FlashMessage";
import Spinner from "../../components/Spinner";

export default function CurrentLocation(props: any) {
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = async () => {
    setLoading(true)
    console.log('this render')
    let { status, canAskAgain } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setLoading(false);
      FlashMessage({
        message:
          'Tap on this message to open Settings then allow app to use location from permissions.',
        onPress: async () => {
          await Linking.openSettings()
        }
      })
      return;
    }
    try{
      let location = await Location.getCurrentPositionAsync({});
      setLoading(false)
      props.navigation.replace('Home')
    }
    catch(err){
      alert(err)
      setLoading(false)
    }
    

  }

  return (

    <View testID={'firstView'} style={styles.container}>
      {
        loading
        &&
        <DefaultView style={{ top: '67%', position: 'absolute', zIndex: 1 }}>
          <Spinner />
        </DefaultView>
      }
      <View testID={'SecondView'} style={styles.fullWidth}>
        <Image style={styles.imageStyle} source={{ uri: 'https://picsum.photos/200/300' }} />
      </View>
      <View style={styles.fullWidth}>
        <View style={styles.marginBottom}>
          <Text testID={'helperText'} style={styles.titleText}>grocery uses your location to show the resturant near you!</Text>
        </View>
        <TouchableOpacity disabled={loading} onPress={getCurrentLocation} style={[styles.buttonStyle, { backgroundColor: loading ? Colors.light.placeholderText : Colors.light.primary }]} lightColor={Colors.light.primary}>
          <Text style={styles.titleText} lightColor={Colors.light.background}>Use Current Location</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity disabled={loading} activeOpacity={0.7} onPress={() => { props.navigation.navigate('SelectLocation') }}>
        <Text style={styles.titleText} lightColor={Colors.light.primary}>
          {'Select another location'}
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: moderateScale(20),
    justifyContent: 'flex-end'
  },
  titleText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: moderateScale(15),
    textAlign: 'center'
  },
  imageStyle: {
    width: moderateScale(200),
    height: moderateScale(250)
  },
  buttonStyle: {
    justifyContent: 'flex-end',
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    width: '100%'
  },
  fullWidth: {
    width: '100%',
    marginBottom: moderateScale(80),
    alignItems: 'center',
  },
  marginBottom: {
    marginBottom: moderateScale(20)
  },

})
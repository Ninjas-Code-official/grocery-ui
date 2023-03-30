import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import {  } from "../components/Themed";
import { moderateScale, Colors} from "../constants";

function Spinner(props:any) {


  return (
   
    <ActivityIndicator
      animating={true}
    //   style={{
    //     backgroundColor: props.backColor
    //       ? props.backColor
    //       : Colors.light.primary
    //   }}
      size={props.size || 'large'}
      color={
        props.spinnerColor ? props.spinnerColor : Colors.light.primary
      }
    />
  )
}
export default Spinner

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})
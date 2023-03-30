import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import {  Colors} from "../../constants";

const DEFAULT_SIZE_MULTIPLIER = 0.8

function RadioButton(props:any) {
  

  const {
    size = 16,
    isSelected = false,
    onPress = () => null
  } = props

  const outerStyle = {
    borderColor: isSelected ? Colors.light.primary : Colors.light.primary,
    width: size + size * DEFAULT_SIZE_MULTIPLIER,
    height: size + size * DEFAULT_SIZE_MULTIPLIER,
    borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
    borderWidth: 2
  }

  const innerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: Colors.light.primary
  }

  return (
    <TouchableOpacity style={[styles.radio, outerStyle]} onPress={onPress}>
      {isSelected ? <View style={innerStyle} {...props} /> : null}
    </TouchableOpacity>
  )
}

RadioButton.prototype = {
  size: PropTypes.number,
  innerColor: PropTypes.string,
  outerColor: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
}

export default RadioButton

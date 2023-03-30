import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import { scale } from '../../constants/Scaling'
import { useThemeColor, FontAwesome } from '../Themed'
import { Colors } from "../../constants";

function CheckboxBtn(props:any) {
    console.log('props',props.checked)
  const backgroundColor = useThemeColor({}, 'background');
  const color = useThemeColor({}, 'text');
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.mainContainer,
        props.checked
          ? { backgroundColor:props.lightColor ? Colors.light.primary : backgroundColor }
          : { backgroundColor: backgroundColor }
      ]}>
      {props.checked ? (
        <FontAwesome
          name="check"
          size={scale(15)}
          lightColor={props.lightColor ? '#fff' : Colors.light.primary}
        />
      ) : null}
    </TouchableOpacity>
  )
}
export default CheckboxBtn

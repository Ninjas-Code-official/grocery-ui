import { scale, moderateScale} from '../../constants/Scaling'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    mainContainer: {
      borderColor:'grey',
      borderWidth: StyleSheet.hairlineWidth,
      width: scale(30),
      height: scale(30),
      justifyContent: 'center',
      alignItems: 'center',
      marginRight:moderateScale(5),
    }
  })
export default styles

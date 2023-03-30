import { verticalScale, scale, moderateScale, alignment } from '../../constants'
import { StyleSheet } from 'react-native'

const styles =
  StyleSheet.create({
    flex: {
      flex: 1,
      padding:moderateScale(10)
    },
    width85: {
      width: '85%'
    },
    shadow: {
      shadowOffset: { width: 0, height: scale(0.2) },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: scale(1),
      elevation: 5,
      borderWidth: 0.2,
      borderColor: '#e1e1e1'
    },
    languageText:{
        fontFamily:'OpenSans-Bold',
        fontSize:moderateScale(15)
    },
    EditText:{
      fontFamily:'OpenSans-Bold',
      fontSize:moderateScale(14)  
    },
    mainContainer: {
      ...alignment.PxSmall
    },
    languageContainer: {
      width: '100%',
      ...alignment.PRmedium,
      ...alignment.PTlarge,
      ...alignment.PBlarge,
      ...alignment.PLmedium
    },
    changeLanguage: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      ...alignment.MBsmall
    },
    button: {
      width: '15%',
      alignItems: 'flex-end'
    },
    notificationContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...alignment.PTmedium,
      ...alignment.PBmedium,
      ...alignment.PRsmall,
      ...alignment.PLsmall,
      ...alignment.MTxSmall
    },
    notificationChekboxContainer: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center'
    },
    versionContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      ...alignment.MTlarge
    },
    modalContainer: {
      borderRadius: verticalScale(4),
      ...alignment.Plarge
    },
    radioContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      ...alignment.Mmedium,
      ...alignment.PBxSmall
    },
    radioText:{
        marginLeft:moderateScale(10),
        fontSize:moderateScale(14),
        fontFamily:'OpenSans-Regular'
    },
    modalButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    modalButtons: {
      ...alignment.Msmall,
      marginBottom: 0,
      ...alignment.PTxSmall,
      ...alignment.PBxSmall
    }
  })

export default styles

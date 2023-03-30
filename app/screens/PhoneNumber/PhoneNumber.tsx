import React, { useRef, useState } from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Colors,version, moderateScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, FlatList, TouchableOpacity, AntDesign, MaterialIcons, Entypo } from '../../components/Themed'
import {OutlinedTextField} from 'react-native-material-textfield';
import { validateEmail, validatePhone } from "../../components/Validator";

const countries = [{code:'+92', countryName:'Pakistan'}, {code:'+33', countryName:'France'}, {code:'+39', countryName:'Italy'}]

const PhoneNumber = (props:any) => {

    const insets = useSafeAreaInsets()   
    const [phoneError, setPhoneError] = useState(false)
    const [isUser, setIsUser] = useState(false)
    const phoneRef = useRef();
    const navigation = useNavigation()

    const onNext = () => {
        let validPhone = validatePhone(phoneRef.current?.value())
        setPhoneError(!validPhone)
        if(validPhone){
          //otp screen 
            navigation.navigate('OTP')
        }
    }

return (
    <View style={[styles.container,{paddingTop:insets.top}]}> 
    <View style={styles.topContainer}>
    <TouchableOpacity onPress={()=>{props.navigation.popToTop()}}>
    <Entypo name="cross" size={25} />
    </TouchableOpacity>
    <TouchableOpacity onPress={onNext}>
        <Text style={styles.regularText} lightColor={Colors.light.primary}>Next</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.marginTop}>
    <MaterialIcons name="mobile-friendly" size={40} />
    </View>
    <View style={styles.marginTop}>
        <Text style={styles.titleText}>What's your mobile number?</Text>
    </View>
    <View style={styles.marginTop}>
        <Text style={styles.regularText}>We need this to verify and secure your account</Text>
    </View>
    <View style={styles.topContainer}>
        <View style={styles.countryStyle}>
            <Text>+92</Text>
        </View>
    <View style={styles.inputField}>
    <OutlinedTextField
                    label='Mobile number'
                    ref={phoneRef}
                    keyboardType='phone-pad'
                    lineWidth={1}
                    activeLineWidth={1}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    inputContainerStyle={{height:moderateScale(45)}}
                    // formatText={(text)=>formatText(text)}
                    error={phoneError?'Enter a valid phone number':''}
                    // onChangeText={onChangeCreditCard}
                    
                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
                </View>
    </View>
    </View>
    )
}

export default PhoneNumber;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:moderateScale(15)
    },
    itemContainer: {
        padding:moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(22)
    },
    countryStyle:{
        width:'20%',
        borderWidth:1,
        height:45,
        borderColor:Colors.dark.placeholderText,
        borderRadius:moderateScale(5),
        justifyContent:'center',
        alignItems:'center'
    },
    itemSeperator: {
        marginVertical: moderateScale(15),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    NextText:{
        fontFamily:'OpenSans-SemiBold'
    },
    regularText:{
        fontFamily:'OpenSans-Regular',
        fontSize:moderateScale(13)
    },
    marginTop:{
        marginTop:moderateScale(20)
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:moderateScale(20)
    },
    inputField: {
        width: '75%',
    },

})
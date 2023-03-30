import React, { useRef, useState } from 'react'
import { StyleSheet} from 'react-native'
import  Constants from "expo-constants";
import { Colors, moderateScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, AntDesign, MaterialIcons } from '../../components/Themed'
import {OutlinedTextField} from 'react-native-material-textfield';
import { validateEmail } from "../../components/Validator";

const CheckEmail = () => {
 
    const [emailError, setEmailError] = useState(false)
    const [isUser, setIsUser] = useState(true)
    const emailRef = useRef();
    const navigation = useNavigation()

    const onNext = () => {
        let validEmail = validateEmail(emailRef.current?.value())
        console.log(validEmail)
        setEmailError(!validEmail)
       
        //Registered Email Logic/Check here

        if(validEmail){
            //if email registered than throw to signin else signup
            if(isUser){
                navigation.navigate('SignIn', {email:emailRef.current?.value()})
            }
            else{
                navigation.navigate('SignUp',{email:emailRef.current?.value()})
            }
          
        }
    }

return (
    <View style={[styles.container]}> 
    <View style={styles.topContainer}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <AntDesign name="arrowleft" size={24} />
    </TouchableOpacity>
    <TouchableOpacity onPress={onNext}>
        <Text style={styles.NextText} lightColor={Colors.light.primary}>Next</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.marginTop}>
    <MaterialIcons name="email" size={40} />
    </View>
    <View style={styles.marginTop}>
        <Text style={styles.titleText}>What's your email?</Text>
    </View>
    <View style={styles.marginTop}>
        <Text style={styles.regularText}>We'll check if you have an account</Text>
    </View>
    <View style={styles.inputField}>
    <OutlinedTextField
                    label='Email'
                    ref={emailRef}
                    keyboardType='email-address'
                    lineWidth={1}
                    activeLineWidth={1}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    inputContainerStyle={{height:moderateScale(45)}}
                    // formatText={(text)=>formatText(text)}
                    error={emailError?'Enter a valid email address':''}
                    // onChangeText={onChangeCreditCard}
                    
                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
                </View>
    </View>
    )
}

export default CheckEmail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:moderateScale(15),
        paddingTop:Constants.statusBarHeight
    },
    itemContainer: {
        padding:moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(22)
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
        fontSize:moderateScale(15)
    },
    marginTop:{
        marginTop:moderateScale(20)
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputField: {
        width: '100%',
        paddingVertical:moderateScale(20)
    },

})
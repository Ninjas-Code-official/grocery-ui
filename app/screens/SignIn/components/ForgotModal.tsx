import React, { useState, useRef } from 'react';
import { Alert, BackHandler, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import { View, Text, TouchableOpacity, AntDesign, Entypo } from '../../../components/Themed';
import { Colors, moderateScale } from '../../../constants';
import {useNavigation} from "@react-navigation/native";
import { validateEmail, validatePassword } from "../../../components/Validator";

type ForgotModalProps = {
    onClose?: () => void
    email: string
}

export const ForgotModal = (props:ForgotModalProps) => {

    const [emailError, setEmailError] = useState(false)
    const navigation = useNavigation()
    const emailRef = useRef();
    const [emailValue, setEmailValue] = useState(props.email) 

    const onResetPassword = () => {
        let validEmail = validateEmail(emailRef.current?.value())
        setEmailError(!validEmail)
    }

    return (
        <View style={styles.container}>
               <TouchableOpacity onPress={props.onClose} style={styles.icon}>
            <Entypo name="cross" size={24} />
            </TouchableOpacity>
            <Text style={styles.titleText}>Forgot your password?</Text>
            <View style={styles.marginTop}>
                <Text>Confirm your email and we'll send you a link to set up a new one.</Text>
            </View>
            <View style={styles.inputField}>
                <OutlinedTextField
                    label='Email'
                    ref={emailRef}                    
                    value={emailValue}
                    keyboardType='email-address'
                    inputContainerStyle={{ height: moderateScale(45) }}
                    lineWidth={1}
                    activeLineWidth={1}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    // formatText={(text)=>formatText(text)}
                    error={emailError ? 'Enter a valid email address' : ''}

                // onChangeText={onChangeCreditCard}

                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
            </View>
            <TouchableOpacity lightColor={Colors.light.primary} onPress={onResetPassword} style={styles.emailButton}>
            <Text lightColor={'#fff'} style={styles.facebookText}>RESET PASSWORD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
        justifyContent: 'space-between',
        borderTopLeftRadius:moderateScale(20),
        borderTopRightRadius:moderateScale(20)
    },
    icon:{
        alignItems:'flex-end'
    },
    middleContainer: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    }, 
    itemSeperator: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        width:'42%',
        marginVertical:moderateScale(20)
    },
    marginTop:{
        marginTop:moderateScale(20)
    },
    inputField: {
        width: '100%',
        paddingVertical: moderateScale(20)
    },
    facebookText:{
        fontSize:moderateScale(14),
        fontFamily:'OpenSans-Bold'
    },
    emailButton:{
        width:'100%',
        alignItems:'center',
        borderColor:Colors.light.primary,
        borderWidth:1,
        padding:moderateScale(15),
        borderRadius:moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(20)
    },
    conditions: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent:'center',
        marginTop:moderateScale(10),
    },
    conditionsText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(9)
    }
})

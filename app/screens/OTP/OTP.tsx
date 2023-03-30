import React, { useRef, useState } from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Colors, version, moderateScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, FlatList, TouchableOpacity, AntDesign, MaterialIcons, Entypo, TextInput } from '../../components/Themed'
import { TextField } from 'react-native-material-textfield';
import { validateEmail, validatePhone } from "../../components/Validator";

const OTP = () => {

    const insets = useSafeAreaInsets()
    const [phoneError, setPhoneError] = useState(false)
    const otp1Ref = useRef();
    const otp2Ref = useRef();
    const otp3Ref = useRef();
    const otp4Ref = useRef();
    const [isUser, setIsUser] = useState(false)
    const phoneRef = useRef();
    const navigation = useNavigation()

    const onNext = () => {
        let validPhone = validatePhone(phoneRef.current?.value())
        setPhoneError(!validPhone)
        if (validPhone) {
            //otp screen moved

        }
    }

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.marginTop}>
                <MaterialIcons name="verified-user" size={40} />
            </View>
            <View style={styles.marginTop}>
                <Text style={styles.titleText}>Verify your mobile number?</Text>
            </View>
            <View style={styles.marginTop}>
                <Text style={styles.regularText}>Enter 4-digit code sent to your mobile number</Text>
                <Text style={styles.numberText}>+923352493858</Text>
            </View>
            <View style={styles.topContainer}>
                <TextField
                    ref={otp1Ref}
                    keyboardType='phone-pad'
                    lineWidth={0}
                    activeLineWidth={0}
                    // value='1'
                    maxLength={1}
                    containerStyle={styles.inputContainer}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    inputContainerStyle={{ height: moderateScale(40) }}
                    autoFocus
                // formatText={(text)=>formatText(text)}
                // error={phoneError?'Enter a valid phone number':''}
                // onChangeText={onChangeCreditCard}

                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
                <TextField
                    ref={otp2Ref}
                    keyboardType='phone-pad'
                    lineWidth={0}
                    activeLineWidth={0}
                    // value='1'
                    maxLength={1}
                    containerStyle={styles.inputContainer}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    inputContainerStyle={{ height: moderateScale(40) }}
                // formatText={(text)=>formatText(text)}
                // error={phoneError?'Enter a valid phone number':''}
                // onChangeText={onChangeCreditCard}

                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
                <TextField
                    ref={otp3Ref}
                    keyboardType='phone-pad'
                    lineWidth={0}
                    activeLineWidth={0}
                    // value='1'
                    maxLength={1}
                    containerStyle={styles.inputContainer}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    inputContainerStyle={{ height: moderateScale(40) }}
                // formatText={(text)=>formatText(text)}
                // error={phoneError?'Enter a valid phone number':''}
                // onChangeText={onChangeCreditCard}

                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
                <TextField
                    ref={otp4Ref}
                    keyboardType='phone-pad'
                    lineWidth={0}
                    activeLineWidth={0}
                    // value='1'
                    maxLength={1}
                    containerStyle={styles.inputContainer}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    inputContainerStyle={{ height: moderateScale(40) }}
                    onEndEditing={()=>{console.log('end')}}
                // formatText={(text)=>formatText(text)}
                // error={phoneError?'Enter a valid phone number':''}
                // onChangeText={onChangeCreditCard}

                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.NextText} lightColor={Colors.light.primary}>Send it again</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OTP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(15)
    },
    itemContainer: {
        padding: moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(22)
    },
    countryStyle: {
        width: '20%',
        borderWidth: 1,
        height: 45,
        borderColor: Colors.dark.placeholderText,
        borderRadius: moderateScale(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemSeperator: {
        marginVertical: moderateScale(15),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    NextText: {
        fontFamily: 'OpenSans-SemiBold'
    },
    numberText: {
        fontFamily: 'OpenSans-Bold'
    },
    inputContainer: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderWidth: 1,
        marginRight: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        borderColor:Colors.dark.placeholderText
    },
    regularText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(13)
    },
    marginTop: {
        marginTop: moderateScale(20)
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: moderateScale(20)
    },
    inputField: {
        width: '75%',
    },

})
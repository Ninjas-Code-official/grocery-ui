import React, { useRef, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import { Colors, version, moderateScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, FlatList, TouchableOpacity, AntDesign, Entypo } from '../../components/Themed'
import { OutlinedTextField } from 'react-native-material-textfield';
import { validateEmail, validatePassword, validateName } from "../../components/Validator";
import { Modalize } from 'react-native-modalize'

const SignUp = ({ route }: any) => {

    const { email } = route.params
    const insets = useSafeAreaInsets()
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState({
        firstNameError: false,
        lastNameError:false
    })
    const [passwordError, setPasswordError] = useState(false)
    const [showPassword, setShowPassword] = useState(true);
    const navigation = useNavigation()
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const passwordRef = useRef();
    const [isModalOpen,setIsModalOpen]=useState(false)
    const modalizeRef = useRef<Modalize>(null)

    const onOpen = () => {
        setIsModalOpen(true)
        modalizeRef.current?.open()
    }
    const onClose = () => {
        modalizeRef.current?.close()
    }

    const onNext = () => {
        let validEmail = validateEmail(emailRef.current?.value())
        let validPassword = validatePassword(passwordRef.current?.value())
        let validFirstName = validateName(firstNameRef.current?.value())
        let validLastName = validateName(lastNameRef.current?.value())
        console.log('val', validPassword)
        setEmailError(!validEmail)
        setPasswordError(!validPassword)
        setNameError({
            ...nameError,
            firstNameError:!validFirstName,
            lastNameError:!validLastName
        })
        if(validEmail && validPassword && validFirstName && validLastName){
            navigation.navigate('PhoneNumber')
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'height' : ''} style={[styles.container, { paddingTop: insets.top }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name="arrowleft" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onNext}>
                    <Text style={styles.NextText} lightColor={Colors.light.primary}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.marginTop}>
                <Entypo name="mobile" size={40} />
            </View>
            <View style={styles.marginTop}>
                <Text style={styles.titleText}>Let's get you started!</Text>
            </View>
            <View style={styles.marginTop}>
                <Text style={styles.regularText}>First, create your grocery account</Text>
            </View>
            <View style={styles.inputField}>
                <OutlinedTextField
                    label='Email'
                    ref={emailRef}
                    defaultValue={email}
                    keyboardType='email-address'
                    inputContainerStyle={{ height: moderateScale(50) }}
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
            <View style={styles.middleContainer}>
                <View style={styles.middleField}>
            <OutlinedTextField
                    label='first name'
                    ref={firstNameRef}
                    // defaultValue={email}
                    keyboardType='default'
                    inputContainerStyle={{ height: moderateScale(50) }}
                    lineWidth={1}
                    activeLineWidth={1}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    // formatText={(text)=>formatText(text)}
                    error={nameError.firstNameError ? 'Enter valid first name' : ''}

                // onChangeText={onChangeCreditCard}

                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
                </View>
                <View style={styles.middleField}>
                   <OutlinedTextField
                    label='last name'
                    ref={lastNameRef}
                    // defaultValue={email}
                    keyboardType='default'
                    inputContainerStyle={{ height: moderateScale(50) }}
                    lineWidth={1}
                    activeLineWidth={1}
                    tintColor={Colors.dark.inputBackground}
                    baseColor={Colors.dark.placeholderText}
                    // formatText={(text)=>formatText(text)}
                    error={nameError.lastNameError ? 'Enter valid last name' : ''}

                // onChangeText={onChangeCreditCard}

                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
                </View>
            </View>
            <OutlinedTextField
                label='Password'
                ref={passwordRef}
                // value={email}
                keyboardType='default'
                inputContainerStyle={{ height: moderateScale(50) }}
                lineWidth={1}
                activeLineWidth={1}
                tintColor={Colors.dark.inputBackground}
                baseColor={Colors.dark.placeholderText}
                renderRightAccessory={() =>
                (
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { setShowPassword(!showPassword) }}>
                        <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} />
                    </TouchableOpacity>
                )
                }
                // formatText={(text)=>formatText(text)}
                error={passwordError ? 'Enter a valid password' : ''}
                secureTextEntry={showPassword}
                

            // onChangeText={onChangeCreditCard}

            // onSubmitEditing={this.onSubmit}
            // ref={this.fieldRef}
            />

            {/* <Modalize ref={modalizeRef}
                adjustToContentHeight
                // modalHeight={moderateScale(280)}
                // avoidKeyboardLikeIOS
                handlePosition='inside'
                onClosed={()=>{setIsModalOpen(false)}}
                handleStyle={{ backgroundColor: Colors.light.lightBackGround }}
                // keyboardAvoidingBehavior='height'
            >
                {isModalOpen && <ForgotModal email={emailRef.current?.value()} onClose={onClose} />}
            </Modalize> */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(15),
        backgroundColor:'#fff'
    },
    itemContainer: {
        padding: moderateScale(10)
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
    NextText: {
        fontFamily: 'OpenSans-SemiBold'
    },
    regularText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(15)
    },
    marginTop: {
        marginTop: moderateScale(20)
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputField: {
        width: '100%',
        paddingTop: moderateScale(20)
    },
    middleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:moderateScale(20)
    },
    middleField:{
        width:'47%',
    }

})
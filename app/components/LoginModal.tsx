import React from 'react';
import { StyleSheet, View as DefaultView, Alert, Image } from 'react-native';

import { Modalize } from 'react-native-modalize'
import { useNavigation } from "@react-navigation/native";
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { AntDesign as DefaultAntDesign, FontAwesome } from "@expo/vector-icons";

import { View, Text, TouchableOpacity, Entypo } from '../components/Themed';
import { Colors, moderateScale } from '../constants';
import getEnvVars from "../../Environment";
import { useUser } from '../contexts';

const Constants = getEnvVars()

export const LoginModal = () => {
    const { authRef } = useUser()
    const onClose = () => {
        authRef.current.close()
    }
    async function logIn() {
        try {
            await Facebook.initializeAsync({
                appId: '183010666972865',
            });
            //   const {
            //     type,
            //     token,
            //     expirationDate,
            //     permissions,
            //     declinedPermissions,
            //   } 
            const result = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (result.type === 'success') {
                console.log('type', result)
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${result.token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    const signInWithGoogle = async () => {

        try {
            const result = await Google.logInAsync({
                iosClientId: Constants.IOS_CLIENT_ID,
                androidClientId: Constants.ANDROID_CLIENT_ID
                // iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
                // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
            });

            if (result.type === 'success') {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        }
        catch (err) {
            console.log('error', err)
        }
    }

    const navigation = useNavigation()
    return (
        <Modalize
            ref={authRef}
            adjustToContentHeight
            handlePosition='inside'
            handleStyle={{ backgroundColor: Colors.light.lightBackGround }}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={onClose} style={styles.icon}>
                    <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.titleText}>Sign up or log in</Text>
                {/* google signin here */}
                <TouchableOpacity onPress={signInWithGoogle} style={styles.google}>

                    {/* <DefaultAntDesign color={Colors.light.placeholderText} size={17} name="google" /> */}
                    <Image source={{uri:'https://blog.hubspot.com/hubfs/image8-2.jpg'}} style={{width:moderateScale(20),height:moderateScale(20)}} />
                    <DefaultView style={{ paddingLeft: moderateScale(10) }}>
                        <Text style={styles.facebookText}>Sign In With Google</Text>
                    </DefaultView>
                </TouchableOpacity>
                {/* facebook login here */}
                <TouchableOpacity onPress={() => logIn()} style={styles.facebook}>

                    <FontAwesome color={Colors.light.background} size={17} name="facebook" />
                    <DefaultView style={{ paddingLeft: moderateScale(10) }}>
                        <Text lightColor={Colors.light.background} style={styles.facebookText}>Continue with Facebook</Text>
                    </DefaultView>
                </TouchableOpacity>
                <View style={styles.middleContainer}>
                    <View style={styles.itemSeperator} />
                    <Text style={styles.facebookText}>or</Text>
                    <View style={styles.itemSeperator} />
                </View>
                <TouchableOpacity onPress={() => {
                    onClose()
                    navigation.navigate('Auth')
                }} style={styles.emailButton}>
                    <Text lightColor={Colors.light.primary} style={styles.facebookText}>Continue with email</Text>
                </TouchableOpacity>
                <View style={styles.conditions}>
                    <Text style={styles.conditionsText}>By continuing, you agree to our </Text>
                    <Text style={styles.conditionsText} lightColor={Colors.light.primary}>Terms & Conditions</Text>
                    <Text style={styles.conditionsText}>and </Text>
                    <Text style={styles.conditionsText} lightColor={Colors.light.primary}>Privacy Policy</Text>
                </View>
            </View>
        </Modalize>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
        justifyContent: 'space-between',
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20)
    },
    icon: {
        alignItems: 'flex-end'
    },
    middleContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemSeperator: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        width: '42%',
        marginVertical: moderateScale(20)
    },
    facebook: {
        flexDirection: 'row',
        backgroundColor: '#1877f2',
        marginTop: moderateScale(20),
        padding: moderateScale(15),
        justifyContent: 'center',
        alignItems: 'center',
        elevation:4
    },
    google: {
        flexDirection: 'row',
        borderColor: '#F1F1F1',
        marginTop: moderateScale(20),
        padding: moderateScale(15),
        elevation:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookText: {
        fontSize: moderateScale(14),
        fontFamily: 'OpenSans-Bold'
    },
    emailButton: {
        width: '100%',
        alignItems: 'center',
        borderColor: Colors.light.primary,
        borderWidth: 1,
        padding: moderateScale(18),
        borderRadius: moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(20)
    },
    conditions: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: moderateScale(10),
    },
    conditionsText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(9)
    }
})

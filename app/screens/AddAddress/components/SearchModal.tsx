import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';
import { TextField, FilledTextField, OutlinedTextField } from 'react-native-material-textfield'
import { View, Text, TouchableOpacity, MaterialIcons, FeatherIcon } from '../../../components/Themed';
import { Colors, moderateScale } from '../../../constants';

type SearchModalProps = {
    screen: string;
}

export const SearchModal = (props: SearchModalProps) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0)', marginTop: moderateScale(140), }}>
            <View style={styles.modalView}>
                <Text style={styles.titleText}>{props.screen == "Add Address" ? 'Add a new address' : 'Edit your address'}</Text>
                <View style={{ paddingTop: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '90%', }}>
                        <OutlinedTextField
                            label='Search for your exact address'
                            keyboardType='default'
                            tintColor={Colors.dark.inputBackground}
                            activeLineWidth={1}

                        />
                        <View style={{ position: 'absolute', right: 20, top: 15 }} >
                            <FeatherIcon name="x" size={23} />
                        </View>
                    </View>
                    <TouchableOpacity style={{ paddingLeft: 10 }}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
    },
    modalView: {
        backgroundColor: "white",
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderTopEndRadius: moderateScale(20),
        borderTopLeftRadius: moderateScale(20),
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: Dimensions.get('window').height - 140,
        // marginTop:moderateScale(140),
        marginBottom: 0
    },
    cardContainer: {
        flexDirection: 'row',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(10),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
        padding: moderateScale(10)
    },
    detailsContainer: {
        justifyContent: 'center',
        width: '80%',
        paddingLeft: moderateScale(15)
    },
    labelButton: {
        padding: moderateScale(10),
        borderRadius: moderateScale(20),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: moderateScale(10)
    },
    inputContainer2: {
        marginTop: moderateScale(10),
    },
    inputContainer1: {
        marginTop: moderateScale(20),
    },
    topContainer: {
        height: moderateScale(40),
        justifyContent: 'center',
    },
    middleContainer: {
        height: moderateScale(80),
        justifyContent: 'space-evenly',
    },
    bottomContainer: {
        padding: moderateScale(2),
        height: moderateScale(45),
        marginBottom: moderateScale(20),
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(10),
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15)
    },
    cardTextTitle: {
        fontFamily: 'OpenSans-Bold',
    },
    cardTextSub: {
        fontFamily: 'OpenSans-Regular',
    },
    labelText: {
        fontFamily: 'OpenSans-SemiBold',
        color: Colors.light.primary
    }
})
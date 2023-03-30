import React, { useRef, useState } from 'react';
import { StyleSheet, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, TextInput,TouchableOpacity as CustomTouchableOpacity, useThemeColor } from '../../components/Themed';
import { TextField } from 'react-native-material-textfield'
import { Colors, moderateScale, scale } from '../../constants'
import { useUser } from '../../contexts'
import { UserActionType } from '../../reducers'
import { Button } from './components'
import { useNavigation } from '@react-navigation/native'

type paramsType = {
    id: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    mobile: number | undefined
}

const Profile = () => {
    const navigation = useNavigation()
    const color = useThemeColor({}, 'text');
    const { user, dispatchUser } = useUser();
    const [isEdit, setIsEdit] = useState(false);
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const phoneNumberRef = useRef()
    const [params, setParams] = useState<paramsType>({
        id: user?.id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        mobile: user?.mobile
    })

    React.useEffect(() => {
        console.log('user', user)
        const backAction = () => {
            isEdit ? setIsEdit(false) : navigation.goBack()
            return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    })
    const update = async () => {
        const firstName = firstNameRef.current?.value()
        const lastName = lastNameRef.current?.value()
        const phoneNumber = phoneNumberRef.current?.value()

        // validation
        
        // mutation

        setIsEdit(false);
    }
    return (
        <View style={styles.container}>
            <View style={styles.actionContainer}>
                <View style={styles.contactContainer}>
                    <Text style={styles.contactInfoText}>
                        Contact info
                    </Text>
                    {
                        !isEdit && <TouchableOpacity onPress={() => { setIsEdit(true) }}>
                            <Text lightColor={Colors.light.primary} style={styles.editText}>EDIT</Text>
                        </TouchableOpacity>
                    }

                </View>
                {
                    isEdit ?
                        <>
                            <View style={styles.contactContainer}>
                                <View style={styles.textInput}>
                                    <TextField
                                        ref={firstNameRef}
                                        label="First name"
                                        labelFontSize={15}
                                        activeLineWidth={2}
                                        titleTextStyle={{backgroundColor:'red', color:'red'}}
                                        tintColor={Colors.light.primary}
                                        lineWidth={2}
                                        baseColor={color}
                                        style={{ fontWeight: '700',color:color }}
                                        defaultValue={params?.firstName}
                                    //  onChangeText={(text:string)=>{setParams({...params,firstName:text})}}
                                    // formatText={this.formatText}
                                    // onSubmitEditing={this.onSubmit}
                                    // ref={this.fieldRef}
                                    />
                                </View>
                                <View style={styles.textInput}>
                                    <TextField
                                        ref={lastNameRef}
                                        label="Last name"
                                        labelFontSize={15}
                                        defaultValue={params?.lastName}
                                        activeLineWidth={2}
                                        tintColor={Colors.light.primary}
                                        lineWidth={2}
                                        baseColor={color}
                                        style={{ fontWeight: '700',color:color }}
                                        onChangeText={(text: string) => { setParams({ ...params, lastName: text }) }}
                                    // formatText={this.formatText}
                                    // onSubmitEditing={this.onSubmit}
                                    // ref={this.fieldRef}
                                    />
                                </View>
                            </View>
                            <View>
                                <TextField
                                    label="Email address"
                                    labelFontSize={15}
                                    defaultValue={params?.email}
                                    activeLineWidth={2}
                                    tintColor={Colors.light.primary}
                                    lineWidth={2}
                                    baseColor={color}
                                    style={{ fontWeight: '700', color:color }}
                                    editable={false}
                                // formatText={this.formatText}
                                // onSubmitEditing={this.onSubmit}
                                // ref={this.fieldRef}
                                />
                            </View>
                            <View>
                                <TextField
                                    ref={phoneNumberRef}
                                    label="Mobile number"
                                    labelFontSize={15}
                                    defaultValue={`${params?.mobile}`}
                                    activeLineWidth={2}
                                    tintColor={Colors.light.primary}
                                    lineWidth={2}
                                    baseColor={color}
                                    style={{ fontWeight: '700',color:color }}
                                    keyboardType="phone-pad"
                                // onChangeText={(text:number) : void =>{setParams({...params, mobile:text})}}
                                // formatText={this.formatText}
                                // onSubmitEditing={this.onSubmit}
                                // ref={this.fieldRef}

                                />
                            </View>
                            <Button text={'Update'} onPress={update} />
                        </>
                        :

                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>
                                {`${user?.firstName} ${user?.lastName}`}
                            </Text>
                            <Text style={styles.infoText}>
                                {user?.email}
                            </Text>
                            <Text style={styles.infoText}>
                                {`+${user?.mobile}`}
                            </Text>
                        </View>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(10)
    },
    actionContainer: {
        paddingTop: moderateScale(10),
        borderRadius: moderateScale(5),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: moderateScale(20),
    },
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'

    },
    infoContainer: {
        marginTop: moderateScale(10),
    },
    contactInfoText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(16)
    },
    editText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(12),
    },
    infoText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(16),
        marginTop: moderateScale(10)
    },
    textInput: {
        width: '40%'
    }
})

export default Profile

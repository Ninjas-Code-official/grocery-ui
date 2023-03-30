import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { View, Text,useThemeColor, Entypo } from '../components/Themed';
import { Colors, moderateScale } from '../constants';
import { useUser } from '../contexts';

export const Profile = (props:any) => {

    const color = useThemeColor({}, 'primary');
    const [isLogin, setIsLogin] = useState(false);
    const {authRef} = useUser()

    return (
        <View style={styles.profileContainer} lightColor={color} darkColor={color}>
        <TouchableOpacity onPress={()=>{
            props.navigation.closeDrawer()
            authRef.current.open()            
            
            }}>
        <Text lightColor={Colors.dark.text} style={styles.profileText}>{isLogin ? 'Muhammad Adnan' : 'Log in / Create account'}</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    labelText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(12),
        color: Colors.dark.primary
    },
    profileContainer: {
        height: moderateScale(150),
        width: '100%',
        justifyContent: 'flex-end',
        padding: moderateScale(18)
    },
    profileText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(13)
    },
})




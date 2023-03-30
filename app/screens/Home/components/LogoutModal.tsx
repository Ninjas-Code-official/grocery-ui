import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import Modal from "react-native-modal";
import { Colors, moderateScale } from "../../../constants";

import { View, Text, AntDesign, TouchableOpacity } from '../../../components/Themed';
import { useUser } from '../../../contexts';

type logoutModalProps = {
    onCancel?:()=>void,
}

export const LogoutModal = (props:logoutModalProps) => {

    const {logoutModalVisible, toggleLogoutModal} = useUser()  
    return (
        <Modal
            backdropColor="#000"
            backdropOpacity={0.4}
            // animationIn="zoomInDown"
            // animationOut="zoomOutUp"
            // animationInTiming={3000}
            // animationOutTiming={3000}
            // backdropTransitionInTiming={3000}
            // backdropTransitionOutTiming={3000}
            onBackdropPress={toggleLogoutModal}
            onBackButtonPress={toggleLogoutModal}
            isVisible={logoutModalVisible}
            >
     <View style={styles.container}>
    <Text style={styles.titleText}>Logging out?</Text>
     <Text style={styles.middleText}>Thanks for stopping by, See you soon again!</Text>
     <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={toggleLogoutModal} style={styles.cancelButton} >
            <Text style={styles.titleText} lightColor={Colors.light.primary}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleLogoutModal} lightColor={Colors.light.primary} style={styles.cancelButton} >
            <Text style={styles.titleText} lightColor={Colors.light.background}>Log out</Text>
        </TouchableOpacity>
     </View>
     </View>   
     </Modal>
    )
}

const styles = StyleSheet.create({
   container:{
    backgroundColor: Colors.light.background, 
    width: '100%', 
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10
   },
   titleText:{
       fontFamily:'OpenSans-Bold'
   },
   middleText:{
       marginTop:moderateScale(10),
       fontFamily:'OpenSans-Regular',
       fontSize:moderateScale(12)
   },
   bottomContainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginTop:moderateScale(20) 
    },
   cancelButton:{
       borderWidth:1,
       width:'45%',
       borderColor:Colors.light.primary,
       alignItems:'center',
       paddingVertical:moderateScale(10),
       borderRadius:moderateScale(10)
    }
})


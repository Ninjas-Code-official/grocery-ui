import React, { useState } from 'react';
import {StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity,OutlinedTextField, AntDesign, Entypo } from '../../../components/Themed';
import { Colors, moderateScale } from '../../../constants';
import CheckboxBtn, {  } from "../../../components/CheckBoxButton";
import {validateCreditCard} from "../../../components/Validator";

// type AvailabilityModalProps = {
//     onClose?: () => void
// }

export const PaymentModal = () => {
    
    const [cardError, setCardError] = useState(false)

   function formatText(text:string){
        return text.replace(/[^0+-\d]/g, '/');
      };

     const onChangeCreditCard = (text:string)=> {
        console.log('text',text)
        let valid = validateCreditCard(text)
        setCardError(!valid)
      }

    return (
        <View style={styles.container}>

            <Text style={styles.titleText}>Add a credit or debit card</Text>
            <View style={styles.inputField}>
                <OutlinedTextField
                    label='Card number'
                    keyboardType='phone-pad'
                    placeholder="Card number"
                    lineWidth={1}
                    // tintColor={Colors.dark.inputBackground}
                    // baseColor={Colors.dark.inputBackground}
                    formatText={(text)=>formatText(text)}
                    error={cardError?'Enter a valid card number':''}
                    onChangeText={onChangeCreditCard}
                    
                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
            </View>
            <View style={styles.middleContainer}>
            <View style={styles.inputFieldRow}>
                <OutlinedTextField
                    label='MM/YY'
                    keyboardType='phone-pad'
                    lineWidth={1}
                    placeholder="MM/YY"
                    maxLength={4}
                    // tintColor={Colors.dark.inputBackground}
                    // baseColor={Colors.dark.inputBackground}
                    formatText={(text)=>formatText(text)}
                    onChangeText={onChangeCreditCard}
                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
            </View>
            <View style={styles.inputFieldRow}>
                <OutlinedTextField
                    label='CVC'
                    keyboardType='phone-pad'
                    lineWidth={1}
                    placeholder="CVC"
                    maxLength={3}
                    // tintColor={Colors.dark.inputBackground}
                    // baseColor={Colors.dark.inputBackground}
                    renderRightAccessory = {()=> <Entypo name="credit-card" /> }
                // formatText={this.formatText}
                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
            </View>
            </View>
            <View style={styles.checkBox}> 
            <CheckboxBtn 
            checked={true}
            size={23}
            lightColor={Colors.light.lightBackGround}
            />
            <Text lightColor={Colors.dark.placeholderText} style={styles.saveText}>Save my card</Text>
            </View>
            <View style={styles.itemSeperator} />
            <TouchableOpacity style={styles.doneButton} onPress={()=>{}} activeOpacity={1} lightColor={Colors.light.placeholderText}>
                            <Text style={styles.buttonText} lightColor={Colors.dark.text}>DONE</Text>
            </TouchableOpacity>
            <View style={styles.bottomContainer}>
            <AntDesign name="Safety" color="black" lightColor={Colors.light.placeholderText} />
                <Text style={styles.bottomText} lightColor={Colors.light.placeholderText} >We'll keep your payment detail safe</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(20),
        paddingVertical:moderateScale(10),
        paddingTop:moderateScale(20),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    middleContainer: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    }, 
    itemSeperator: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        width:'100%',
        marginVertical:moderateScale(20)
    },
    bottomContainer: {
        paddingTop:moderateScale(15),
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly'
    },
    buttonText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize:moderateScale(17)
    },
    doneButton: {
        flexDirection: 'row',
        height: moderateScale(55),
        marginHorizontal: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:'100%'
    },
    inputField: {
        width: '100%',
        paddingVertical:moderateScale(20)
    },
    inputFieldRow:{
        width:'48%'
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(20)
    },
    saveText: {
        fontFamily: 'OpenSans-Regular',
        marginLeft: moderateScale(5),
        fontSize:moderateScale(15)
    },
    checkBox:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:moderateScale(10),
        width:'100%'
    },
    bottomText:{
        fontSize:moderateScale(15),
        fontFamily:'OpenSans-Regular'
    }
})

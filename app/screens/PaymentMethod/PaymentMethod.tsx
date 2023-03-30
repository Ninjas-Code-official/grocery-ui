import React, { useState, useRef } from 'react'
import { StyleSheet, KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
import { Colors, version, moderateScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity, FontAwesome, AntDesign } from '../../components/Themed'
import RadioButton from "../../components/RadioButton";
import { Modalize } from 'react-native-modalize'
import {PaymentModal  } from "./components";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const PaymentData = [{ id: 1, mode: 'Credit or debit card', icon: 'cc-mastercard' }, { id: 2, mode: 'Cash', icon: 'money' }]

type PaymentType = {
    id: number,
    mode: string,
    icon: string
}

const PaymentMethod = () => {
    
    const navigation = useNavigation()
    const modalizeRef = useRef<Modalize>(null)

    const onOpen = () => {
        modalizeRef.current?.open()
    }
    const onClose = () => {
        modalizeRef.current?.close()
    }

    const itemSeperatorComponent = () => (
        <View style={styles.itemSeperator} />
    )

    const onItemClick = (id:number) => {
       id == 1 ? onOpen() : navigation.goBack()
    }

    const renderItem = (data: { item: PaymentType }) => {
        return (
            <TouchableOpacity onPress={()=>onItemClick(data.item.id)} style={styles.itemContainer}>
                <View style={styles.leftContainer}>
                    <FontAwesome lightColor={Colors.dark.imageBackground} name={data.item.icon} />
                    <View>
                    <Text style={[styles.titleText, { marginLeft: moderateScale(12) }]}>{data.item.mode}</Text>
                    <View style={styles.cards}>
                    {data.item.id==1 && 
                    <>
                    <FontAwesome name="cc-visa"  />
                    <FontAwesome name="cc-mastercard" lightColor={'darkblue'} />
                    </>
                    }
                    </View>
                    </View>
                </View>
                {
                    data.item.id > 1 ?
                        <RadioButton
                            animation={'bounceIn'}
                            size={14}
                            isSelected={true}
                        // onPress={() => activeRadioSetter(item.index)}
                        />
                        :
                        <AntDesign name="right" size={16} lightColor={Colors.dark.placeholderText} />
                }

            </TouchableOpacity>

        )
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "android" ? 'padding' : 'height'} style={styles.container}>
            <FlatList
                contentContainerStyle={{
                    flexGrow:1,
                    padding: moderateScale(10),
                    marginBottom: moderateScale(10),
                }}
                alwaysBounceVertical={false}
                // ListEmptyComponent={ListEmpty}
                // ListHeaderComponent={renderHeader}
                // ListFooterComponent={renderFooter}
                // ItemSeparatorComponent={itemSeperatorComponent}
                data={PaymentData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index + item.mode}
            />
            {/* <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}> */}
            <Modalize ref={modalizeRef}
                adjustToContentHeight
                handlePosition='inside'
                handleStyle={{backgroundColor:Colors.light.lightBackGround}}
                avoidKeyboardLikeIOS={false}
                >
              <PaymentModal />
            </Modalize>
            {/* </TouchableOpacity> */}
        </KeyboardAvoidingView>
    )
}

export default PaymentMethod;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        padding: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(20)
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15)
    },
    itemSeperator: {
        marginVertical: moderateScale(15),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center'

    },
    cards:{
        flexDirection:'row',
        paddingTop:moderateScale(6),
        marginLeft:moderateScale(12),
        width:'40%',
        justifyContent:'space-evenly'
    }
})
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Colors,version } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity } from '../../components/Themed'
import {SafeAreaView} from "react-native-safe-area-context";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import RadioButton from "../../components/RadioButton";
import CheckBoxButton from "../../components/CheckBoxButton";
import * as Localization from 'expo-localization'
import * as Updates from 'expo-updates'

const languageTypes = [
    { value: 'English', code: 'en', index: 0 },
    { value: 'français', code: 'fr', index: 1 },
    { value: 'ភាសាខ្មែរ', code: 'km', index: 2 },
    { value: '中文', code: 'zh', index: 3 },
    { value: 'Deutsche', code: 'de', index: 4 }
  ]

const Settings = () => {

    const [languageName, setLanguage] = useState('English')
    const [modalVisible, modalVisibleSetter] = useState(false)
    const [activeRadio, activeRadioSetter] = useState(languageTypes[0].index)
    const [pushNotificationCheck, setPushNotificationCheck] = useState(false);
    const [RecieveOfferCheck, setRecieveOfferCheck] = useState(false);

    React.useEffect(()=>{
        selectLanguage()
    },[])

    async function selectLanguage() {
        const lang = await AsyncStorage.getItem('grocery-language')
        console.log('grocery language',lang)
        if (lang) {
          const defLang = languageTypes.findIndex(el => el.code === lang)
          const langName = languageTypes[defLang].value
          setLanguage(langName)
          activeRadioSetter(defLang)
        }
      }

      async function onSelectedLanguage() {
          const languageInd = activeRadio
          const localization = await Localization.getLocalizationAsync()
          await AsyncStorage.setItem(
            'grocery-language',
            languageTypes[languageInd].code
          )
          Updates.reloadAsync()
      }
    
      return (
        <SafeAreaView
        edges={['bottom', 'left', 'right']}
        style={[styles.flex, styles.mainContainer]}>
        <View style={styles.flex}>
        <View
            style={[styles.languageContainer, styles.shadow]}>
            <View style={styles.changeLanguage}>
              <View style={styles.width85}>
                <Text lightColor={Colors.light.imageBackground}>Language</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => modalVisibleSetter(true)}
                style={styles.button}>
                <Text style={styles.EditText} lightColor={Colors.light.primary}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.languageText}>{languageName}</Text>
          </View>
          <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            // updateNotificationStatus('offer')
            // setBtnText('offer')
          }}
          style={[styles.notificationContainer, styles.shadow]}>
          <View style={styles.notificationChekboxContainer}>
            <CheckBoxButton
              checked={pushNotificationCheck}
              onPress={() => {
               setPushNotificationCheck(!pushNotificationCheck)
              }}
            />
            <Text>
              Recieve Push Notifications
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            // updateNotificationStatus('order')
            // setBtnText('order')
          }}
          style={[styles.notificationContainer, styles.shadow]}>
          <View style={styles.notificationChekboxContainer}>
            <CheckBoxButton
              checked={RecieveOfferCheck}
              onPress={() => {
                setRecieveOfferCheck(!RecieveOfferCheck)
              }}
            />
            <Text>
            Recieve Offers By Email
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.versionContainer}>
          <Text lightColor={Colors.light.primary} style={styles.languageText}>
            Version: {version}
          </Text>
        </View>
        </View>
        <Modal
        isVisible={modalVisible}
        onBackdropPress={() => modalVisibleSetter(false)}
        onBackButtonPress={() => modalVisibleSetter(false)}
        >
        <View style={styles.modalContainer}>
        <Text style={styles.languageText}>Select Language</Text>
        {languageTypes.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() => {}}
              style={[styles.radioContainer]}>
                <RadioButton
                animation={'bounceIn'}
                size={14}
                isSelected={activeRadio === item.index}
                onPress={() => activeRadioSetter(item.index)}
              />
              <Text lightColor={Colors.dark.lightBackGround} style={styles.radioText}>{item.value}</Text>
            </TouchableOpacity>
          ))}
              <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.modalButtons}
              onPress={() => modalVisibleSetter(false)}>
              <Text lightColor={Colors.light.primary} style={styles.languageText}> 
                CLOSE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.modalButtons}
              onPress={onSelectedLanguage}
              >
              <Text lightColor={Colors.light.primary} style={styles.languageText}> 
                SELECT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </SafeAreaView>
    )
}

export default Settings;

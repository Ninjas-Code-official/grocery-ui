import * as Localization from 'expo-localization';
import { Platform} from 'react-native'
import i18n from 'i18n-js'
import {en, fr} from "../translations";
import AsyncStorage from "@react-native-async-storage/async-storage";

 const initAsync = async() => {
  i18n.fallbacks = true
  i18n.translations = {
    en,
    ja: { ViewAll: 'こんにちは' },
    fr
  };
  // i18n.locale = 'km'
    const lang = await AsyncStorage.getItem('grocery-language')
    i18n.locale = lang || 'en'
}

export default initAsync

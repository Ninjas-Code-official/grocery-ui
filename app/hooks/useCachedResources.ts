import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
          'OpenSans-BoldItalic': require('../../assets/fonts/OpenSans-BoldItalic.ttf'),
          'OpenSans-ExtraBold': require('../../assets/fonts/OpenSans-ExtraBold.ttf'),
          'OpenSans-ExtraBoldItalic': require('../../assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
          'OpenSans-Italic': require('../../assets/fonts/OpenSans-Italic.ttf'),
          'OpenSans-Light': require('../../assets/fonts/OpenSans-Light.ttf'),
          'OpenSans-LightItalic': require('../../assets/fonts/OpenSans-LightItalic.ttf'),
          'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
          'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
          'OpenSans-SemiBoldItalic': require('../../assets/fonts/OpenSans-SemiBoldItalic.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

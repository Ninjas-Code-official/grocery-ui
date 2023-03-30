import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { StoreContextProvider, CartContextProvider, UserContextProvider, AddressContextProvider } from './app/contexts';

import useCachedResources from './app/hooks/useCachedResources';
import useColorScheme from './app/hooks/useColorScheme';
import Navigation from './app/navigation';
import initAsync from './app/i18n';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    ;(async() => {
      await initAsync()
    })()
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <UserContextProvider>
        <StoreContextProvider>
          <CartContextProvider>
            <AddressContextProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            </AddressContextProvider>
          </CartContextProvider>
        </StoreContextProvider>
        </UserContextProvider>
        <FlashMessage position="center"/>
      </SafeAreaProvider>
    );
  }
}

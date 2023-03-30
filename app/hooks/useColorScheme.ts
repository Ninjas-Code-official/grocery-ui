import { useEffect, useRef, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme(delay = 250): NonNullable<ColorSchemeName> {
  
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  let timeout = useRef<NodeJS.Timeout | null>(null).current;

  useEffect(()=> {
    Appearance.addChangeListener(onColorSchemeChange);

    return () => {
      resetCurrentTimeout();
      Appearance.removeChangeListener(onColorSchemeChange);
    };
  },[])

  function onColorSchemeChange(preferences: Appearance.AppearancePreferences) {
    resetCurrentTimeout();

    timeout = setTimeout(() => {
      setColorScheme(preferences.colorScheme);
    }, delay);
  }

  function resetCurrentTimeout() {
    if (timeout) {
      clearTimeout(timeout);
    }
  }

  return colorScheme as NonNullable<ColorSchemeName>;
}

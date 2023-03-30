import * as React from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  ScrollView as DefaultScrollView,
  SectionList as DefaultSectionList,
  ImageBackground as DefaultImageBackground,
  TouchableOpacity as DefaultTouchableOpacity,
  TouchableWithoutFeedback as DefaultTouchableWithoutFeedback,
  Image as DefaultImage,
  FlatList as DefaultFlatList,
  Switch as DefaultSwitch,
} from 'react-native';
import { OutlinedTextField as DefaultOutLineTextField } from "react-native-material-textfield";
import {
  AntDesign as DefaultAntDesign,
  MaterialIcons as DefaultMaterialIcons,
  FontAwesome as DefaultFontAwesome,
  Feather as DefaultFeather,
  Entypo as DefaultEntypo
} from '@expo/vector-icons';

import { Colors, moderateScale } from '../constants';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type IconProps = {
  name?: string
  size?: number,
  color?: string
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type TextFieldProps = ThemeProps & DefaultOutLineTextField['props'];
export type AntDesignProps = ThemeProps & IconProps;
export type MaterialIconsProps = ThemeProps & IconProps;
export type EntypoProps = ThemeProps & IconProps;
export type FontAwesomeProps = ThemeProps & IconProps;
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];
export type SectionListProps = ThemeProps & DefaultSectionList['props'];
export type ImageBackgroundProps = ThemeProps & DefaultImageBackground['props'];
export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacity['props'];
export type TouchableWithoutFeedbackProps = ThemeProps & DefaultTouchableWithoutFeedback['props'];
export type ImageProps = ThemeProps & DefaultImage['props'];
export type FlatListProps = ThemeProps & DefaultFlatList['props'];
export type SwitchProps = ThemeProps & DefaultSwitch['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const shadowColor = useThemeColor({ light: darkColor, dark: lightColor }, 'shadow');
  const borderColor = useThemeColor({ light: darkColor, dark: lightColor }, 'border');

  return <DefaultView style={[{ backgroundColor, shadowColor, borderColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'inputBackground');
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultTextInput style={[{ backgroundColor, color }, style]} {...otherProps} />
}

export function OutlinedTextField(props: TextFieldProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultOutLineTextField tintColor={color} placeholderTextColor={color} baseColor={color} style={[{ backgroundColor, color }, style]} {...otherProps} />
}

export function AntDesign(props: AntDesignProps) {
  const { name, size, lightColor, darkColor } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');

  return (<DefaultAntDesign name={name} color={color} size={moderateScale(size || 20)} />)
}

export function Entypo(props: EntypoProps) {
  const { name, size, lightColor, darkColor } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');

  return (<DefaultEntypo name={name} color={color} size={moderateScale(size || 20)} />)
}


export function MaterialIcons(props: MaterialIconsProps) {
  const { name, size, lightColor, darkColor } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');

  return (<DefaultMaterialIcons name={name} color={color} size={moderateScale(size || 20)} />)
}
export function FontAwesome(props: FontAwesomeProps) {
  const { name, size, lightColor, darkColor } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');

  return (<DefaultFontAwesome name={name} color={color} size={moderateScale(size || 20)} />)
}

export function FeatherIcon(props: FontAwesomeProps) {
  const { name, size, lightColor, darkColor } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');

  return (<DefaultFeather name={name} color={color} size={moderateScale(size || 20)} />)
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (<DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />)
}

export function SectionList(props: SectionListProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (<DefaultSectionList style={[{ backgroundColor }, style]} {...otherProps} />)
}

export function ImageBackground(props: ImageBackgroundProps) {
  const { style, ...otherProps } = props;

  return (<DefaultImageBackground style={style} {...otherProps} />)
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const shadowColor = useThemeColor({ light: darkColor, dark: lightColor }, 'shadow');

  return (<DefaultTouchableOpacity style={[{ backgroundColor, shadowColor }, style]} {...otherProps} />)
}

export function TouchableWithoutFeedback(props: TouchableWithoutFeedbackProps) {
  const { style, ...otherProps } = props;

  return (<DefaultTouchableWithoutFeedback style={style} {...otherProps} />)
}

export function Image(props: ImageProps) {
  const { style, ...otherProps } = props;

  return (<DefaultImage style={style} {...otherProps} />)
}

export function FlatList(props: FlatListProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (<DefaultFlatList style={[{ backgroundColor }, style]} {...otherProps} />)
}

export function Switch(props: SwitchProps) {
  const { ...otherProps } = props;

  return (<DefaultSwitch
    /*for some reason when following values are set here it doesn't function properly */
    // trackColor={{ false: "#767577", true: "#81b0ff" }}
    // thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
    // ios_backgroundColor="#3e3e3e"
    {...otherProps} />)
}

import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome, MaterialIcons, Text, useThemeColor, View } from '../components/Themed';
import { Colors, moderateScale } from '../constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {TopTabNavigatorParamList} from '../../types'
import {CurrentVouchers, PastVouchers} from '../screens/Vouchers'

const Tab = createMaterialTopTabNavigator<TopTabNavigatorParamList>();

function TabNavigator() {
  const background = useThemeColor({}, 'background');
  const color = useThemeColor({}, 'text');
    return (
      <Tab.Navigator
        initialRouteName="Current"
        tabBarOptions={{
          activeTintColor: Colors.light.primary,
          inactiveTintColor:Colors.dark.primary,
          labelStyle: [styles.labelText, {color}],
          style: [styles.tabContainer, {backgroundColor:background}],
          indicatorStyle: styles.indicatorContainer,
        
        }}
        backBehavior="none"
      >
        <Tab.Screen
          name="Current"
          component={CurrentVouchers}
          options={{ tabBarLabel: 'Current' }}
        />
        <Tab.Screen
          name="Past"
          component={PastVouchers}
          options={{ tabBarLabel: 'Past' }}
        />
      </Tab.Navigator>
    );
  }

  export default TabNavigator;

  const styles = StyleSheet.create({
    tabContainer: {
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        padding:moderateScale(5)
    },
    labelText:{
        fontSize: moderateScale(12), 
        fontFamily:'OpenSans-Bold',
    },
    indicatorContainer:{
        backgroundColor:Colors.light.primary, 
        alignSelf:'center'}
})
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '../../types';
import DrawerNavigator from './DrawerNavigator';
import CheckEmail from "../screens/CheckEmail";
import SignIn from "../screens/SignIn";
import SignUp from '../screens/SignUp';

const AuthStack = createStackNavigator<AuthStackParamList>()

export default function AuthStackNavigator() {
    return (
        <AuthStack.Navigator headerMode='screen'>
          
            <AuthStack.Screen
                name='CheckEmail'
                component={CheckEmail}
                options={{ headerShown: false }} />

                <AuthStack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false }} />

        <AuthStack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false }} />

        </AuthStack.Navigator>
    )
}

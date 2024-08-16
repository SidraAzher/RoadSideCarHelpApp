import React from 'react';
import ForgotPassword from '../screens/auth/ForgotPassword';
import { Login } from '../screens';
import SignUp from '../screens/auth/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { headerLeftButton, headerTitleStyle } from '../components/navStyles';

export const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator >
            <Stack.Group
                screenOptions={({ navigation }) => ({
                    headerLeft: () => headerLeftButton({ navigation }),
                    headerTitleStyle: headerTitleStyle,
                    headerShadowVisible: false
                })}
            >
                <Stack.Screen
                    name='Login'
                    component={Login}

                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        title: 'Create Account',
                    }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ title: "" }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}
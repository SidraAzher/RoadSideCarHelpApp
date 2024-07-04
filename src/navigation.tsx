import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from './screens';
import SignUp from './screens/auth/SignUp';


const Stack = createNativeStackNavigator();

function Navigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigations
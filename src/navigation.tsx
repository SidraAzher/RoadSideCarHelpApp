import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from './screens';


const Stack = createNativeStackNavigator();

function Navigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigations
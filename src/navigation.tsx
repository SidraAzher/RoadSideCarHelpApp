import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from './screens';
import SignUp from './screens/auth/SignUp';
import ForgotPassword from './screens/auth/ForgotPassword';
import { Image } from 'react-native';
import Images from './themes/images';
import { Colors } from './themes/colors';


const Stack = createNativeStackNavigator();

function Navigations() {
    const headerLeftButton = () => {
        return (
            <Image source={Images.IcLeftArrow} />
        )
    }
    let headerTitleStyle = {
        fontSize: 20,
        fontFamily: 'SofiaProSemiBold',
        color: Colors.DarkGrey,
    }
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
                    options={{
                        headerLeft: () => headerLeftButton(),
                        title: 'Create Account',
                        headerTitleStyle: headerTitleStyle
                    }}

                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                        headerLeft: () => headerLeftButton(),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigations
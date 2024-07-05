import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens';
import SignUp from './screens/auth/SignUp';
import ForgotPassword from './screens/auth/ForgotPassword';
import { Image, TouchableOpacity } from 'react-native';
import Images from './themes/images';
import { Colors } from './themes/colors';


const Stack = createNativeStackNavigator();
function Navigations() {

    const headerLeftButton = ({ navigation }) => {
        return (
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image source={Images.IcLeftArrow} />
            </TouchableOpacity>
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
                    options={{
                        title: '',
                        headerShadowVisible: false
                    }}
                />
                <Stack.Group
                    screenOptions={({ navigation }) => ({
                        headerLeft: () => headerLeftButton({ navigation }),
                        headerTitleStyle: headerTitleStyle,
                        headerShadowVisible: false
                    })}
                >
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
        </NavigationContainer>
    )

}

export default Navigations
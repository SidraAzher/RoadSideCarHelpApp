import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Login } from './screens';
import SignUp from './screens/auth/SignUp';
import ForgotPassword from './screens/auth/ForgotPassword';
import { Image, TouchableOpacity } from 'react-native';
import Images from './themes/images';
import { Colors } from './themes/colors';
import { DrawerContent } from './navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
const MyDrawer = ({ navigation }) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            {/* <Drawer.Screen name="Login" component={Login}
                options={{
                    title: 'Login',
                    headerLeft: () => headerLeftButton({ navigation }),
                    headerTitleStyle: headerTitleStyle,
                }}
            /> */}
            <Drawer.Screen name="Home" component={Home} options={{
                title: 'Home',
                headerTitleStyle: headerTitleStyle,
            }} />

            <Drawer.Screen name="SignUp" component={SignUp} options={{
                title: 'Create Account',
                headerLeft: () => headerLeftButton({ navigation }),
                headerTitleStyle: headerTitleStyle,

            }} />
        </Drawer.Navigator>
    );
}

function Navigations() {
    return (
        <NavigationContainer>
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
                        name='Home'
                        component={MyDrawer}
                        options={{ headerShown: false }}
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
        </NavigationContainer>
    )

}
export default Navigations
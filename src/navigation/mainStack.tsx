import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { headerLeftButton, headerTitleStyle } from '../components/navStyles';
import { MyDrawer } from './drawerStack';
import EditProfile from '../screens/main/EditProfile';
import { CommonText } from '../components';

export const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Group
                screenOptions={({ navigation }) => ({
                    headerLeft: () => headerLeftButton({ navigation }),
                    headerTitleStyle: headerTitleStyle,
                    headerShadowVisible: false,
                })}>
                <Stack.Screen
                    name="MyDrawer"
                    component={MyDrawer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerRight: () => (
                            <CommonText color="blue" variant="h5">
                                Save
                            </CommonText>
                        ),
                    }}
                // options={{ headerShown: false }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

import React from 'react';
import { Home } from '../screens';
import { headerTitleStyle } from '../components/navStyles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './drawer';

export const MyDrawer = ({ navigation }) => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} options={{
                title: 'Home',
                headerTitleStyle: headerTitleStyle,
            }} />
        </Drawer.Navigator>
    );
}

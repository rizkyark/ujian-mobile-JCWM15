import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { useNavigation } from '@react-navigation/native';
import home from "../screen/home1";
import account from "../screen/account";

import tabNavigation from "./tabNavigation";

const DrawerNavigation = ({navigation}) => {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={tabNavigation} />
            <Drawer.Screen name="Account" component={account} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
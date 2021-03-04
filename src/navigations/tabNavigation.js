import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import home from '../screen/home1'
import data from '../screen/data'



const DMNavigation = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={home} />
            <Tab.Screen name="data" component={data} />
        </Tab.Navigator>
    );
};

export default DMNavigation;
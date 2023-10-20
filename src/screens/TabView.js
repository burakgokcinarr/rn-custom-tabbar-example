import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Custom tabbar View
import TabBar from '../components/TabBar'; 

import { Home, Settings, Notes, Profile } from '../screens/tabs'

const Tab   = createBottomTabNavigator();

export default function TabView() {
    return (
        <Tab.Navigator initialRouteName={"home"} tabBar={props => <TabBar {...props}/>} >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Notes" component={Notes} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
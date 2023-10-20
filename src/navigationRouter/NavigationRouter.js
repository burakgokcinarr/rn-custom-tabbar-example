import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabView from '../screens/TabView';

const Stack = createNativeStackNavigator();

export default function NavigationRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeTabs"} screenOptions={{ headerShown:false }}>
                <Stack.Screen name="HomeTabs" component={TabView}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BeforeAuth from './BeforeAuth';
import AfterAuth from './AfterAuth';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='BeforeAuth' screenOptions={{headerShown: false}}>
            <Stack.Screen name="BeforeAuth" component={BeforeAuth} />
            <Stack.Screen name="AfterAuth" component={AfterAuth} />
        </Stack.Navigator>
    )
}

export default Routes
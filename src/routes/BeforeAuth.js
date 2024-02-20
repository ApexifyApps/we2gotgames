import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/Before/LandingPage';
import Login from '../screens/Before/Login';
import Signup from '../screens/Before/Signup';
import UploadPicture from '../screens/Before/UploadPicture';

const Stack = createStackNavigator();

const BeforeAuth = () => {
    return (
        <Stack.Navigator initialRouteName='LandingPage' screenOptions={{headerShown: false}}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="UploadPicture" component={UploadPicture} />
        </Stack.Navigator>
    )
}

export default BeforeAuth
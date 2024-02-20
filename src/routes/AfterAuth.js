import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/After/Home';
import Video from '../screens/After/Video';
import News from '../screens/After/News';
import Shop from '../screens/After/Shop';
import Item from '../screens/After/Item';
import Payment from '../screens/After/Payment';
import Colors from '../utils/Colors';
import Profile from '../screens/After/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AfterAuth = () => {
  return (
    <Stack.Navigator initialRouteName='MyTabs' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Tab.Screen name="Item" component={Item} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Profile" component={Profile} />

      {/* <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="UploadPicture" component={UploadPicture} /> */}
    </Stack.Navigator>
  )
}

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: Colors.Theme, height: 60, } }}>
      <Tab.Screen name="Home" component={Home} options={{

        tabBarShowLabel: false,

        tabBarIcon: (() => {
          return (
            <View>
              <Image source={require('../assets/images/home.png')} />
            </View>
          )
        })
      }} />
      <Tab.Screen name="Video" component={Video} options={{

        tabBarShowLabel: false,

        tabBarIcon: (() => {
          return (
            <View>
              <Image source={require('../assets/images/s.png')} />
            </View>
          )
        })
      }} />

      <Tab.Screen name="Newss" component={News} options={{

        tabBarShowLabel: false,

        tabBarIcon: (() => {
          return (
            <View style={{ height: 60, width: 60, backgroundColor: '#A92D32', alignItems: 'center', justifyContent: 'center', borderRadius: 200, position: 'absolute', zIndex: 10, bottom: 30 }}>
              <Image source={require('../assets/images/Plus.png')} />
            </View>
          )
        })
      }} />

      <Tab.Screen name="Shop" component={Shop} options={{

        tabBarShowLabel: false,

        tabBarIcon: (() => {
          return (
            <View>
              <Image source={require('../assets/images/cart.png')} />
            </View>
          )
        })
      }} />
      <Tab.Screen name="Profiles" component={Profile} options={{

        tabBarShowLabel: false,

        tabBarIcon: (() => {
          return (
            <View>
              <Image source={require('../assets/images/setting.png')} />
            </View>
          )
        })
      }} />


      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default AfterAuth
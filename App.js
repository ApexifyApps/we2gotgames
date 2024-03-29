import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>

      <Routes/>
      </SafeAreaView>
    </NavigationContainer>

  )
}

export default App
import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import Logo from '../../utils/Logo'
import AuthButton from '../../components/AuthButton'
import Colors from '../../utils/Colors'
const LandingPage = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1 }}>

      <View style={{ alignSelf: 'center', marginTop: 30, marginBottom:20 }}>
        <Logo />
      </View>

      <AuthButton txt={'Sign Up With Facebook'} path={require('../../assets/images/Facebook.png')}/>

      <AuthButton txt={'Sign Up With Google'} path={require('../../assets/images/Google.png')}/>

      <AuthButton press={()=>navigation.navigate('Login')} txt={'Sign Up With Email'} path={require('../../assets/images/gmail.png')}/>

    </ImageBackground>
  )
}

export default LandingPage
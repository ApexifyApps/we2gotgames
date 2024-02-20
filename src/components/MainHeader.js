import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

const MainHeader = ({ name,pfpShown, navigation }) => {
  return (
    <Animatable.View animation="slideInDown" style={{ width: wp('90%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'white' }}>{name}</Text>

      {
        pfpShown === "no" ?

        null:
      <TouchableOpacity >

      <Image source={require('../assets/images/pfp.png')} />
      </TouchableOpacity>

      }
    </Animatable.View>
  )
}

export default MainHeader
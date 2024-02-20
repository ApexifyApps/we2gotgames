import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';


const Payment = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

      <View style={{  flex: 0.6 }}>

        <CreditCardInput style={{ color: 'white' }} placeHolderColor={'white'} />

        <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{ height: 60, width: wp('90%'), alignSelf: 'center', borderRadius: 200, backgroundColor: Colors.Theme, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ color: Colors.WHITE, fontSize: hp('2.5%'), fontWeight: 'bold', alignSelf: 'center', }}>Pay</Text>
        </TouchableOpacity>

      </View>


    </ImageBackground>
  )
}

export default Payment
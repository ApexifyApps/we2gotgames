import { View, Text, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../../utils/Colors';
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Zocial from 'react-native-vector-icons/Zocial'
import * as Animatable from 'react-native-animatable';

const Shop = ({navigation}) => {
  const Stack = [
    { id: "1", card: "hello", Uploaded: require('../../assets/images/Game1.png') },
    { id: "2", card: "s", Uploaded: require('../../assets/images/Game12.png') },
    { id: "3", card: "3", Uploaded: require('../../assets/images/Game1.png') },
    { id: "4", card: "4", Uploaded: require('../../assets/images/Game12.png') },
    { id: "5", card: "5", Uploaded: require('../../assets/images/Game1.png') },
    { id: "6", card: "5", Uploaded: require('../../assets/images/Game1.png') },
    { id: "7", card: "5", Uploaded: require('../../assets/images/Game1.png') },

  ]

  return (
    <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1, paddingTop: 20, paddingBottom: 0, }}>
      <MainHeader name={"Shop"} />

      <FlatList

        data={Stack}
        contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', width: wp('90%'), alignSelf: 'center' }}
        renderItem={() => {
          return (
            <Animatable.View style={{ width: wp('40%'), backgroundColor: Colors.WHITE, marginTop: 10, alignSelf: 'center', marginLeft: 10, borderRadius: 10, padding: 10 }}>
              <Octicons name={'heart'} size={25} color={Colors.BLACK} style={{ alignSelf: 'flex-end' }} />
              <Image source={require('../../assets/images/shirt.png')} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View>
                <Text style={{ fontSize: hp('2.5%') }}>T-Shirt</Text>
                  <Text style={{color:'black'}}>9.99$</Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('Item')} style={{ height: 30, width: 30, borderRadius: 200, backgroundColor: Colors.Theme, alignItems: 'center', justifyContent: 'center' }}>
                  <Octicons name={'plus'} color={Colors.WHITE} />
                </TouchableOpacity>
              </View>
            </Animatable.View>
          )
        }}
      />



    </ImageBackground>
  )
}

export default Shop
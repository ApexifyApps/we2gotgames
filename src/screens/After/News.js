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


const News = () => {
  const Stack = [
    { id: "1", card: "hello", Uploaded: require('../../assets/images/Game1.png') },
    { id: "2", card: "s", Uploaded: require('../../assets/images/Game12.png') },
    { id: "3", card: "3", Uploaded: require('../../assets/images/Game1.png') },
    { id: "4", card: "4", Uploaded: require('../../assets/images/Game12.png') },
    { id: "5", card: "5", Uploaded: require('../../assets/images/Game1.png') },

  ]

  return (
    <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1, paddingTop: 20, paddingBottom: 0 }}>
      <MainHeader name={"News"} />

      <FlatList
        data={Stack}
        renderItem={({ item }) => {
          return (
            <Animatable.View  animation={'zoomInUp'} style={{ width: wp('100%'), backgroundColor: Colors.WHITE, marginTop: 20, padding: 20 }}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  {/* <Image source={require('../../assets/images/pfp.png')} /> */}

                  <View>
                    <Text style={{ fontWeight: 'bold', color: Colors.BLACK, fontSize: hp('2.5%'), marginLeft: 10 }}>John David</Text>
                    <Text style={{ marginLeft: 10, fontSize: hp('1.5') }}>14 March, 2022, 5 AM</Text>

                  </View>
                </View>

              </View>


              <Image source={item.Uploaded} style={{ height: 100, width: wp('90%'), marginTop: 10, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }} />


              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum. /n

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </Animatable.View>
          )
        }}
      />
    </ImageBackground>
  )
}

export default News
import { View, Text, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../../utils/Colors';
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Zocial from 'react-native-vector-icons/Zocial'
const Video = () => {
    const Stack = [
        { id: "1", card: "hello", Uploaded: require('../../assets/images/Game1.png') },
        { id: "2", card: "s", Uploaded: require('../../assets/images/Game12.png') },
        { id: "3", card: "3", Uploaded: require('../../assets/images/Game1.png') },
        { id: "4", card: "4", Uploaded: require('../../assets/images/Game12.png') },
        { id: "5", card: "5", Uploaded: require('../../assets/images/Game1.png') },

    ]

    return (
        <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1, padding: 20, paddingBottom: 0 }}>
            <MainHeader name={"Video"} />

            <FlatList
                data={Stack}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: wp('90%'), backgroundColor: Colors.WHITE, marginTop: 20, borderRadius: 10, padding: 20 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../../assets/images/pfp.png')} />

                                    <View>
                                        <Text style={{ fontWeight: 'bold', color: Colors.BLACK, fontSize: hp('2.5%'), marginLeft: 10 }}>John David</Text>
                                        <Text style={{ marginLeft: 10, fontSize: hp('1.5') }}>14 March, 2022, 5 AM</Text>

                                    </View>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Octicons name={'heart'} size={25} color={Colors.BLACK} />
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: hp('1.5%') }}>1.7k Likes</Text>
                                </View>
                            </View>


                            <ImageBackground source={item.Uploaded} style={{ height: 200, width: wp('80%'), marginTop: 10, borderRadius: 10, alignItems:'center', justifyContent:'center',overflow:'hidden'  }} >

                                <View style={{  height:60, width:60, backgroundColor:Colors.Theme, borderRadius:200, alignItems:'center', justifyContent:'center' }}>
                                    <Zocial name={'googleplay'} size={15} color={Colors.WHITE} />
                                </View>
                            </ImageBackground>


                            <TouchableOpacity style={{ width: wp('80%'), height: 60, alignSelf: 'center', justifyContent: 'center', backgroundColor: Colors.Theme, borderRadius: 200, marginTop: 20, alignItems: 'center' }}>

                                <Text style={{ color: Colors.WHITE, fontWeight: 'bold', fontSize: hp('2.5%') }}>Subscribe</Text>

                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </ImageBackground>
    )
}

export default Video
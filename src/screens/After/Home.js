import { View, Text, ImageBackground, FlatList, Image } from 'react-native'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../../utils/Colors';
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable';

const Home = () => {

    const Stack = [
        { id: "1", card: "hello" },
        { id: "2", card: "s" },
        { id: "3", card: "3" },
        { id: "4", card: "4" },
        { id: "5", card: "5" },

    ]



    const ReactionItems = [
        {
          id: 0, emoji: '😇', title: 'like'
        },
        {
          id: 1, emoji: '🥰', title: 'love'
        },
        {
          id: 2, emoji: '🤗', title: 'care'
        },
        {
          id: 3, emoji: '😘', title: 'kiss'
        },
        {
          id: 4, emoji: '😂', title: 'laugh'
        },
        {
          id: 5, emoji: '😎', title: 'cool'
        },
      ];
      

    return (
        <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1, padding: 20, paddingBottom: 0 }}>
            <MainHeader name={"Hello, John"} />

            <Animatable.View animation={"bounce"} style={{ height: 50, width: wp('90%'), backgroundColor: Colors.WHITE, borderRadius: 200, marginTop: 20, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: Colors.BLACK, fontWeight: 'bold' }}>For you</Text>
                <Feather name={"chevrons-down"} size={25} color={Colors.BLACK} />
                <Text style={{ color: Colors.BLACK, fontWeight: 'bold' }}>Following</Text>
            </Animatable.View>


            <FlatList
                data={Stack}
                renderItem={(item) => {
                    return (
                        <View style={{ width: wp('90%'), backgroundColor: Colors.WHITE, marginTop: 20, borderRadius: 10, padding: 20 }}>

                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../assets/images/pfp.png')} />

                                <View>
                                    <Text style={{ fontWeight: 'bold', color: Colors.BLACK, fontSize: hp('2.5%'), marginLeft: 10 }}>John David</Text>
                                    <Text style={{ marginLeft: 10, fontSize: hp('1.5') }}>14 March, 2022, 5 AM</Text>

                                </View>
                            </View>

                            <Image source={require('../../assets/images/Upload.png')} style={{ height: 200, width: wp('80%'), marginTop: 10, borderRadius: 10 }} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                                <View style={{ flexDirection: 'row' , marginTop:20, alignItems:'center'}}>
                                    <Octicons name={'thumbsup'} color={Colors.BLACK} size={20} />
                                    <Text style={{fontSize:hp('2.5%'), color:'black', marginLeft:10}}>Like</Text>
                                </View>


                                <View style={{ flexDirection: 'row' , marginTop:20, alignItems:'center'}}>
                                    <EvilIcons name={'comment'} color={Colors.BLACK} size={25} />
                                    <Text style={{fontSize:hp('2.5%'), color:'black', marginLeft:10}}>Comment</Text>
                                </View>


                                <View style={{ flexDirection: 'row' , marginTop:20, alignItems:'center'}}>
                                    <MaterialCommunityIcons name={'share-outline'} color={Colors.BLACK} size={25} />
                                    <Text style={{fontSize:hp('2.5%'), color:'black', marginLeft:10}}>Share</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}

            />

        </ImageBackground>
    )
}

export default Home
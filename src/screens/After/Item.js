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
import Ionicons from 'react-native-vector-icons/Ionicons'


const Item = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1, padding: 20, paddingBottom: 0, }}>
            <MainHeader name={"Cart"} />


                <TouchableOpacity onPress={()=> navigation.goBack()} style={{height:30, width:30, backgroundColor:Colors.Theme, borderRadius:200, alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name={'chevron-back-outline'} color={'white'} size={25}/>
                </TouchableOpacity>
            

            <Animatable.View style={{ width: wp('90%'), backgroundColor: Colors.WHITE, marginTop: 10, alignSelf: 'center', marginLeft: 10, borderRadius: 10, padding: 10, marginTop:20 }}>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ fontSize: hp('3.5%') }}>T-Shirt</Text>
                    <Text style={{ color: 'black', alignSelf: 'center', fontSize: hp('2.5%') }}>9.99$</Text>
                </View>
                <Image source={require('../../assets/images/shirt.png')} style={{ alignSelf: 'center', height: 250, width: 250, marginTop: 20 }} resizeMode={'cover'} />



                <View>
                    <Text style={{ fontSize: hp('3%'), marginTop:20, color:Colors.BLACK }}>Select Size</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('45%') , marginTop:10}}>

                        <View style={{ height: 30, width: 30, borderRadius: 5, backgroundColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>S</Text>
                        </View>

                        <View style={{ height: 30, width: 30, borderRadius: 5, backgroundColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>M</Text>
                        </View>

                        <View style={{ height: 30, width: 30, borderRadius: 5, backgroundColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>L</Text>
                        </View>

                        <View style={{ height: 30, width: 30, borderRadius: 5, backgroundColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>XL</Text>
                        </View>

                        <View style={{ height: 30, width: 30, borderRadius: 5, backgroundColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>XLL</Text>
                        </View>
                    </View>
                </View>

                <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:30}}>
                    <Text style={{fontSize:hp('3%'), color:'black', fontWeight:'bold'}}>9.99$</Text>

                    <TouchableOpacity onPress={()=> navigation.navigate('Payment')} style={{height:40, width:wp('40%'), backgroundColor:Colors.Theme , borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:Colors.WHITE, fontWeight:'bold'}}>Checkout</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>





        </ImageBackground>
    )
}

export default Item
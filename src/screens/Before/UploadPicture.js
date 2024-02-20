import { View, Text, ImageBackground, Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../../utils/Logo'
import AuthButton from '../../components/AuthButton'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TxtInput from '../../components/TxtInput';
import Colors from '../../utils/Colors';
import MainBtn from '../../components/MainBtn';
import AntDesign from  'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const UploadPicture = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1, padding: 20 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ alignSelf: 'center', marginTop: 30, marginBottom: 20 }}>
                    <Logo />
                </View>




                <View style={{ height: 100, width: 100, backgroundColor: 'gray', borderRadius: 200, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>

                    <Text style={{ color: Colors.WHITE, fontSize: hp('2.5%') }}>TK</Text>
                    <View style={{ height: 30, width: 30, borderRadius: 200, backgroundColor: Colors.Theme, position: 'absolute', zIndex: 10, right: -2, bottom: 0 , alignItems:'center' , justifyContent:'center'}}>
                            <AntDesign name={'edit'} size={15} color={Colors.WHITE}/>
                    </View>
                </View>

                <Text style={{ color: Colors.WHITE, fontWeight:'bold', fontSize: hp('3%'), alignSelf:'center', marginTop:10 }}>upload a profile photo</Text>


                <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{height:60, width:wp('70%'), alignSelf:'center', borderRadius:200, backgroundColor:Colors.Theme, flexDirection:'row', paddingHorizontal:20, justifyContent:'space-between', alignItems:'center', marginTop:20}}>
                    <EvilIcons name={"image"} size={35} color={Colors.WHITE}/>
                    <Text style={{color:Colors.WHITE, fontSize:hp('2%'), fontWeight:'bold'}}>Camera Roll</Text>
                    <View/>
                </TouchableOpacity>



            </ScrollView>

        </ImageBackground>
    )
}

export default UploadPicture
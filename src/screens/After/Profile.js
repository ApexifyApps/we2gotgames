import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';
import MainHeader from '../../components/MainHeader'

const Profile = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/images/Bg.png')} style={{ flex: 1, padding: 20 }}>



            <MainHeader name={"Profile"} pfpShown={"no"} />

            <View >

                <Image source={require('../../assets/images/cover.png')} style={{ width: wp('90%'), borderRadius: 10, height: 100 }} />
                <Image source={require('../../assets/images/mainPfp.png')} style={{ position: 'absolute', bottom: -70, alignSelf: 'center', height: 100, width: 100 }} />
            </View>

            <TouchableOpacity style={{ height: 60, width: wp('90%'), alignSelf: 'center', borderRadius: 10, backgroundColor: Colors.Theme, justifyContent: 'center', marginTop: 10, borderWidth: 1, borderRadius: 10, borderColor: Colors.WHITE, paddingHorizontal: 10, marginTop:hp('10%') }}>

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), fontWeight: 'bold', }}>User@gmail.com</Text>

            </TouchableOpacity>

            <TouchableOpacity style={{ height: 60, width: wp('90%'), alignSelf: 'center', borderRadius: 10, backgroundColor: Colors.Theme, justifyContent: 'center', marginTop: 10, borderWidth: 1, borderRadius: 10, borderColor: Colors.WHITE, paddingHorizontal: 10 }}>

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), fontWeight: 'bold', }}>Setting</Text>

            </TouchableOpacity>



            <TouchableOpacity style={{ height: 60, width: wp('90%'), alignSelf: 'center', borderRadius: 10, backgroundColor: Colors.Theme, justifyContent: 'center', marginTop: 10, borderWidth: 1, borderRadius: 10, borderColor: Colors.WHITE, paddingHorizontal: 10 }}>

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), fontWeight: 'bold', }}>Privacy</Text>

            </TouchableOpacity>



            <TouchableOpacity style={{ height: 60, width: wp('90%'), alignSelf: 'center', borderRadius: 10, backgroundColor: Colors.Theme, justifyContent: 'center', marginTop: 10, borderWidth: 1, borderRadius: 10, borderColor: Colors.WHITE, paddingHorizontal: 10 }}>

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), fontWeight: 'bold', }}>History</Text>

            </TouchableOpacity>



            <TouchableOpacity style={{ height: 60, width: wp('90%'), alignSelf: 'center', borderRadius: 10, backgroundColor: Colors.Theme, justifyContent: 'center', marginTop: 10, borderWidth: 1, borderRadius: 10, borderColor: Colors.WHITE, paddingHorizontal: 10 }}>

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), fontWeight: 'bold', }}>Privacy Policy & Terms Condition</Text>

            </TouchableOpacity>


            <TouchableOpacity onPress={()=> navigation.navigate('BeforeAuth')} style={{ height: 60, width: wp('90%'), alignSelf: 'center', borderRadius: 200, backgroundColor: Colors.Theme, justifyContent: 'center', alignItems: 'center', marginTop: 30,borderWidth: 1, borderRadius: 10, borderColor: Colors.WHITE, }}>

                <Text style={{ color: Colors.WHITE, fontSize: hp('2.5%'), fontWeight: 'bold', alignSelf: 'center', }}>Logout</Text>

            </TouchableOpacity>



        </ImageBackground>
    )
}

export default Profile
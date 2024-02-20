import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'
import Logo from '../../utils/Logo'
import AuthButton from '../../components/AuthButton'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TxtInput from '../../components/TxtInput';
import Colors from '../../utils/Colors';
import MainBtn from '../../components/MainBtn';
const Signup = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/images/Bg.png')}  style={{ flex: 1, paddingHorizontal: 20 }} >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ alignSelf: 'center', marginTop: 30, marginBottom: 20 }}>
                    <Logo />
                </View>

                <Text style={{ color: Colors.WHITE, fontWeight: 'bold', fontSize: hp('2.5%') }}>Sign up</Text>

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), marginTop: 20, marginBottom: 10 }}>Username</Text>
                <TxtInput holder={'Username'} />

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), marginTop: 20, marginBottom: 10 }}>Email</Text>
                <TxtInput holder={'Email'} />

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), marginTop: 20, marginBottom: 10 }}>Password</Text>
                <TxtInput holder={'password'} textEntry={true} password={"yes"} />

                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), marginTop: 20, marginBottom: 10 }}>Re-type password</Text>
                <TxtInput holder={'Re-type password'} textEntry={true} password={"yes"} />

                <MainBtn press={()=>navigation.navigate('UploadPicture')} txt={'Sign up'} />
                <Text style={{ color: Colors.WHITE, fontSize: hp('2%'), alignSelf: 'center', marginTop: 20, marginBottom:20 }}>Already have an account ? Login</Text>




            </ScrollView>

        </ImageBackground>
    )
}

export default Signup
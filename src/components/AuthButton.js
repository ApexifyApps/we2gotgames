import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../utils/Colors';

const AuthButton = (props) => {
  return (
    <TouchableOpacity onPress={props.press} style={{width:wp('90%'), height:60, alignSelf:'center', flexDirection:'row', paddingHorizontal:20, alignItems:'center', justifyContent:'flex-start', backgroundColor:Colors.WHITE, borderRadius:200, marginTop:20 }}>

       <Image source={props.path}/> 
      <Text  style={{marginLeft:20, color:Colors.BLACK, fontWeight:'bold', fontSize:hp('2%')}}>{props.txt}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton
import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../utils/Colors';

const MainBtn = (props) => {
  return (
    <TouchableOpacity onPress={props.press} style={{width:wp('90%'), alignSelf:'center', height:60, backgroundColor:Colors.Theme , borderRadius:200, alignItems:'center', justifyContent:'center', marginTop:10 }}>
            <Text style={{color:Colors.WHITE, fontSize:hp('2%')}}>{props.txt}</Text>
    </TouchableOpacity>
  )
}

export default MainBtn
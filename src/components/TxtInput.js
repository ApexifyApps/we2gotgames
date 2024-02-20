import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../utils/Colors';

const TxtInput = (props) => {
    return (
        <View>
            <TextInput
                placeholder={props.holder}
                placeholderTextColor={Colors.BLACK}
                style={{ width: wp('90%'), height: 60, backgroundColor: Colors.WHITE, borderRadius: 200 , paddingHorizontal:20, }}
                secureTextEntry={props.textEntry}
            />
        </View>
    )
}

export default TxtInput
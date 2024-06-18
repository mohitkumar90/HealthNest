
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { loginStyles } from '../utils/GlobalStylesSheet';
// import Logo from '../assests/icons/Logo.svg'
import {CountryPicker} from "react-native-country-codes-picker";

const Login = ({navigation}) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');

    const handleSendOTP = () => {
        if(mobileNumber.length > 9){
            navigation.navigate('Home')
        }
    };

    return (
        <View style={loginStyles.container}>
            <Image source={require('../assests/icons/Logo.png')} style={loginStyles.logo} />
            <Text style={loginStyles.welcomeText}>Welcome to HealthNest</Text>
           <Text style={loginStyles.placeholder}> {mobileNumber.length ? 'Enter Mobile Number' : ''}</Text>
           <View style={loginStyles.inputSection}>
           {countryCode ? 
           <TouchableOpacity style={loginStyles.flagSection} onPress={()=>setShow(true)}>
           <Text style={loginStyles.flagIcon}>{countryCode}</Text>  
           <Image source={require('../assests/icons/arrowDown.png')} style={loginStyles.arrowIcon} />
           </TouchableOpacity>
           :
           <TouchableOpacity style={loginStyles.flagSection} onPress={()=>setShow(true)}>
            <Text style={loginStyles.flagIcon}>🇮🇳</Text>
            <Image source={require('../assests/icons/arrowDown.png')} style={loginStyles.arrowIcon} />
           </TouchableOpacity>
           }
            <TextInput
                style={loginStyles.input}
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChangeText={(text) => {
                    if((mobileNumber.length < 10) || (text.length < mobileNumber.length))
                    setMobileNumber(text)
                }}
                keyboardType="numeric"
            />
             <Image source={require('../assests/icons/phone.png')} style={loginStyles.phoneLogo} />
           </View>
            <View style={loginStyles.subTitle}>
                <Text style={loginStyles.securityText}>
                    We never compromise on security!
                </Text>
                <Text style={loginStyles.helperText}>
                    Help us create a safe place by providing your mobile number to maintain authenticity.
                </Text>
            </View>
            <TouchableOpacity onPress={handleSendOTP} style={(mobileNumber.length > 9) ? loginStyles.sendOTPButton : loginStyles.sendOTPButtonEmpty}>
                <Text style={(mobileNumber.length > 9) ? loginStyles.sendOTPButtonText : loginStyles.sendOTPButtonTextEmpty} >
                    Send OTP
                </Text>
            </TouchableOpacity >
<CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
            console.log('item data',item)
          setCountryCode(item.flag);
          setShow(false);
        }}
      />
        </View>
    );
};


export default Login;



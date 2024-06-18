
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { loginStyles } from '../utils/GlobalStylesSheet';
import Logo from '../assests/icons/Logo.svg'


const Login = ({navigation}) => {
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSendOTP = () => {
        // TODO: Implement logic to send OTP
        console.log('Send OTP clicked');
    };

    return (
        <View style={loginStyles.container}>
            <Image source={require('../assests/icons/Logo.png')} style={loginStyles.logo} />
            <Text style={loginStyles.welcomeText}>Welcome to HealthNest</Text>
            <TextInput
                style={loginStyles.input}
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChangeText={(text) => setMobileNumber(text)}
                keyboardType="numeric"
            />
            <View style={loginStyles.subTitle}>
                <Text style={loginStyles.securityText}>
                    We never compromise on security!
                </Text>
                <Text style={loginStyles.helperText}>
                    Help us create a safe place by providing your mobile number to maintain authenticity.
                </Text>
            </View>
            <TouchableOpacity onPress={handleSendOTP} style={loginStyles.sendOTPButton}>
                <Text style={loginStyles.sendOTPButtonText} onPress={() => navigation.navigate('Home')}>
                    Send OTP
                </Text>
            </TouchableOpacity >

        </View>
    );
};


export default Login;



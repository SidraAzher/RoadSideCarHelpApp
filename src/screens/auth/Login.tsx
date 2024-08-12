import React, { useState } from "react";
import { View, StyleSheet, Button, Image, ScrollView } from "react-native";
import { CommonButton, CommonText, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";
import Images from "../../themes/images";
import { Colors } from "../../themes/colors";

const Login = () => {
    const navigation = useNavigation();
    return (
        < ScrollView contentContainerStyle={styles.main} >
            <Image source={Images.IcLogo} style={styles.logo} />
            <CommonText color={Colors.DarkGrey} variant="h1" mTop={67} style={{ letterSpacing: 0.56 }} >Hello There.</CommonText>
            <CommonText variant="h4" color={Colors.DarkGrey} mTop={11} style={{ letterSpacing: 0.56 }}>Login or sign up to continue.</CommonText>
            <Input placeholder="User Name" leftIcon={Images.IcProfile} mTop={25} />
            <Input placeholder="Password" leftIcon={Images.IcPassword} mTop={11} rightIcon={Images.IcOpenEye} />
            <CommonText onPress={() => navigation.navigate('ForgotPassword')} variant="h2" size={12} color={Colors.Blue} mTop={16} textAlign="right">Forgot Password?</CommonText>
            <CommonButton variant="primary" title="SIGN IN" mTop={51} onPress={() => navigation.navigate('Home')} />
            <View style={styles.txtContainer}>
                <CommonText variant="h6" >Don’t have an account?</CommonText>
                <CommonText variant="h2" size={12} color={Colors.Blue} onPress={() => navigation.navigate('SignUp')}> SIGN UP</CommonText>
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    txtContainer: {
        flexDirection: 'row',
        marginTop: 34,
        justifyContent: 'center'
    },
    logo: {
        width: 86,
        height: 46
    }
})
export default Login

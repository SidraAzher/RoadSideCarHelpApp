import React from "react";
import { View, StyleSheet } from "react-native";
import { CommonButton, CommonText, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";
import Images from "../../themes/images";
import { Colors } from "../../themes/colors";

const ForgotPassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <View style={styles.containerOne}>
                <CommonText variant="h1" color={Colors.DarkGrey} style={{ letterSpacing: 0.56 }}>Forgot Password?</CommonText>
                <CommonText variant="h4" color={Colors.DarkGrey} style={{ letterSpacing: 0.56 }} mTop={15}>Enter the email address {'\n'}associated with your account.</CommonText>
                <Input mTop={20} placeholder="Email Address" leftIcon={Images.IcSms} />
                <CommonButton mTop={16} title="SUBMIT" onPress={() => console.log('pressed')} />
            </View>
            <CommonText textAlign='center' mTop={10} variant="h4" color='rgba(69, 79, 99,0.8)' style={{ marginBottom: 30 }}>We will email you a link to reset your{'\n'} password.</CommonText>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerOne: {
        flex: 1,
        justifyContent: 'center'
    }

})
export default ForgotPassword

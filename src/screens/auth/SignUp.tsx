import React from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native";
import Images from "../../themes/images";
import { CommonButton, CommonText, Input } from "../../components";
import { Colors } from "../../themes/colors";
const SignUp = () => {
    return (
        <ScrollView contentContainerStyle={styles.main} automaticallyAdjustKeyboardInsets={true}>
            <View style={styles.imgContainer}>
                <Image source={Images.IcProfilePic} />
                <Image source={Images.IcAdd} style={styles.addImg} />
            </View>
            <Input leftIcon={Images.IcProfile} placeholder="Full Name" mTop={36} />
            <Input leftIcon={Images.IcSms} placeholder="Email" mTop={11} />
            <Input leftIcon={Images.IcPhoneNo} placeholder="Phone No" mTop={11} rightIcon={Images.IcDownArrow} />
            <Input leftIcon={Images.IcAddress} placeholder="Address" mTop={11} rightIcon={Images.IcDownArrow} />
            <View style={styles.inputContainer}>
                <Input style={styles.input} leftIcon={Images.IcAddress} placeholder="City" mTop={11} rightIcon={Images.IcDownArrow} />
                <Input style={styles.input} leftIcon={Images.IcAddress} placeholder="State" mTop={11} rightIcon={Images.IcDownArrow} />
            </View>
            <Input leftIcon={Images.IcAddress} placeholder="Zip Code" mTop={11} />
            <Input leftIcon={Images.IcCake} placeholder="Date of Birth" mTop={11} rightIcon={Images.IcDownArrow} />
            <Input leftIcon={Images.IcPassword} placeholder="Password" mTop={11} />
            <Input leftIcon={Images.IcConfirmPassword} placeholder="Confirm Password" mTop={11} />
            <View style={styles.txtContainer}>
                <CommonText variant="h6" >I agree to the </CommonText>
                <CommonText variant="h2" size={12} color={Colors.Blue} style={{ textDecorationLine: "underline" }}>Terms & Conditions</CommonText>
            </View>
            <CommonButton title="SIGN UP" onPress={() => console.log('pressed')} mTop={28} />
            <View style={[styles.txtContainer, { marginTop: 23, justifyContent: 'center', marginBottom: 53 }]}>
                <CommonText variant="h6" >Already have an account?</CommonText>
                <CommonText variant="h2" size={12} color={Colors.Blue} textDecorationLine="underline">SIGN IN</CommonText>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    addImg: {
        position: 'absolute',
        bottom: 15,
        right: 110
    },
    txtContainer: {
        flexDirection: 'row',
        marginTop: 43,
    },
    input: {
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row'
    }
})
export default SignUp
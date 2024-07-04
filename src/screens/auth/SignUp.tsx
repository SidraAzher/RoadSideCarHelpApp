import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Images from "../../themes/images";
import { Input } from "../../components";
const SignUp = () => {
    return (
        <ScrollView contentContainerStyle={styles.main}>
            <View style={styles.imgContainer}>
                <Image source={Images.IcProfilePic} />
                <Image source={Images.IcAdd} style={styles.addImg} />
            </View>
            <Input leftIcon={Images.IcProfile} placeholder="Full Name" />
            <Input leftIcon={Images.IcSms} placeholder="Email" mTop={11} />
            <Input leftIcon={Images.IcPhoneNo} placeholder="Phone No" mTop={11} />
            <Input leftIcon={Images.IcAddress} placeholder="Address" mTop={11} />
            <Input leftIcon={Images.IcAddress} placeholder="City" mTop={11} />
            <Input leftIcon={Images.IcAddress} placeholder="State" mTop={11} />
            <Input leftIcon={Images.IcAddress} placeholder="Zip Code" mTop={11} />
            <Input leftIcon={Images.IcCake} placeholder="Date of Birth" mTop={11} />
            <Input leftIcon={Images.IcPassword} placeholder="Password" mTop={11} />
            <Input leftIcon={Images.IcConfirmPassword} placeholder="Confirm Password" mTop={11} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    addImg: {
        position: 'absolute',
        bottom: 15,
        right: 125
    }
})
export default SignUp
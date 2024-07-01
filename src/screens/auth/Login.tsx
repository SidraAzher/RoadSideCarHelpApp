import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { CommonButton, CommonText, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";
import Images from "../../themes/images";

const Login = () => {
    const navigation = useNavigation();
    const [data, setData] = useState<string>('')
    const [error, showError] = useState<boolean>(false)

    console.log('data ==>>', data)

    const getData = (x: string) => {
        setData(x)
    }
    const CheckFields = () => {
        console.log('Buttonpresses')
        if (data == "") {
            showError(true)
        }

    }


    return (
        <View style={styles.main}>
            <CommonText variant="h1" size={100} color="pink" style={{ margin: 50 }}>Sidra</CommonText>
            <Input onChangeText={getData} multiline={true} placeholder="Email Address" leftIcon={Images.IcSms} rightIcon={Images.IcSms} onClickRightButton={() => console.log('pressed')} />
            {error == true && <CommonText variant="h1" color="red">Field is Empty</CommonText>}
            <Input onChangeText={getData} style={{ marginTop: 10 }} multiline={true} placeholder="Password" leftIcon={Images.IcSms} rightIcon={Images.IcSms} onClickRightButton={() => console.log('pressed')} />
            {error == true && <CommonText variant="h1" color="red">Field is Empty</CommonText>}

            <Button
                onPress={CheckFields}
                title="Submit" />
            <Button onPress={
                () => navigation.goBack()
            } title='navigate back to home' />

            <CommonButton variant="primary" title="Sign in" />

            <CommonButton icon={Images.IcPhone} bgColor="maroon" />

        </View>
    )

}
const styles = StyleSheet.create({
    main: {
        // marginTop: 100,
        flex: 1,
        backgroundColor: "skyblue"
    }
})
export default Login

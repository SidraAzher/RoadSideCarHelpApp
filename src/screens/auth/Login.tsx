import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { CommonText } from "../../components";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <CommonText color={'green'} size={30} />
            <Button onPress={
                () => navigation.goBack()
            } title='navigate back to home' />
        </View>
    )

}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "skyblue"
    }
})
export default Login

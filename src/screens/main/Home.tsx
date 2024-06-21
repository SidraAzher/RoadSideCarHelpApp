import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Button } from "react-native";

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.main}>
            <Button onPress={() => navigation.navigate('Login')} title='navigate to another page' />
        </View>
    )

}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "green"
    }
})
export default Home

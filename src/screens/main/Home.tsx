import React, { useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Images from "../../themes/images";
import { CommonButton } from "../../components";
import { getUsers } from "../../services/ApiCall";
const Home = () => {

    // const fetchUsers = async () => {
    //     try {
    //         const userData = await getUsers();
    //         console.log("userData", userData)

    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchUsers();
    // }, []);




    const CurrentLocation = ({ align, radius, justify }) => {
        return (
            <View style={{ backgroundColor: "rgba(166, 197, 34,0.3)", width: 82, height: 82, borderRadius: radius, alignItems: align, justifyContent: justify }}>
                <View style={{ backgroundColor: "rgba(166, 197, 34,0.5)", width: 61, height: 61, borderRadius: radius, alignItems: align, justifyContent: justify }}>
                    <View style={{ backgroundColor: "rgb(166, 197, 34)", width: 38, height: 38, borderRadius: radius, alignItems: align, justifyContent: justify }}>
                        <View style={{ backgroundColor: 'rgb(248 244 234)', width: 14, height: 14, borderRadius: radius }}></View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <ImageBackground style={styles.main} source={Images.IcMap}>
            <CurrentLocation align='center' justify='center' radius={50} />
            <CommonButton style={styles.icGps} icon={Images.IcGps} bgColor="white" onPress={() => console.log('presses')} />
        </ImageBackground>
    )

}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    icGps: {
        position: 'absolute',
        bottom: 75,
        right: 24,
    }
})
export default Home

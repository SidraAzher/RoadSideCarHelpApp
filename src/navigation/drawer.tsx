import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { CommonText } from "../components";
import Images from "../themes/images";
import { Colors } from "../themes/colors";

export const DrawerContent = ({ navigation }) => {
    const arry = [
        {
            title: 'Home',
            img: Images.IcHome
        },
        {
            title: 'Settings',
            img: Images.IcSettings
        },
        {
            title: 'Profile',
            img: Images.IcHuman
        },

    ]

    const renderItems = ({ item }) => (
        <View style={styles.items}>
            <Image source={item.img} />
            <CommonText variant="h5" color="white" style={{ marginLeft: 34 }}>{item.title}</CommonText>
        </View>
    )
    return (
        <View style={styles.main}>
            <View style={styles.profile}>
                <Image source={Images.IcProfileCircle} />
                <View style={styles.txtContainer}>
                    <CommonText variant="h2" size={14} color="white">Alexa Marston</CommonText>
                    <CommonText variant="h6" color={Colors.Blue} style={{ lineHeight: 12 }}>view or edit profile</CommonText>
                </View>
            </View>
            <FlatList data={arry} renderItem={renderItems} style={styles.flatlist} />
            <View style={{ marginTop: 21 }}>
                <CommonText variant="h4" color="white" onPress={() => navigation.navigate('Login')}>Log out</CommonText>
                <CommonText variant="h5" color={Colors.Grey} style={{ lineHeight: 55 }}>jonathan.marshall@outlook.com</CommonText>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "black",
        paddingVertical: 61,
        paddingHorizontal: 23,
    },
    profile: {
        flexDirection: 'row',
        paddingVertical: 33,
        alignItems: "center",
        borderBottomColor: "rgba(255, 255, 255,0.5)",
        borderWidth: 1
    },
    txtContainer: {
        marginLeft: 9
    },
    items: {
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 19,
        marginTop: 5
    },
    flatlist: {
        marginTop: 19,
        borderBottomColor: "rgba(255, 255, 255,0.5)",
        borderWidth: 1
    }


})
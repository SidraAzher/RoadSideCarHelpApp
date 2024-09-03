import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { CommonText } from '../components';
import Images from '../themes/images';
import { Colors } from '../themes/colors';
import { Context } from '../context';
import { logoutUser } from '../services/ApiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const DrawerContent = ({ navigation }) => {

    const loginContext = useContext(Context);
    const [userData, setUserData] = useState<any>({})
    const arry = [
        {
            title: 'Home',
            img: Images.IcHome,
            onPress: () => navigation.navigate('Home'),
        },
        {
            title: 'Settings',
            img: Images.IcSettings,
        },
        {
            title: 'Profile',
            img: Images.IcHuman,
        },
    ];

    const renderItems = ({ item }) => (
        <TouchableOpacity style={styles.items} onPress={item.onPress}>
            <Image source={item.img} />
            <CommonText variant="h5" color="white" style={{ marginLeft: 34 }}>
                {item.title}
            </CommonText>
        </TouchableOpacity>
    );


    const logout = async () => {
        try {
            let response = await logoutUser();
            if (response) {
                loginContext.setLogin(false);
            }
        } catch (error) {
            loginContext.setLogin(false)
        }

    }

    const getUserFromStorage = async () => {
        const user: any = await AsyncStorage.getItem('userData');
        setUserData(JSON.parse(user))

    }

    useEffect(() => {
        getUserFromStorage()
    }, [])





    return (
        <View style={styles.main}>
            <TouchableOpacity
                style={styles.profile}
                onPress={() => navigation.navigate('EditProfile')}>
                <Image source={Images.IcProfileCircle} />
                <View style={styles.txtContainer}>
                    <CommonText variant="h2" size={14} color="white">
                        View or edit profile
                        {/* {userData?.first_name + " " + userData?.last_name} */}
                    </CommonText>
                    {/* <CommonText variant="h6" color={Colors.Blue} style={{ lineHeight: 12 }}>
                        view or edit profile
                    </CommonText> */}
                </View>
            </TouchableOpacity>
            <FlatList data={arry} renderItem={renderItems} style={styles.flatlist} />
            <View style={{ marginTop: 21 }}>
                <CommonText
                    variant="h4"
                    color="white"
                    onPress={logout}>
                    Log out
                </CommonText>
                <CommonText variant="h5" color={Colors.Grey} style={{ lineHeight: 55 }}>
                    {userData.email}
                </CommonText>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 61,
        paddingHorizontal: 23,
    },
    profile: {
        flexDirection: 'row',
        paddingVertical: 33,
        alignItems: 'center',
        borderBottomColor: 'rgba(255, 255, 255,0.5)',
        borderWidth: 1,
    },
    txtContainer: {
        marginLeft: 9,
    },
    items: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 19,
        marginTop: 5,
    },
    flatlist: {
        marginTop: 19,
        borderBottomColor: 'rgba(255, 255, 255,0.5)',
        borderWidth: 1,
    },
});
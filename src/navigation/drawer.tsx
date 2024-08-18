import React, { useContext } from 'react';
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

export const DrawerContent = ({ navigation }) => {
    const loginContext = useContext(Context);
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
    return (
        <View style={styles.main}>
            <TouchableOpacity
                style={styles.profile}
                onPress={() => navigation.navigate('EditProfile')}>
                <Image source={Images.IcProfileCircle} />
                <View style={styles.txtContainer}>
                    <CommonText variant="h2" size={14} color="white">
                        Alexa Marston
                    </CommonText>
                    <CommonText variant="h6" color={Colors.Blue} style={{ lineHeight: 12 }}>
                        view or edit profile
                    </CommonText>
                </View>
            </TouchableOpacity>
            <FlatList data={arry} renderItem={renderItems} style={styles.flatlist} />
            <View style={{ marginTop: 21 }}>
                <CommonText
                    variant="h4"
                    color="white"
                    onPress={() => loginContext.setLogin(false)}>
                    Log out
                </CommonText>
                <CommonText variant="h5" color={Colors.Grey} style={{ lineHeight: 55 }}>
                    jonathan.marshall@outlook.com
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
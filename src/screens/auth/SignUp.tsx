import React, { useContext, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Images from '../../themes/images';
import { CommonButton, CommonText, Input } from '../../components';
import { Colors } from '../../themes/colors';
import { createUser } from '../../services/ApiCall';
import { Context } from '../../context';
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {
    const LoginContext = useContext(Context);
    const navigation = useNavigation();

    const [state, setState] = useState({
        fullName: '',
        userId: '',
        userName: '',
        email: '',
        phoneNo: '',
        password: '',
    });
    const { fullName, userId, userName, email, phoneNo, password } = state;

    const signUp = async () => {
        let formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('userId', userId);
        formData.append('userName', userName);
        formData.append('email', email);
        formData.append('phoneNo', phoneNo);
        formData.append('password', password);
        try {
            // Await the Promise to get the response data
            let response = await createUser(formData);
            console.log('responseee ==>', response);
            if (response) {
                LoginContext.setLogin(true);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <ScrollView
            contentContainerStyle={styles.main}
            automaticallyAdjustKeyboardInsets={true}>
            <Input
                leftIcon={Images.IcProfile}
                placeholder="Full Name"
                mTop={11}
                value={fullName}
                onChangeText={val => {
                    setState(s => ({ ...s, fullName: val }));
                }}
            />
            <Input
                leftIcon={Images.IcProfile}
                placeholder="User ID"
                mTop={11}
                value={userId}
                onChangeText={val => {
                    setState(s => ({ ...s, userId: val }));
                }}
            />
            <Input
                leftIcon={Images.IcProfile}
                placeholder="User Name"
                mTop={11}
                value={userName}
                onChangeText={val => {
                    setState(s => ({ ...s, userName: val }));
                }}
            />
            <Input
                leftIcon={Images.IcSms}
                placeholder="Email"
                inputMode="email"
                mTop={11}
                value={email}
                onChangeText={val => {
                    setState(s => ({ ...s, email: val }));
                }}
            />
            <Input
                inputMode="tel"
                leftIcon={Images.IcPhoneNo}
                placeholder="Phone No"
                mTop={11}
                rightIcon={Images.IcDownArrow}
                value={phoneNo}
                onChangeText={val => {
                    setState(s => ({ ...s, phoneNo: val }));
                }}
            />

            <Input
                leftIcon={Images.IcPassword}
                placeholder="Password"
                mTop={11}
                value={password}
                onChangeText={val => {
                    setState(s => ({ ...s, password: val }));
                }}
            />
            <CommonButton title="SIGN UP" onPress={signUp} mTop={28} />
            <View style={styles.txtContainer}>
                <CommonText variant="h6">Already have an account?</CommonText>
                <CommonText
                    onPress={() => navigation.navigate('Login')}
                    variant="h2"
                    size={12}
                    color={Colors.Blue}>
                    SIGN IN
                </CommonText>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
    txtContainer: {
        flexDirection: 'row',
        marginTop: 23,
        justifyContent: 'center',
        marginBottom: 53,
    },
    input: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
    },
});
export default SignUp;
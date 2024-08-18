import React, { useContext, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { CommonButton, CommonText, Input } from '../../components';
import { useNavigation } from '@react-navigation/native';
import Images from '../../themes/images';
import { Colors } from '../../themes/colors';
import { Context } from '../../context';
import { loginUser } from '../../services/ApiCall';
import FlashMessage, { showMessage } from 'react-native-flash-message';
// import FlashMessage from '../../components/FlashMessage';

const Login = () => {
    const loginContext = useContext(Context);
    const navigation = useNavigation();
    const [state, setState] = useState({
        email: '',
        password: '',
        visiblility: false,
        emailValidation: false,
        passwordValidation: false,
    });
    const {
        email,
        password,
        visiblility,
        passwordValidation,
        emailValidation,
    } = state;

    const PasswordValidation = () => {
        setState(s => ({ ...s, visiblility: !s.visiblility }));
    };

    const showValidation = () => {
        let emailValidation = false;
        let passwordValidation = false;

        if (email === '') {
            emailValidation = true;
            return false
        }
        if (password === '') {
            passwordValidation = true;
            return false

        }
        setState(s => ({
            ...s,
            emailValidation,
            passwordValidation,
        }));

        if (!emailValidation && !passwordValidation) {
            return true
        }
    };

    const login = async () => {
        const validation = showValidation()
        if (!validation) return
        let formData = new FormData()
        formData.append('email', email);
        formData.append('password', password);
        formData.append('device_type', '123456');
        formData.append('fcm_token', '9878645');
        formData.append('device_id', 'ios');
        try {
            let response = await loginUser(formData);
            console.log("responseee ==>", response);
            if (response) {
                loginContext.setLogin(true);
            }
        } catch (error) {
            showMessage({
                message: error,
                type: "danger",
            });

        }
    };

    return (
        <ScrollView
            contentContainerStyle={styles.main}
            automaticallyAdjustKeyboardInsets={true}>
            <FlashMessage position="top" />

            <Image source={Images.IcLogo} style={styles.logo} />
            <CommonText
                color={Colors.DarkGrey}
                variant="h1"
                mTop={67}
                style={{ letterSpacing: 0.56 }}>
                Hello There.
            </CommonText>
            <CommonText
                variant="h4"
                color={Colors.DarkGrey}
                mTop={11}
                style={{ letterSpacing: 0.56 }}>
                Login or sign up to continue.
            </CommonText>
            <Input
                placeholder="Email"
                leftIcon={Images.IcProfile}
                mTop={25}
                value={email}
                onChangeText={val => setState(s => ({ ...s, email: val }))}
            />
            {emailValidation && (
                <CommonText variant="h4" color="red">
                    Email Is Required
                </CommonText>
            )}
            <Input
                placeholder="Password"
                leftIcon={Images.IcPassword}
                mTop={11}
                rightIcon={visiblility ? Images.IcOpenEye : Images.IcCloseEye}
                onClickRightButton={PasswordValidation}
                secureTextEntry={visiblility}
                value={password}
                onChangeText={val => setState(s => ({ ...s, password: val }))}
            />
            {passwordValidation && (
                <CommonText variant="h4" color="red">
                    Password Is Required
                </CommonText>
            )}
            <CommonText
                onPress={() => navigation.navigate('ForgotPassword')}
                variant="h2"
                size={12}
                color={Colors.Blue}
                mTop={16}
                textAlign="right">
                Forgot Password?
            </CommonText>
            <CommonButton
                variant="primary"
                title="SIGN IN"
                mTop={51}
                onPress={login}
            />
            <View style={styles.txtContainer}>
                <CommonText variant="h6">Don’t have an account?</CommonText>
                <CommonText
                    variant="h2"
                    size={12}
                    color={Colors.Blue}
                    onPress={() => navigation.navigate('SignUp')}>
                    {' '}
                    SIGN UP
                </CommonText>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    txtContainer: {
        flexDirection: 'row',
        marginTop: 34,
        justifyContent: 'center',
    },
    logo: {
        width: 86,
        height: 46,
    },
});
export default Login;
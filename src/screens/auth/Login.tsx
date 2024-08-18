import React, { useContext, useState } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { CommonButton, CommonText, Input } from '../../components';
import { useNavigation } from '@react-navigation/native';
import Images from '../../themes/images';
import { Colors } from '../../themes/colors';
import { Context } from '../../context';
import { loginUser } from '../../services/ApiCall';

const Login = () => {
    const loginContext = useContext(Context);
    const navigation = useNavigation();
    const [state, setState] = useState({
        username: '',
        password: '',
        visiblility: false,
        usernameValidation: false,
        passwordValidation: false,
    });
    const {
        username,
        password,
        visiblility,
        passwordValidation,
        usernameValidation,
    } = state;

    const PasswordValidation = () => {
        setState(s => ({ ...s, visiblility: !s.visiblility }));
    };

    const showValidation = () => {
        let usernameValidation = false;
        let passwordValidation = false;

        if (username === '') {
            usernameValidation = true;
        }
        if (password === '') {
            passwordValidation = true;
        }
        setState(s => ({
            ...s,
            usernameValidation,
            passwordValidation,
        }));

        if (!usernameValidation && !passwordValidation) {
            loginContext.setLogin(true);
        }
    };

    const login = async () => {
        let params = {
            username: username,
            password: password,
        };

        let response = loginUser(params);

        console.log('response', response);

        if (response) {
            loginContext.setLogin(true);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.main}>
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
                placeholder="User Name"
                leftIcon={Images.IcProfile}
                mTop={25}
                value={username}
                onChangeText={val => setState(s => ({ ...s, username: val }))}
            />
            {usernameValidation && (
                <CommonText variant="h4" color="red">
                    Username Is Required
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
                onPress={showValidation}
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
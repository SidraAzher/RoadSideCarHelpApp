import React, { useContext, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
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
        firstName: '',
        lastName: '',
        userId: '',
        userName: '',
        email: '',
        phoneNo: '',
        password: '',
        firstNameValidation: false,
        lastNameValidation: false,
        userIdValidation: false,
        userNameValidation: false,
        emailValidation: false,
        phoneNoValidation: false,
        passwordValidation: false,
        visiblility: false,
    });
    const {
        firstName,
        lastName,
        userId,
        userName,
        email,
        phoneNo,
        password,
        firstNameValidation,
        lastNameValidation,
        userIdValidation,
        userNameValidation,
        emailValidation,
        phoneNoValidation,
        passwordValidation,
        visiblility,
    } = state;

    const PasswordValidation = () => {
        setState(s => ({ ...s, visiblility: !s.visiblility }));
    };
    const showValidation = () => {
        let firstNameValidation = false;
        let lastNameValidation = false;
        let userIdValidation = false;
        let userNameValidation = false;
        let emailValidation = false;
        let phoneNoValidation = false;
        let passwordValidation = false;

        if (firstName === '') {
            firstNameValidation = true;
        }
        if (lastName === '') {
            lastNameValidation = true;
        }
        if (userId === '') {
            userIdValidation = true;
        }
        if (userName === '') {
            userNameValidation = true;
        }
        if (email === '') {
            emailValidation = true;
        }
        if (phoneNo === '') {
            phoneNoValidation = true;
        }
        if (password === '') {
            passwordValidation = true;
        }
        setState(s => ({
            ...s,
            firstNameValidation,
            lastNameValidation,
            userIdValidation,
            userNameValidation,
            emailValidation,
            phoneNoValidation,
            passwordValidation,
        }));

        if (
            !firstNameValidation &&
            !lastNameValidation &&
            !userIdValidation &&
            !userNameValidation &&
            !emailValidation &&
            !phoneNoValidation &&
            !passwordValidation
        ) {
            return true;
        }
    };

    const signUp = async () => {
        const validation = showValidation();
        if (!validation) return;
        let formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('userId', userId);
        formData.append('userName', userName);
        formData.append('email', email);
        formData.append('mobile_no', phoneNo);
        formData.append('password', password);
        formData.append('device_type', '123456');
        formData.append('fcm_token', '9878645');
        formData.append('device_id', 'ios');
        try {
            let response = await createUser(formData);
            console.log('responseee ==>', response);
            if (response) {
                LoginContext.setLogin(true);
            }
        } catch (error) {
            showMessage({
                message: error,
                type: 'danger',
            });
        }
    };
    return (
        <ScrollView
            contentContainerStyle={styles.main}
            automaticallyAdjustKeyboardInsets={true}>
            <Image source={Images.IcLogo} style={styles.logo} />
            <CommonText variant="h1" mTop={20} style={{ letterSpacing: 0.56 }}>
                SIGN UP
            </CommonText>
            <CommonText
                variant="h4"
                color={Colors.DarkGrey}
                mTop={11}
                style={{ letterSpacing: 0.56 }}>
                Sign up to continue.
            </CommonText>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}></View>
            <Input
                leftIcon={Images.IcProfile}
                placeholder="First Name"
                mTop={25}
                value={firstName}
                onChangeText={val => {
                    setState(s => ({ ...s, firstName: val }));
                }}
            />
            {firstNameValidation && (
                <CommonText variant="h4" color="red">
                    First Name Is Required
                </CommonText>
            )}
            <Input
                leftIcon={Images.IcProfile}
                placeholder="Last Name"
                mTop={11}
                value={lastName}
                onChangeText={val => {
                    setState(s => ({ ...s, lastName: val }));
                }}
            />
            {lastNameValidation && (
                <CommonText variant="h4" color="red">
                    Last Name Is Required
                </CommonText>
            )}
            <Input
                leftIcon={Images.IcProfile}
                placeholder="User ID"
                mTop={11}
                value={userId}
                onChangeText={val => {
                    setState(s => ({ ...s, userId: val }));
                }}
            />
            {userIdValidation && (
                <CommonText variant="h4" color="red">
                    User Id Is Required
                </CommonText>
            )}
            <Input
                leftIcon={Images.IcProfile}
                placeholder="User Name"
                mTop={11}
                value={userName}
                onChangeText={val => {
                    setState(s => ({ ...s, userName: val }));
                }}
            />
            {userNameValidation && (
                <CommonText variant="h4" color="red">
                    User Name Is Required
                </CommonText>
            )}
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
            {emailValidation && (
                <CommonText variant="h4" color="red">
                    Email Is Required
                </CommonText>
            )}
            <Input
                inputMode="tel"
                leftIcon={Images.IcPhoneNo}
                placeholder="Phone No"
                mTop={11}
                value={phoneNo}
                onChangeText={val => {
                    setState(s => ({ ...s, phoneNo: val }));
                }}
            />
            {phoneNoValidation && (
                <CommonText variant="h4" color="red">
                    Phone Number Is Required
                </CommonText>
            )}
            <Input
                leftIcon={Images.IcPassword}
                rightIcon={visiblility ? Images.IcOpenEye : Images.IcCloseEye}
                placeholder="Password"
                mTop={11}
                value={password}
                onChangeText={val => {
                    setState(s => ({ ...s, password: val }));
                }}
                onClickRightButton={PasswordValidation}
                secureTextEntry={visiblility}
            />
            {passwordValidation && (
                <CommonText variant="h4" color="red">
                    Password Is Required
                </CommonText>
            )}
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
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'white',
        paddingVertical: 20,
    },
    logo: {
        width: 86,
        height: 46,
        // marginTop: 20
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
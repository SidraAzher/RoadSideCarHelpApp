import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Images from '../../themes/images';
import { CommonButton, Input } from '../../components';
import { updateUser } from '../../services/ApiCall';
import { Context } from '../../context';
const EditProfile = () => {
    const loginContext = useContext(Context);
    const [state, setState] = useState({
        fullName: '',
        userId: '',
        userName: '',
        email: '',
        phoneNo: '',
    });
    const { fullName, userId, userName, email, phoneNo } = state;
    const editProfile = async () => {
        let formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('userId', userId);
        formData.append('userName', userName);
        try {
            // Await the Promise to get the response data
            let response = await updateUser(formData);
            console.log('responseee ==>', response);
            if (response) {
                loginContext.setLogin(true);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <View style={styles.main}>
            <Input
                leftIcon={Images.IcProfile}
                placeholder="Full Name"
                mTop={36}
                value={fullName}
                onChangeText={val => setState(s => ({ ...s, fullName: val }))}
            />
            <Input
                leftIcon={Images.IcProfile}
                placeholder="User ID"
                mTop={11}
                value={userId}
                onChangeText={val => setState(s => ({ ...s, userId: val }))}
            />
            <Input
                leftIcon={Images.IcProfile}
                placeholder="User Name"
                mTop={11}
                value={userName}
                onChangeText={val => setState(s => ({ ...s, userName: val }))}
            />
            <Input
                inputMode="email"
                editable={false}
                leftIcon={Images.IcSms}
                placeholder="Email"
                mTop={11}
                value={email}
                onChangeText={val => setState(s => ({ ...s, email: val }))}
            />
            <Input
                inputMode="tel"
                editable={false}
                leftIcon={Images.IcPhoneNo}
                placeholder="Phone No"
                mTop={11}
                rightIcon={Images.IcDownArrow}
                value={phoneNo}
                onChangeText={val => setState(s => ({ ...s, phoneNo: val }))}
            />
            <CommonButton
                title="Save"
                variant="primary"
                onPress={editProfile}
                mTop={51}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
});
export default EditProfile;
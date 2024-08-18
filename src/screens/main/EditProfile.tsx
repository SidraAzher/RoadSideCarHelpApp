import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Images from '../../themes/images';
import { CommonButton, Input } from '../../components';
import { updateUser } from '../../services/ApiCall';
import { Context } from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const EditProfile = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        userId: '',
        userName: '',
        email: '',
        phoneNo: '',
        address: '',
    });

    const { firstName, userId, userName, email, phoneNo, lastName, address } = state;

    const getUserData = async () => {
        const user: any = await AsyncStorage.getItem('userData');
        const parsedUser = JSON.parse(user)
        setState(s => ({ ...s, firstName: parsedUser.first_name, lastName: parsedUser.last_name, userId: parsedUser.id, email: parsedUser.email, phoneNo: parsedUser.mobile_no, address: parsedUser.address }))
    }

    useEffect(() => {
        getUserData()
    }, [])

    const editProfile = async () => {
        let formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('address', address);


        console.log(formData)

        try {
            // Await the Promise to get the response data
            let response = await updateUser(formData);
            console.log('responseee ==>', response);
            if (response) {
                await AsyncStorage.setItem('userData', JSON.stringify(response.data));

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
                value={firstName}
                onChangeText={val => setState(s => ({ ...s, firstName: val }))}
            />
            <Input
                leftIcon={Images.IcProfile}
                placeholder="Last Name"
                mTop={36}
                value={lastName}
                onChangeText={val => setState(s => ({ ...s, lastName: val }))}
            />
            <Input
                leftIcon={Images.IcAddress}
                placeholder="Address"
                mTop={36}
                value={address}
                onChangeText={val => setState(s => ({ ...s, address: val }))}
            />
            <Input
                leftIcon={Images.IcProfile}
                placeholder="User ID"
                mTop={11}
                editable={false}
                value={userId.toString()}
                onChangeText={val => setState(s => ({ ...s, userId: val }))}
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
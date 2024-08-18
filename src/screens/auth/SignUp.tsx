import React, { useContext, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Images from '../../themes/images';
import { CommonButton, CommonText, Input } from '../../components';
import { Colors } from '../../themes/colors';
import {
    launchImageLibrary,
    ImagePickerResponse,
    ImageLibraryOptions,
} from 'react-native-image-picker';
const SignUp = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
        };

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            console.log('Response: ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image picker error: ', response.errorCode);
            } else {
                const imageUri = response.assets[0].uri;
                console.log('Selected image URI: ', imageUri);
                setSelectedImage(imageUri);
            }
        });
    };
    return (
        <ScrollView
            contentContainerStyle={styles.main}
            automaticallyAdjustKeyboardInsets={true}>
            <View style={styles.imgContainer}>
                {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.img} />
                ) : (
                    <Image source={Images.IcProfilePic} />
                )}
                <TouchableOpacity style={styles.addImg} onPress={openImagePicker}>
                    <Image source={Images.IcAdd} />
                </TouchableOpacity>
            </View>
            <Input leftIcon={Images.IcProfile} placeholder="Full Name" mTop={36} />
            <Input leftIcon={Images.IcProfile} placeholder="User ID" mTop={11} />
            <Input leftIcon={Images.IcProfile} placeholder="User Name" mTop={11} />
            <Input
                leftIcon={Images.IcSms}
                placeholder="Email"
                inputMode="email"
                mTop={11}
            />
            <Input
                inputMode="tel"
                leftIcon={Images.IcPhoneNo}
                placeholder="Phone No"
                mTop={11}
                rightIcon={Images.IcDownArrow}
            />

            <Input leftIcon={Images.IcPassword} placeholder="Password" mTop={11} />
            <Input
                leftIcon={Images.IcConfirmPassword}
                placeholder="Confirm Password"
                mTop={11}
            />
            <View style={styles.txtContainer}>
                <CommonText variant="h6">I agree to the </CommonText>
                <CommonText
                    variant="h2"
                    size={12}
                    color={Colors.Blue}
                    style={{ textDecorationLine: 'underline' }}>
                    Terms & Conditions
                </CommonText>
            </View>
            <CommonButton
                title="SIGN UP"
                onPress={() => console.log('pressed')}
                mTop={28}
            />
            <View
                style={[
                    styles.txtContainer,
                    { marginTop: 23, justifyContent: 'center', marginBottom: 53 },
                ]}>
                <CommonText variant="h6">Already have an account?</CommonText>
                <CommonText
                    variant="h2"
                    size={12}
                    color={Colors.Blue}
                    textDecorationLine="underline">
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
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    addImg: {
        position: 'absolute',
        bottom: 15,
        right: 110,
    },
    txtContainer: {
        flexDirection: 'row',
        marginTop: 43,
    },
    input: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    img: {
        resizeMode: 'cover',
        width: 103,
        height: 103,
        borderRadius: 50,
    },
});
export default SignUp;
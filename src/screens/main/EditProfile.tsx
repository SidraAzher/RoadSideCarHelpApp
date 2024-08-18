import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Images from '../../themes/images';
import { Input } from '../../components';
import {
    launchImageLibrary,
    ImagePickerResponse,
    ImageLibraryOptions,
} from 'react-native-image-picker';
const EditProfile = () => {
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
        <View style={styles.main}>
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
                editable={false}
                leftIcon={Images.IcSms}
                placeholder="Email"
                mTop={11}
            />
            <Input
                inputMode="tel"
                editable={false}
                leftIcon={Images.IcPhoneNo}
                placeholder="Phone No"
                mTop={11}
                rightIcon={Images.IcDownArrow}
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
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    addImg: {
        position: 'absolute',
        bottom: 15,
        right: 110,
    },
    img: {
        resizeMode: 'cover',
        width: 103,
        height: 103,
        borderRadius: 50,
    },
});
export default EditProfile;
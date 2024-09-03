import React, { useState } from 'react';
import {
    Image,
    ImageProps,
    Platform,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    TouchableOpacity,
    View,
} from 'react-native';
import { Colors } from '../themes/colors';

interface InputType {
    placeholder: string;
    leftIcon: ImageProps;
    rightIcon?: ImageProps;
    onClickRightButton?: () => void;
    props?: TextInputProps;
    multiline?: boolean;
    style?: StyleProp<TextStyle>;
    onChangeText?: (param: string) => void;
    mTop?: number;
    editable?: boolean;
    secureTextEntry?: boolean;
    inputMode?:
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';
    value?: string;
}
export const Input = ({
    placeholder,
    leftIcon,
    rightIcon,
    onClickRightButton,
    props,
    onChangeText,
    mTop,
    style,
    editable,
    secureTextEntry,
    inputMode,
    value
}: InputType) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <View
            style={[
                styles.main,
                { marginTop: mTop },
                isFocused == true
                    ? { borderColor: Colors.lightGreen, borderWidth: 1 }
                    : { borderWidth: 0 },
                style,
            ]}>
            <Image source={leftIcon} style={{ alignSelf: 'center' }} />
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                placeholderTextColor={Colors.DarkGrey}
                {...props}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                editable={editable}
                secureTextEntry={secureTextEntry}
                inputMode={inputMode}
                value={value}
            />
            <TouchableOpacity onPress={onClickRightButton} style={{ justifyContent: 'center' }}>
                <Image source={rightIcon} style={{ tintColor: 'grey' }} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: Colors.LightGrey,
        paddingVertical: Platform.OS == 'ios' ? 19 : 5,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        paddingRight: 20,
        fontFamily: 'GibsonRegular',
        fontSize: 16,
        color: 'gray',
        lineHeight: 17,
    },
});
import React, { useState } from 'react'
import { Image, ImageProps, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, } from 'react-native'
import { DarkGrey, lightGrey } from '../themes/colors'

interface InputType {
    placeholder: string
    leftIcon: ImageProps
    rightIcon?: ImageProps
    onClickRightButton?: () => void
    props?: TextInputProps
    multiline?: boolean
    style?: StyleProp<TextStyle>
    onChangeText?: (param: string) => void
    mTop?: number
}
export const Input = ({ placeholder, leftIcon, rightIcon, onClickRightButton, props, onChangeText, mTop }: InputType) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const handleFocus = () => {
        setIsFocused(true);
    }
    const handleBlur = () => {
        setIsFocused(false);
    }
    return (
        <View style={[styles.main, { marginTop: mTop }, isFocused == true ? { borderColor: 'blue', borderWidth: 2 } : { borderWidth: 0 }]}>
            <Image source={leftIcon} />
            <TextInput
                {...props}
                placeholder={placeholder}
                style={styles.input}
                placeholderTextColor={DarkGrey}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <TouchableOpacity onPress={onClickRightButton}>
                <Image source={rightIcon} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: lightGrey,
        paddingVertical: 19,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        paddingRight: 20,
        fontFamily: 'GibsonRegular',
        fontSize: 16,
        lineHeight: 17,
    }
})
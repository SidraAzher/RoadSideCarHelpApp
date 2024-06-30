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

}

export const Input = ({ placeholder, leftIcon, rightIcon, onClickRightButton, props, style, onChangeText }: InputType) => {

    return (
        <View style={[styles.main, style]}>
            <Image source={leftIcon} />
            <TextInput onPressIn={() => console.log("focused")} {...props} placeholder={placeholder} style={styles.input} placeholderTextColor={DarkGrey} onChangeText={onChangeText} />
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
        borderRadius: 10
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
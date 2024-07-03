import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleProp, StyleSheet, TouchableOpacity } from "react-native";
import { CommonText } from "./CommonText";
import LinearGradient from 'react-native-linear-gradient';
import Images from "../themes/images";

interface ButtonType {
    title?: string
    mTop?: number
    variant?: "primary" | "error" | "success" | "tertiaryGrey",
    state?: "disabled" | "active",
    leftIcon?: ImageSourcePropType
    rightIcon?: ImageSourcePropType
    icon?: ImageSourcePropType;
    bgColor?: string

}
export const CommonButton = ({ title, mTop, variant, state, leftIcon, rightIcon, icon, bgColor = 'grey' }: ButtonType) => {
    const variantOption = variant
    if (variantOption == "primary" || title) {
        return <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={state == 'disabled' && variantOption == 'primary' ? ['rgba(0, 160, 182,0.5)', 'rgba(166, 197, 34,0.5)'] : ['rgb(0, 160, 182)', 'rgb(166, 197, 34)']} style={[styles.linearGradient, { marginTop: mTop }]}>
            <TouchableOpacity style={styles.main}>
                <Image source={leftIcon} />
                <CommonText style={styles.btnText} variant="h3" color="white">{title}</CommonText>
                <Image source={rightIcon} />
            </TouchableOpacity>
        </LinearGradient>
    }
    else if (variantOption) {
        return <TouchableOpacity style={[styles.main,
        {
            backgroundColor: state == 'disabled'
                ? (variantOption == 'error' ? "rgba(234, 18, 26,0.5)" :
                    variantOption == 'success' ? 'rgba(6, 191, 40,0.5)' :
                        variantOption == 'tertiaryGrey' ? 'rgba(120, 132, 158,0.5)' : '')
                : (variantOption == 'error' ? 'rgb(234, 18, 26)' :
                    variantOption == 'success' ? 'rgb(6, 191, 40)' :
                        variantOption == 'tertiaryGrey' ? 'rgb(120, 132, 158)' : ''), marginTop: mTop
        }]}>
            <Image source={leftIcon} />
            <CommonText style={styles.btnText} variant="h3" color="white">{title}</CommonText>
            <Image source={rightIcon} />
        </TouchableOpacity>
    }
    else {
        return <TouchableOpacity style={[styles.iconContainer, { backgroundColor: bgColor }]}>
            <Image source={icon} />
        </TouchableOpacity>

    }
}
//Styles:
const styles = StyleSheet.create({
    linearGradient: {
        borderRadius: 10,
    },
    main: {
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    btnText: {
        flex: 1,
        paddingVertical: 19,
        lineHeight: 17,
        textAlign: 'center'
    },
    iconContainer: {
        width: 52,
        height: 52,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})
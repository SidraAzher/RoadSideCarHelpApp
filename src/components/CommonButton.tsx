import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { CommonText } from "./CommonText";
import LinearGradient from 'react-native-linear-gradient';


interface ButtonType {
    title: string
    mTop?: number
    variant: "primary" | "error" | "success" | "tertiaryGrey",
    state?: "disbled" | "active"
}

export const CommonButton = ({ title, mTop, variant, state }: ButtonType) => {
    const variantOption = variant
    if (variantOption == "primary") {
        return <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgb(0, 160, 182)', 'rgb(166, 197, 34)']} style={[styles.linearGradient, { marginTop: mTop }]}>
            <TouchableOpacity style={styles.main}>
                <CommonText style={styles.btnText} variant="h3" color="white">{title}</CommonText>
            </TouchableOpacity>
        </LinearGradient>
    }
    else {
        return <TouchableOpacity style={[styles.main, { backgroundColor: variantOption == 'error' ? "rgb(234, 18, 26)" : variantOption == 'success' ? 'rgb(6, 191, 40)' : variantOption == "tertiaryGrey" ? 'grey' : 'default', marginTop: mTop }]}>
            <CommonText style={styles.btnText} variant="h3" color="white">{title}</CommonText>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        borderRadius: 10,
    },
    main: {
        alignItems: 'center',
        borderRadius: 10
    },
    btnText: {
        paddingVertical: 19,
        lineHeight: 17
    },

})
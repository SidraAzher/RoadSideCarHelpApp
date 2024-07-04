import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

interface TextType {
    children: React.ReactNode,
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    style?: StyleProp<TextStyle>,
    color?: string,
    size?: number,
    textAlign?: "auto" | "center" | "right" | "left" | "justify"
    mTop?: number
}

const variantObj = {
    h1:
    {
        fontSize: 28,
        fontFamily: 'SofiaProSemiBold'
    },
    h2:
    {
        fontSize: 20,
        fontFamily: 'SofiaProSemiBold',
        lineHeight: 17,
    },
    h3:
    {
        fontSize: 16,
        fontFamily: 'SofiaProSemiBold'
    },
    h4:
    {
        fontSize: 16,
        fontFamily: 'SofiaProRegular',
        lineHeight: 17
    },
    h5:
    {
        fontSize: 14,
        fontFamily: 'SofiaProRegular',
        lineHeight: 17
    },
    h6:
    {
        fontSize: 12,
        fontFamily: 'SofiaProRegular',
        lineHeight: 17

    }
}

const selectedVariant = (variant: string) => {
    switch (variant) {
        case "h1":
            return variantObj.h1
        case "h2":
            return variantObj.h2
        case "h3":
            return variantObj.h3
        case "h4":
            return variantObj.h4
        case "h5":
            return variantObj.h5
        case "h6":
            return variantObj.h6
        default:
            return variantObj.h4
    }

}

export const CommonText = (
    { children, variant, color, size, style, textAlign, mTop }: TextType) => {
    const staticStyles = { ...selectedVariant(variant) };
    return <Text style={[staticStyles, { fontSize: size ? size : staticStyles.fontSize, color: color, textAlign: textAlign, marginTop: mTop }, style]}
    >
        {children}
    </Text >
}

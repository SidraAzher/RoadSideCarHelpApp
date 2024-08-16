
import React from "react"
import { Image, TouchableOpacity } from "react-native"
import Images from "../themes/images"
import { Colors } from "../themes/colors"

const headerLeftButton = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image source={Images.IcLeftArrow} />
        </TouchableOpacity>
    )
}

const headerTitleStyle = {
    fontSize: 20,
    fontFamily: 'SofiaProSemiBold',
    color: Colors.DarkGrey,
}

export {
    headerLeftButton,
    headerTitleStyle
}
import React from 'react'
import { Text } from 'react-native'

interface TextType {
    color: string,
    size: number,
    mt?: number,
    mb?: number,
    mh?: number,
    mv?: number
}
export const CommonText = ({ color, size, mt, mb, mh, mv }: TextType) => {
    return <Text style={{ color: color, fontSize: size, marginTop: mt, marginBottom: mb, marginHorizontal: mh, marginVertical: mv }}>
        Helllllooo
    </Text>
}
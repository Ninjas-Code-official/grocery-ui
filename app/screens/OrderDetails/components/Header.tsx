import React from 'react'
import { StyleSheet } from 'react-native'
import Svg, { Circle, ClipPath, Image, Text, } from 'react-native-svg'

import { View } from '../../../components/Themed'
import { Layout, moderateScale, verticalScale } from '../../../constants'
const { window: { width } } = Layout

const image = { uri: `https://picsum.photos/${width}/${300}` }

export const Header = () => {
    return (
        <View>
            <Svg
                width={width}
                height={moderateScale(200)}
            >
                <ClipPath id='clip'>
                    <Circle r={moderateScale(400)} cx={width / 2} cy={moderateScale(-200)} />
                </ClipPath>
                <Image
                    href={image}
                    clipPath='url(#clip)'
                    width={width}
                    height={moderateScale(200)}
                    preserveAspectRatio='none'
                    opacity={0.7}
                />
                <Text
                    fill="white"
                    fontSize="20"
                    fontWeight='bold'
                    x={width / 2}
                    y={moderateScale(100)}
                    textAnchor="middle"
                >Lebanese Food Garden</Text>
            </Svg>
        </View>
    )
}
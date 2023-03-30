import React, { useEffect, useState } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'
import { Colors, moderateScale } from '../constants'
import { View } from './Themed'

const image = require('../../assets/images/spinner.gif')
const Loading = () => {
    const [spinAnim] = useState(new Animated.Value(0));
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '540deg'],
    })
    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ).start();
    });
    return (
        <View style={styles.loadingContainer}>
            <View style={styles.backdropContainer} />
            <Animated.Image
                style={[styles.image, { transform: [{ rotate: spin }] }]}
                source={image} />
        </View >
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    backdropContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: 0.5
    },
    image: {
        height: moderateScale(100),
        width: moderateScale(100),
        borderRadius: moderateScale(50),
        position: 'absolute',
        
        // backgroundColor:'red'
    }
})
export default Loading

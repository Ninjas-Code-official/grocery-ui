import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Colors, scale, verticalScale } from '../../../constants';
import { View, Text, Image, TouchableOpacity } from '../../../components/Themed';

type CategoryCardProps = {
    id: string,
    title: string,
    image: string
}

export const CategoryCard = (props: CategoryCardProps) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Items',{ id: props.id, title: props.title })} style={styles.container}>
            <View style={styles.imageWrapper} lightColor={Colors.light.imageBackground} darkColor={Colors.dark.imageBackground}>
                <Image source={{ uri: props.image }} style={styles.image} />
            </View>
            <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        overflow: 'hidden',
        width: scale(60),
        marginRight: scale(10),
        marginBottom: verticalScale(15),
        alignItems: 'center',
    },
    imageWrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        height: verticalScale(60),
        width: scale(60),
    },
    title: {
        paddingTop: 5,
        fontSize: verticalScale(9),
        textAlign: 'center',
        fontFamily: 'OpenSans-SemiBold'
    }
})


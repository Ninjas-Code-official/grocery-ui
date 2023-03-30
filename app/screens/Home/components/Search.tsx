import React from "react"
import { StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { View, Text, AntDesign, TouchableWithoutFeedback } from "../../../components/Themed"
import { Colors, scale, verticalScale } from "../../../constants"

export const Search = () => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('Search') }}>
            < View style={styles.container} >
                <AntDesign name="search1" size={20} lightColor={Colors.light.primary} />
                <Text style={styles.text}>Search products and categories</Text>
            </View >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: verticalScale(45),
        borderRadius: verticalScale(5),
        alignItems: "center",
        paddingHorizontal: scale(10),
        marginHorizontal: scale(10)
    },
    text: {
        flex: 1,
        paddingLeft: scale(10)
    }
})

import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView } from '../../../components/Themed';
import { Colors, scale, verticalScale } from '../../../constants';
import { useStore } from '../../../contexts';
import { CategoryCard } from './CategoryCard';
import { HeaderImage } from './HeaderImage';

export const Header = () => {
    const { loading, data } = useStore()
    if (loading) return null
    const { name, image, categories } = data || {}
    return (
        <View>
            <View lightColor={Colors.light.imageBackground} darkColor={Colors.dark.imageBackground}>
                <HeaderImage image={image} />
            </View>
            <Text style={styles.title}>{name}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                style={{ marginTop: scale(12) }}>
                {categories?.map((category) => <CategoryCard key={category.id} {...category} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: scale(8),
        marginLeft: scale(12),
        fontSize: verticalScale(16),
        fontFamily: 'OpenSans-SemiBold'
    },
    contentContainer: {
        width: '125%',
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: scale(15),
    }
})

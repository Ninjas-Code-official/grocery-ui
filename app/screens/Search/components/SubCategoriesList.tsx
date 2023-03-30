import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import CartButton from '../../../components/CartButton';
import { Text, View, ScrollView, AntDesign, TouchableOpacity } from '../../../components/Themed';

import { Colors, scale, verticalScale } from '../../../constants';
import { useStore } from '../../../contexts';
import { SearchStackParamList } from '../../../../types';


type SubCategoriesRouteProp = RouteProp<SearchStackParamList, 'SubCategoriesList'>;

export const SubCategoriesList = () => {
    const route = useRoute<SubCategoriesRouteProp>()
    const navigation = useNavigation()
    const { data } = useStore()
    const { categories } = data || {}
    const category = categories?.find(category => category.id === route.params?.id)

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.backHeader} onPress={() => { navigation.goBack() }}>
                <AntDesign name={'left'} size={15} lightColor={Colors.light.imageBackground} />
                <Text style={styles.backHeaderText}>All categories</Text>
            </TouchableOpacity>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: verticalScale(20) }}
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <Text style={styles.headingText}>{category?.title}</Text>
                <TouchableOpacity style={styles.subHeadingContainer}>
                    <AntDesign name={'appstore-o'} size={15} />
                    <Text style={styles.subText} lightColor={Colors.light.primary}>View all products(31)</Text>
                </TouchableOpacity>
                {category?.data.map((subCategory, index) => (
                    <TouchableOpacity
                        style={[
                            styles.itemContainer,
                            { marginTop: verticalScale(index === 0 ? 30 : 20) }
                        ]} key={subCategory.id}>
                        <Text style={styles.itemText}>{subCategory.title}</Text>
                        <AntDesign name={'right'} size={15} lightColor={Colors.light.imageBackground} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <CartButton verticalOffset={70} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: verticalScale(20),
        paddingLeft: scale(12),
    },
    headingText: {
        fontSize: verticalScale(16),
        fontFamily: 'OpenSans-Bold'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: scale(15),
        marginHorizontal: scale(12),
    },
    itemText: {
        fontSize: verticalScale(10),
        fontFamily: 'OpenSans-Regular'
    },
    subHeadingContainer: {
        flexDirection: 'row',
        marginTop: verticalScale(15),
        marginLeft: scale(5),
        alignItems: 'center'
    },
    subText: {
        marginLeft: scale(5),
        fontFamily: 'OpenSans-Regular',
        fontSize: verticalScale(10)
    },
    backHeader: {
        height: verticalScale(40),
        borderBottomWidth: 0.5,
        marginHorizontal: scale(10),
        borderBottomColor: Colors.light.placeholderText,
        alignItems: 'center',
        flexDirection: 'row'
    },
    backHeaderText: {
        marginLeft: scale(10),
        fontFamily: 'OpenSans-Regular',
        fontSize: verticalScale(10)
    },
})

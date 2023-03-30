import React from 'react';
import { StyleSheet } from 'react-native';

import { CategoriesList, ItemList } from './components';
import CartButton from '../../components/CartButton';
import { View } from '../../components/Themed';


const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                {/* Switch views if user is searching something */}
                {/* <CategoriesList /> */}
                <ItemList />
            </View>
            <CartButton verticalOffset={70} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    }
})

export default SearchScreen

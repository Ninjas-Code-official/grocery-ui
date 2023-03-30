import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ItemList, CategoriesList, SubCategoriesList } from '../screens/Search';
import { SearchStackParamList } from '../../types';

const SearchStack = createStackNavigator<SearchStackParamList>()

function SearchStackNavigator() {
    return (
        <SearchStack.Navigator headerMode='none' keyboardHandlingEnabled={false}>
            <SearchStack.Screen name='CategoriesList' component={CategoriesList} />
            <SearchStack.Screen name='SubCategoriesList' component={SubCategoriesList} />
            <SearchStack.Screen name='ItemsList' component={ItemList} />
        </SearchStack.Navigator>
    )
}
export default SearchStackNavigator
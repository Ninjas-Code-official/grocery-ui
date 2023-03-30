import React, { useState } from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Colors,version, moderateScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity } from '../../components/Themed'
import {SafeAreaView} from "react-native-safe-area-context";
// import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

const Data = [{title: 'Terms & conditions', link:'https://google.com'}, {title: 'Data policy', link:'https://google.com'}]

type TermsType = {
 title:string,
 link:string
}

const TermsAndConditions = () => {

    const itemSeperatorComponent = ()=> (
        <View style={styles.itemSeperator} />
    )
    const renderItem = (data:{item:TermsType}) => {
        return(
            <TouchableOpacity onPress={()=>{WebBrowser.openBrowserAsync(data.item.link)}} style={styles.itemContainer}>
                 <Text style={styles.titleText}>{data.item.title}</Text>
            </TouchableOpacity>
           
            )
    } 
   
      return (
                 <FlatList
                contentContainerStyle={{
                    flexGrow: 1,
                    padding: moderateScale(10),
                    marginBottom: moderateScale(10),
                }}
                alwaysBounceVertical={false}
                // ListEmptyComponent={ListEmpty}
                // ListHeaderComponent={renderHeader}
                // ListFooterComponent={renderFooter}
                ItemSeparatorComponent={itemSeperatorComponent}
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index + item.title} 
                />
    )
}

export default TermsAndConditions;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        padding:moderateScale(10)
    },
    titleText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(15)
    },
    itemSeperator: {
        marginVertical: moderateScale(15),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
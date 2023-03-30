import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { moderateScale, Colors } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList } from '../../components/Themed'
import { AddToCartButton } from './components'
import CheckboxBtn from "../../components/CheckBoxButton";
import { ItemType } from "../../../types";

export type orderType = {
    qty: number;
    name: string;
    price: number;
    currency: string;
    isCheck: boolean;
    id: number
}

const ReOrder = () => {
    const navigation = useNavigation()
    const { refetchData, networkStatus } = {
        refetchData: null,
        networkStatus: null
    }
    // id: string;    title: string;    price: number;    image: string;    quantity?: number;    description?: string;
    const [orderData, setOrderData] = useState<ItemType[]>([{id:'1', title:'Nutella Brownie With Ice Cream',price:144, image:'https://picsum.photos/100/300', quantity:4,description:'asd' },{id:'2', title:'Nutella Brownie With Ice Cream',price:144, image:'https://picsum.photos/100/300', quantity:4,description:'asd'}])
    const [selectedItems, setSelectedItems] = useState<ItemType[]>([{id:'1', title:'Nutella Brownie With Ice Cream',price:144, image:'https://picsum.photos/100/300', quantity:4,description:'asd' },{id:'2', title:'Nutella Brownie With Ice Cream',price:144, image:'https://picsum.photos/100/300', quantity:4,description:'asd'}])
    const onToggleChange = (data: ItemType) => {
        if (selectedItems.find((item: any) => item.id === data.id)) {
            const items = selectedItems.filter((item: any) => item.id !== data.id)
            setSelectedItems(items)
        } else {
            setSelectedItems([...selectedItems, data])
        }
        // console.log('data', data)
        // let temp = [...orderData];
        // const index = temp.findIndex(item => data.id === item.id)
        // temp[index].isCheck = !temp[index].isCheck
        // // console.log('temp',temp)
        // setOrderData(temp);
    }


    const renderItem = (data: { item: ItemType }) => {
        return (<View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <CheckboxBtn
                    checked={Boolean(selectedItems.find(item => item.id === data.item.id))}
                    onPress={() => onToggleChange(data.item)}
                />
                <Text style={styles.descriptionText}>{data.item.quantity} x {data.item.title}</Text>
            </View>
            <Text lightColor={Colors.light.placeholderText} >Rs {data.item.price}.00</Text>
        </View>)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.selectText}>Select items</Text>
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
                // ItemSeparatorComponent={itemSeperatorComponent}
                data={orderData}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id} />
            <AddToCartButton item={selectedItems} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(15),
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(10)
    },
    selectText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(16)
    },
    descriptionText:{
        fontFamily:'OpenSans-Regular'
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ReOrder

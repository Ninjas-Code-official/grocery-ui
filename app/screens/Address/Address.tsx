import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { View, Text, FlatList, Image, AntDesign } from '../../components/Themed'
import { Colors, moderateScale } from '../../constants';
import {useAddress} from '../../contexts'
import {AddAddressButton} from './components'
import {AddressActionType} from '../../reducers'
import {AddressType} from '../../../types'

const labels = ['Home', 'Work', 'Other']

const Cart = () => {
    
    const navigation = useNavigation()
    const {address, dispatchAddress} = useAddress()
    const deleteAdd = (item:AddressType)=> {
       
       dispatchAddress && dispatchAddress({
            type: AddressActionType.delete,
            payload:item
        })
        
    }
    const renderItem = (data: {item : AddressType}) => {
        return (<View style={styles.itemContainer}>
        <AntDesign name="home" size={24} />
        <View style={styles.middleContainer}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}
                        lightColor={Colors.dark.primary}>{labels[data.item.label]}
                    </Text>
                    <Text
                        style={styles.addText}
                        lightColor={Colors.dark.primary}>{data.item.address}
                    </Text>
                    <Text
                        style={styles.addText}
                        lightColor={Colors.dark.primary}>Note to rider: {data.item.note ? data.item.note : 'none'}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('EditAddress',{address:data.item})} style={styles.rightContainer}>
            <AntDesign name="edit" size={22} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>deleteAdd(data.item)} style={styles.rightContainer}>
            <AntDesign name="delete" size={22} />
            </TouchableOpacity>
            
        </View>)
    }
    const itemSeperatorComponent = () => (<View style={styles.itemSeperator} />)

    return (
        <View style={styles.container}>
             <FlatList
                contentContainerStyle={{
                    flexGrow: 1,
                    padding: moderateScale(10),
                    marginBottom: moderateScale(10),
                }}
                alwaysBounceVertical={false}
                data={address}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeperatorComponent}
                keyExtractor={(item, index) => item.Id} />
        <AddAddressButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:moderateScale(10),
    },
    leftContainer: {
        // width: moderateScale(35),
        // zIndex: 1,
        // justifyContent: 'center',
    },
    middleContainer: {
        flex: 1,
        paddingLeft: moderateScale(12),
    },
    rightContainer: {
        paddingLeft: moderateScale(10)
    },
    image: {
        width: moderateScale(60),
        height: moderateScale(60),
    },
    imageContainer: {
        borderRadius: moderateScale(10),
        overflow: 'hidden'
    },
    quantityContainer: {
        borderRadius: moderateScale(5),
        borderWidth: 1,
        width: moderateScale(35),
        height: moderateScale(35),
        borderColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(12),
        color:'grey'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: moderateScale(10),
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(14),
    },
    priceText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: moderateScale(11),
    },
    itemSeperator: {
        marginVertical: moderateScale(15),
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    quantityActionContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1,
        justifyContent: 'center'
    }
})

export default Cart

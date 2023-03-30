import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { View, useThemeColor} from '../../components/Themed'
import {moderateScale,Layout } from '../../constants';
import { EditButton } from './components'
import { Modalize } from 'react-native-modalize'
import {useAddress} from '../../contexts'
import {AddressActionType} from '../../reducers'
import {useNavigation} from '@react-navigation/native'
import { EditAddressModal } from './components/EditAddressModal';
import MapViewer from '../../components/MapView'

const EditAddress = ({route}:any) => {
    const background = useThemeColor({}, 'background');
    const modalizeRef = useRef<Modalize>(null)
    const navigation = useNavigation()
    const {window} = Layout
    console.log('route params', route.params)
    const {dispatchAddress} = useAddress();
    const [params, setParams] = useState({
        Id:route.params.address.Id,
        label:route.params.address.label,
        address:route.params.address.address,
        note:route.params.address.note,
        region:route.params.address.region
    })

    React.useEffect(()=>{
        modalizeRef.current?.open('top')
    })
    const [note, setNote] = useState('');

    const SaveAddress = async () => {
        console.log('params', params)
         dispatchAddress && dispatchAddress({
            type:AddressActionType.update ,
            payload:params
         })
         navigation.navigate('Address')
    }

    const onChangeNote = (text:string) => {
        console.log('text', text);
        setParams({
            ...params,
            note:text
        })
    }

    const onChangeLabel = (text:number) =>{
        console.log('label', text)
        setParams({
            ...params,
            label:text
        })
    }

    const onChangeFloor = (text:string)=>{
        console.log('floor', text)
    }

    return (
        <>
          <View style={styles.container}>
              <KeyboardAvoidingView style={{flex:1}}>
              <View style={{width:'100%', height:'100%'}}>
                <MapViewer region={params.region} />
            </View>
       
        <Modalize ref={modalizeRef}
                alwaysOpen={moderateScale(120)}
                adjustToContentHeight
                handlePosition='inside'
                modalStyle={{backgroundColor:background}}
                overlayStyle={{
                    backgroundColor: 'rgba(255,255,255,0)'
                }}
                // disableScrollIfPossible={true}
                >
                <EditAddressModal onChangeNote={onChangeNote} onChangeLabel={onChangeLabel} onChangeFloor={onChangeFloor} Address={{address:params?.address, city:'Islamabad', label: params?.label, note: params?.note }} />    
            </Modalize>
            </KeyboardAvoidingView>
       <View style={styles.bottomContainer}>
        <EditButton onPress={SaveAddress} />
       </View>
       </View>  
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(10),
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
    bottomContainer:{
        height:moderateScale(90),
        paddingTop: moderateScale(20)     
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
        color: 'grey'
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

export default EditAddress

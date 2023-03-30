import React, { useRef, useState } from 'react';
import { Alert, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {View, useThemeColor} from '../../components/Themed'
import {moderateScale, Layout } from '../../constants';
import { AddressModal, SaveButton } from './components'
import { Modalize } from 'react-native-modalize'
import { useAddress } from '../../contexts'
import { AddressActionType } from '../../reducers'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapViewer from '../../components/MapView';
import Loading from '../../components/Loading';


type regionType = {
    latitude: number;
    longitude: number;
    longitudeDelta: number;
    latitudeDelta: number;
}

type paramsType = {
    Id: string;
    label: number;
    address: string | null,
    note: string;
    city: string | null,
    region: regionType | null
}

const AddAddress = () => {
    const background = useThemeColor({}, 'background');
    const modalizeRef = useRef<Modalize>(null)
    const navigation = useNavigation()
    const [region, setRegion] = useState<regionType>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0092021015338999916,
        longitudeDelta: 0.0097779693007469177,
    })
    const [isLoading, setIsLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const { window } = Layout
    const {address, dispatchAddress } = useAddress();
    const [params, setParams] = useState<paramsType>({
        Id: Math.random().toString(),
        label: 0,
        address: 'Executive Center E11/2 near Dominos',
        note: '',
        city: 'Islamabad',
        region:null
    })

    React.useEffect(() => {
        modalizeRef.current?.open('top')
        getLocationAsync()

    }, [])
    const [note, setNote] = useState('');

    const getLocationAsync = async () => {
        setIsLoading(true)
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            alert('Permission was denied');
        }

        try {
            let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.BestForNavigation });
            console.log('location', location)
            setRegion({
                ...region,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            })
            console.log('params', params)
            setParams({
                ...params,
                region: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0022021015338999916,
                longitudeDelta: 0.0017779693007469177
            }
            })
            getGeocodeAsync({ latitude: location.coords.latitude, longitude: location.coords.longitude })
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log('Error', error);
            alert('Please allow location access to deliver order at your location.')
        }
    };

    // Get Geocode Information
    const getGeocodeAsync = async (location: any) => {
        let geocode = await Location.reverseGeocodeAsync(location)
        console.log('geo code', geocode)
        setParams({
            ...params,
            address: `${geocode[0].name} ${geocode[0].district} ${geocode[0].street} ${geocode[0].country}`,
            city: geocode[0].city
        })
    }

    const SaveAddress = async () => {
        console.log('params', params)
        console.log('region', region);
        if (params.label || params.label == 0) {
            dispatchAddress && dispatchAddress({
                type: AddressActionType.add,
                payload: params
            })
            navigation.navigate('Address')
        }
        else {
            Alert.alert('Select A label')
        }
    }

    const getCurrentLocation = () => {
        Location.getCurrentPositionAsync({})
            .then(coords => (
                console.log('coords', coords)
            ))
    }

    const onChangeNote = (text: string) => {
        console.log('text', text);
        setParams({
            ...params,
            note: text
        })
    }

    const onChangeLabel = (text: number) => {
        console.log('label', text)
        setParams({
            ...params,
            label: text
        })
    }

    const onRegionChangeComplete = (coords:regionType)=> {
        console.log('coordds',coords)   
        setRegion(coords)
        getGeocodeAsync({latitude:coords.latitude, longitude:coords.longitude})
    }

    const onRegionChange = ()=>{
        
    }
      
    const onChangeFloor = (text: string) => {
        console.log('floor', text)
    }

    return (

        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS=='android' ? 'padding' : 'height'} style={{ flex: 1 }}>
               <>
                   {
                       isLoading ? 
                       <Loading />
                       :
                       <MapViewer onRegionChange={onRegionChange} onRegionChangeComplete={onRegionChangeComplete} region={region}>
                     
                       </MapViewer>
                   }
                </>
                <Modalize ref={modalizeRef}
                    alwaysOpen={moderateScale(120)}
                    // modalHeight={window.height * 0.6}
                    adjustToContentHeight
                    handlePosition='inside'
                    onPositionChange={()=>{console.log('close')}}
                    // disableScrollIfPossible={true}
                    avoidKeyboardLikeIOS={Platform.select({ ios: true, android: false })}
                    keyboardAvoidingOffset={2}
                    keyboardAvoidingBehavior="height"
                    modalStyle={{backgroundColor:background}}
                    overlayStyle={{
                        backgroundColor: 'rgba(255,255,255,0)'
                    }}
                >
                    <AddressModal onChangeNote={onChangeNote} onChangeLabel={onChangeLabel} onChangeFloor={onChangeFloor} Address={{ address: params.address, city: 'Islamabad' }} />
                </Modalize>
            </KeyboardAvoidingView>
            <View style={styles.bottomContainer}>
                <SaveButton onPress={SaveAddress} />
            </View>
        </View>
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
    bottomContainer: {
        height: moderateScale(90),
        paddingTop:moderateScale(20)
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
    },
    marker:{
        height: 40,
        width: 40,
        position: 'absolute',
        left: '44%',
        top: '42%',
        zIndex: 1000 
    }
})

export default AddAddress

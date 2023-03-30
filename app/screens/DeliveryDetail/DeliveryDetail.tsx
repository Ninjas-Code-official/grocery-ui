import React, {useRef, useState } from 'react'
import { StyleSheet, Platform } from 'react-native'
import { moderateScale } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, AntDesign, TouchableOpacity } from '../../components/Themed'
import MapViewer from "../../components/MapView";
import { Modalize } from 'react-native-modalize'
import { DeliveryDetailModal } from "./components";
import { SaveButton } from "../AddAddress/components";


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

export default function DeliveryDetail(props: any) {

    const navigation = useNavigation()
    const {address} = props.route.params
    const [params, setParams] = useState<paramsType>({
        Id: address ? address.Id : Math.random().toString(),
        label: 0,
        address: address ? address.address : 'Executive Center E11/2 near Dominos',
        note: address ? address.note : '',
        city: 'Islamabad',
        region: address ? address.region : null
    })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const insets = useSafeAreaInsets()

    const modalizeRef = useRef<Modalize>(null)
    const region = {
        latitude: 33.7003371,
        longitude: 72.9739039,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009

    }
    const onOpen = () => {
        setIsModalOpen(true)
        modalizeRef.current?.open()
    }
    const onClose = () => {
        modalizeRef.current?.close()
    }

    const onChangeNote = (text: string) => {
        console.log('text', text);
        setParams({
            ...params,
            note: text
        })
    }

    const onChangeFloor = (text: string) => {
        console.log('floor', text)
    }


    const onChangeLabel = (text: number) => {
        console.log('label', text)
        setParams({
            ...params,
            label: text
        })
    }

    React.useEffect(() => {
        onOpen()
    }, [])

    const SaveAddress = () => {
        props.navigation.pop(2)
    }

    return (
        <>
            <View style={[styles.container, { paddingTop: insets.top }]}>
                <MapViewer
                    region={region}
                    backButton={true}
                >
                     <TouchableOpacity onPress={()=>navigation.goBack()} style={{elevation:2,padding:moderateScale(8),borderRadius:moderateScale(20), left:10, top:20}}>
                    <AntDesign name="arrowleft" />
                    </TouchableOpacity>
                </MapViewer>

                <Modalize
                    FloatingComponent={(<View style={styles.bottomContainer}>
                        <SaveButton onPress={SaveAddress} />
                    </View>)}
                    ref={modalizeRef}
                    onClose={() => console.log('close')}
                    handlePosition='inside'
                    modalTopOffset={100}
                    alwaysOpen={moderateScale(130)}
                    keyboardAvoidingOffset={-250}
                    keyboardAvoidingBehavior={Platform.OS === "ios" ? "padding" : "height"}
                    adjustToContentHeight
                    overlayStyle={{backgroundColor:'rgba(255,255,255,0)'}}
                    // modalHeight={moderateScale(280)}
                // avoidKeyboardLikeIOS
                // onPositionChange={()=>modalizeRef.current?.open()}
                // modalHeight={100}
                // handlePosition='inside'
                // onClosed={()=>{console.log('close')}}
                // handleStyle={{ backgroundColor: Colors.light.lightBackGround }}
                
                // keyboardAvoidingBehavior={Platform.OS === "ios" ? "padding" : "height"}
                // keyboardAvoidingOffset={-250}
                // adjustToContentHeight
                // alwaysOpen={250}
                // alwaysOpen={Platform.OS == "android" ? moderateScale(120) : moderateScale(120)}
                >
                    {isModalOpen && <DeliveryDetailModal onChangeNote={onChangeNote} onChangeLabel={onChangeLabel} onChangeFloor={onChangeFloor} Address={{ address: params.address, city: 'Islamabad' }} title={props.route.params.title} />}

                </Modalize>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15),
        textAlign: 'center'
    },
    searchBar: {
        height: moderateScale(50),
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50)
    },
    imageStyle: {
        width: moderateScale(200),
        height: moderateScale(250)
    },

    bottomContainer: {
        height: moderateScale(90),
        paddingTop: moderateScale(20),
    },
    buttonStyle: {
        width: '80%',
        alignSelf: 'center',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        padding: moderateScale(10)
    },

    marginBottom: {
        marginBottom: moderateScale(20)
    },

})
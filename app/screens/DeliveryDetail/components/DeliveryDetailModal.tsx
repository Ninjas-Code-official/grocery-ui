import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { View, Text, TouchableOpacity, FeatherIcon, OutlinedTextField } from '../../../components/Themed';
import { Colors, moderateScale } from '../../../constants';
import { useNavigation } from '@react-navigation/native'

type AddressType = {
    address: string;
    city: string;
}

type LabelType = {
    index: number,
    name: string
}

type DeliveryDetailModalProps = {
    Address?: AddressType;
    title:string
    onChangeNote?: (text: string) => void
    onChangeFloor?: (text: string) => void
    onChangeLabel?: (text: number) => void
}

const labels = [{ index: 0, name: 'Home' }, { index: 1, name: 'Work' }, { index: 2, name: 'Other' }]

export const DeliveryDetailModal = (props: DeliveryDetailModalProps) => {
    
    const navigation = useNavigation()
    const {Address} = props
    const [selectedLabel, setSelectedLabel] = useState<LabelType>(labels[0])
    const setLabel = (label: LabelType) => {
        setSelectedLabel(label)
        props.onChangeLabel && props.onChangeLabel(label.index)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.title}</Text>
            <TouchableOpacity activeOpacity={0.9} onPress={() => {navigation.navigate('SearchPlace',{backScreen:'Add', title:'Delivery Details', defaultAddress:Address?.address})}} style={styles.cardContainer}>
                <View>
                    <FeatherIcon name={'map-pin'} size={24} />
                </View>
                <View style={styles.detailsContainer}>
                <Text style={styles.cardTextTitle}>{Address?.address}</Text>
                    <Text style={styles.cardTextSub}>{Address?.city}</Text>
                </View>
                    <FeatherIcon name="edit-2" size={24} />
            
            </TouchableOpacity>
            <View style={styles.inputContainer1}>
                <OutlinedTextField
                    label="Floor/Unit #"
                    placeholder="Floor/Unit #"
                    labelFontSize={15}
                    value={''}
                    activeLineWidth={1}
                    tintColor={Colors.dark.placeholderText}
                    lineWidth={1}
                    inputContainerStyle={{ height: moderateScale(50) }}
                    style={{ fontWeight: '700' }}
                    // onChangeText={props.onChangeFloor}
                // formatText={this.formatText}
                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
            </View>

            <View style={styles.inputContainer2}>
                <OutlinedTextField
                    label="(Optional) Note to Rider"
                    labelFontSize={15}
                    placeholder="(Optional) Note to Rider"
                    value={''}
                    activeLineWidth={1}
                    tintColor={Colors.dark.placeholderText}
                    lineWidth={1}
                    style={{ fontWeight: '700' }}
                    // onChangeText={props.onChangeNote}
                // inputContainerStyle={{height:moderateScale(100)}}
                // formatText={this.formatText}
                // onSubmitEditing={this.onSubmit}
                // ref={this.fieldRef}
                />
            </View>
            <View>
                <Text style={styles.titleText}>Label as</Text>
                <View style={styles.labelContainer}>
                    {
                        labels.map((label, index) => (
                            <TouchableOpacity activeOpacity={0.9} onPress={() => { setLabel(label) }} key={index} style={[styles.labelButton, { backgroundColor: selectedLabel ? selectedLabel?.index == index ? Colors.light.primary : '#fff' : '#fff' }]}>
                            <Text style={[styles.labelText, { color: selectedLabel?.index == index ? '#fff' : Colors.light.primary }]}>{label.name}</Text>
                        </TouchableOpacity>
                        ))
                    }
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
        justifyContent: 'space-evenly',
    },
    cardContainer: {
        flexDirection: 'row',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(10),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
        padding: moderateScale(10),
        alignItems:'center',
        justifyContent:'space-between'
    },
    detailsContainer: {
        justifyContent: 'center',
        width:'80%',
        paddingLeft: moderateScale(15)
    },
    labelButton: {
        padding: moderateScale(10),
        borderRadius: moderateScale(20),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: moderateScale(10)
    },
    inputContainer2: {
        marginTop: moderateScale(10),
    },
    inputContainer1: {
        marginTop: moderateScale(20),
    },
    topContainer: {
        height: moderateScale(40),
        justifyContent: 'center',
    },
    middleContainer: {
        height: moderateScale(80),
        justifyContent: 'space-evenly',
    },
    bottomContainer: {
        padding: moderateScale(2),
        height: moderateScale(45),
        marginBottom: moderateScale(20),
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(10),
    },
    titleText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: moderateScale(15)
    },
    cardTextTitle: {
        fontFamily: 'OpenSans-Bold',
    },
    cardTextSub: {
        fontFamily: 'OpenSans-Regular',
    },
    labelText: {
        fontFamily: 'OpenSans-SemiBold',
        color: Colors.light.primary
    }
})
import { useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { StyleSheet, SectionList, FlatList } from 'react-native';

import { ItemCard } from './components';
import { Text, View, useThemeColor, TouchableOpacity } from '../../components/Themed';
import CartButton from '../../components/CartButton';

import { useStore } from '../../contexts';
import { Colors, moderateScale, verticalScale } from '../../constants';

const renderSectionHeader = ({ section }) => (<Text style={styles.sectionTitle}>{section.title}</Text>)

const renderSection = ({ item, section, index }) => {
  if (index % 2 === 0) {
    return (<View style={{ flexDirection: 'row' }}>
      <ItemCard {...item} />
      {section.data[index + 1] ? <ItemCard {...section.data[index + 1]} /> : <View style={{ flex: 1 }} />}
    </View>)
  }
  return <View />
}

function ItemsScreen() {
  const flatListRef = useRef(null)
  const sectionListRef = useRef(null)
  const [currentSectionId, setCurrentSectionId] = useState(null)
  const [buttonClicked, buttonClickedSetter] = useState(false)
  const backgroundColor = useThemeColor({ light: undefined, dark: undefined }, 'background');
  const color = useThemeColor({ light: undefined, dark: undefined }, 'text');
  const route = useRoute()
  const { data } = useStore()
  const { categories } = data || {}
  const category = categories?.find(category => category.id === route.params?.id)

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (
      currentSectionId !== viewableItems[0].section.title &&
      buttonClicked === false
    ) {
      setCurrentSectionId(viewableItems[0].section.id)
      scrollToNavbar(viewableItems[0].section.id)
    }
  }

  const onScrollEndSnapToEdge = () => {
    buttonClickedSetter(false)
  }

  const scrollToNavbar = (id: any) => {
    const index = category?.data.findIndex(sC => sC.id === id)
    if (flatListRef != null) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index,
        viewPosition: 0.5
      })
    }
  }

  const scrollToSection = (index: number) => {
    if (sectionListRef != null) {
      sectionListRef.current?.scrollToLocation({
        animated: true,
        sectionIndex: index,
        itemIndex: 0,
        viewOffset: 0,
        viewPosition: 0
      })
    }
  }

  const changeIndex = (id: any) => {
    const index = category?.data.findIndex(sC => sC.id === id)
    if (currentSectionId !== id) {
      setCurrentSectionId(id)
      buttonClickedSetter(true)
      scrollToSection(index)
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          backgroundColor
        }}
        data={category?.data || []}
        ref={flatListRef}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.barTitle}
            onPress={() => { changeIndex(item.id) }}>
            <Text
              style={{
                fontFamily: 'OpenSans-SemiBold',
                fontSize: verticalScale(9),
                color: item.id === currentSectionId ?
                  Colors.light.primary : color
              }}>{item.title}</Text>
            {item.id === currentSectionId && <View style={{
              height: 3, borderRadius: 2, backgroundColor: Colors.light.primary
            }} />}

          </TouchableOpacity>
        )}
      />
      <SectionList
        style={{ backgroundColor }}
        ref={sectionListRef}
        contentContainerStyle={{
          marginLeft: moderateScale(10)
        }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        sections={category?.data || []}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
        removeClippedSubviews
        onViewableItemsChanged={onViewableItemsChanged}
        onScrollEndDrag={event => {
          onScrollEndSnapToEdge()
        }}
        onMomentumScrollEnd={event => {
          onScrollEndSnapToEdge()
        }}
      />
      <CartButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: verticalScale(12),
    fontWeight: 'bold',
    paddingVertical: moderateScale(10)
  },
  barTitle: {
    height: 50,
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  }
});

export default ItemsScreen
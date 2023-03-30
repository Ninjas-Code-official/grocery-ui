import React from 'react'
import CategoryHeader from './CategoryHeader'
import { Item } from './Item'
import { ScrollView, View } from '../../../components/Themed'
import { CategoryType, ItemType } from '../../../../types'
import { scale, verticalScale } from '../../../constants'
import { useStore } from '../../../contexts'

export const Footer = () => {
    const { loading, data } = useStore()
    if (loading) return null
    const { categories } = data || {}

    return (
        <View>
            {categories?.map((category: CategoryType) => {
                const items = category.data?.map(subCategory => subCategory?.data).flat()
                return (<View key={category.title}>
                    <CategoryHeader title={category.title} id={category.id} />
                    {/* can we use flatlist here*/}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            marginTop: verticalScale(2),
                            paddingLeft: scale(12)
                        }}>
                        {items?.slice(0, 10).map((item: ItemType) => <Item key={item.id} {...item} />)}
                    </ScrollView>
                </View>)
            })}
        </View>
    )
}


import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native'



function SectionItems({ item, navigation }){

const onPressViewItem = () => {}

function sectionItemsItem({ item }){
return (
<View style={styles.section_items_item}>
<Image
    style={styles.item_image}
    source={{uri: item.item_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.item_title} numberOfLines={1}>{item.item_title}</Text>
<Text style={styles.item_description}>{item.item_description}</Text>
</View>
<TouchableOpacity  onPress={onPressViewItem}>
    <View style={styles.view_item}>{'View Item'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.section_items}
    data={item}
    renderItem={sectionItemsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default SectionItems;

const styles = StyleSheet.create({
    \"item_image\": {
        \"width\": \"100vw\",
        \"height\": \"100vw\",
        \"marginTop\": 5,
        \"backgroundColor\": \"#59E463\",
        \"margin\": \"5px\",
        \"padding\": \"2px\",
        \"fontFamily\": \"monospace\"
    },
    \"item_title\": {
        \"flex\": 1,
        \"color\": \"#06A38A\",
        \"fontSize\": 15,
        \"fontWeight\": \"400\",
        \"paddingHorizontal\": 2,
        \"marginHorizontal\": 10,
        \"marginTop\": 5,
        \"margin\": \"5px\",
        \"padding\": \"2px\",
        \"fontFamily\": \"monospace\"
    },
    \"item_description\": {
        \"fontSize\": 12,
        \"fontWeight\": \"250\",
        \"paddingHorizontal\": 2,
        \"marginHorizontal\": 10,
        \"marginTop\": 5,
        \"color\": \"#0E3B42\",
        \"margin\": \"5px\",
        \"padding\": \"2px\",
        \"fontFamily\": \"monospace\"
    },
    \"view_item\": {
        \"flex\": 1,
        \"padding\": \"2px\",
        \"margin\": \"5px\",
        \"textAlign\": \"center\",
        \"backgroundColor\": \"#1ACDA5\",
        \"color\": \"white\",
        \"fontFamily\": \"monospace\"
    }
});
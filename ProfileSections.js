import React, { useState } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'

import SectionItems from './SectionItems'

function ProfileSections({ item, navigation }){



function profileSectionsItem({ item }){
return (
<View style={styles.profile_sections_item}>
<Text style={styles.section_title} numberOfLines={1}>{item.section_title}</Text>
<SectionItems item={'section_items' in item ? item.section_items: item} navigation={navigation}/>
<Text style={styles.section_title} numberOfLines={1}>{item.section_title}</Text>
</View>
)}

return (
<FlatList
    style={styles.profile_sections}
    data={item}
    renderItem={profileSectionsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default ProfileSections;

const styles = StyleSheet.create({
    \"section_title\": {
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
    }
});
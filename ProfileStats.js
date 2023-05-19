import React, { useState } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'



function ProfileStats({ item, navigation }){



function profileStatsItem({ item }){
return (
<View style={styles.profile_stats_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.stat_label} numberOfLines={1}>{item.stat_label}</Text>
<Text style={styles.stat_value} numberOfLines={1}>{item.stat_value}</Text>
</View>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.profile_stats}
    data={item}
    renderItem={profileStatsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default ProfileStats;

const styles = StyleSheet.create({
    \"stat_label\": {
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
    \"stat_value\": {
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
import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, Image, StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './profile_data'
import ProfileStats from './ProfileStats'
import ProfileSections from './ProfileSections'

function Profile({ navigation, route }){ 
const url = (api.profile ?? \"profile/\") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state

const onPressEditProfile = () => {}

async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.profile} showsVerticalScrollIndicator={false}>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.user_title} numberOfLines={1}>{item.user_title}</Text>
</View>
<TouchableOpacity  onPress={onPressEditProfile}>
    <View style={styles.edit_profile}>{'Edit Profile'}</View>
</TouchableOpacity>
</View>
<ProfileStats item={'profile_stats' in item ? item.profile_stats: item} navigation={navigation}/>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.user_title} numberOfLines={1}>{item.user_title}</Text>
</View>
<TouchableOpacity  onPress={onPressEditProfile}>
    <View style={styles.edit_profile}>{'Edit Profile'}</View>
</TouchableOpacity>
</View>
<ProfileSections item={'profile_sections' in item ? item.profile_sections: item} navigation={navigation}/>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.user_title} numberOfLines={1}>{item.user_title}</Text>
</View>
<TouchableOpacity  onPress={onPressEditProfile}>
    <View style={styles.edit_profile}>{'Edit Profile'}</View>
</TouchableOpacity>
</ScrollView>
)}

export default Profile;

const styles = StyleSheet.create({
    \"center\": {
        \"flex\": 1,
        \"justifyContent\": \"center\",
        \"alignItems\": \"center\",
        \"margin\": \"5px\",
        \"padding\": \"2px\",
        \"fontFamily\": \"monospace\"
    },
    \"user_image\": {
        \"width\": \"100vw\",
        \"height\": \"100vw\",
        \"marginTop\": 5,
        \"backgroundColor\": \"#59E463\",
        \"margin\": \"5px\",
        \"padding\": \"2px\",
        \"fontFamily\": \"monospace\"
    },
    \"user_name\": {
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
    \"user_title\": {
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
    \"edit_profile\": {
        \"flex\": 1,
        \"padding\": \"2px\",
        \"margin\": \"5px\",
        \"textAlign\": \"center\",
        \"backgroundColor\": \"#1ACDA5\",
        \"color\": \"white\",
        \"fontFamily\": \"monospace\"
    }
});
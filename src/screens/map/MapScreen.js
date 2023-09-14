import { View, Text, Image, StatusBar, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './MapScreenStyle'
import { SafeAreaView } from 'react-native-safe-area-context'

const MapScreen = () => {
  return (
    <>
      {/* <StatusBar backgroundColor={'transparent'} /> */}
      <View style={{ flex: 1 }}>
        <Image style={styles.map} source={require('../../assets/map.png')} />
      </View>
    </>
  )
}

export default MapScreen;
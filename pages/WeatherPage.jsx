import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { Icon } from 'react-native-vector-icons/Entypo'
const WeatherPage = () => {
  return (
    <View>
      <ImageBackground source={require('../assets/images/haeundae02.jpg')} style={styles.haeundaeImg}>
        <View style={styles.headerIcon}>
          <Icon name='chevron-left' size={20} />
        </View>
      </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
    haeundaeImg : {
      width: 420, 
      height: 268, 
      opacity: 0.8
    },
    headerIcon : {
      width: 100,
      height: 20,
      backgroundColor: '#000'
    }
})
export default WeatherPage
import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Ionicons'
import WeatherIcon from 'react-native-vector-icons/Feather'
const WeatherPageHeader = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require('../assets/images/haeun.png')} style={styles.haeundaeImg} imageStyle={{opacity:0.75}}>
        <View style={styles.headerIconBox}>
            <TouchableOpacity onPress={()=>navigation.push('FirstPage')}>
              <Icon name="chevron-small-left" size={45} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon2 name="search" size={25} color="#fff" />
            </TouchableOpacity>
        </View>
        <View style={styles.locationNameBox}>
            <Text style={styles.locationBigText}>해운대 해수욕장</Text>
            <Text style={styles.locationSmallText}>부산 해운대구 우동</Text>
        </View>
        <View style={styles.temperatureBox}>
          <WeatherIcon name="sun" size={40} color="#fff" style={styles.sunIcon} />
          <Text style={styles.temperatureBigText}>30˚</Text>
        </View>
        <View style={styles.lowHigh}>
          <Text style={styles.lowHighText}>22˚ / 33˚</Text>
        </View>
      </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
    haeundaeImg : {
      width: 420, 
      height: 283
    },
    headerIconBox : {
      height: 45,
      marginTop: 8,
      marginLeft: 8,
      marginRight: 25,
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      //backgroundColor:'#eee'
    },
    locationNameBox:{
      marginTop: 15,
      alignItems:'center',
      //backgroundColor:'#eee'
    },
    locationBigText:{
      color:"#fff",
      fontSize: 25,
      fontWeight: '900'
    },
    locationSmallText:{
      color:"#fff",
      fontSize: 15,
    },
    temperatureBox:{
      marginTop:10,
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    sunIcon:{
      marginLeft:-40
    },
    temperatureBigText:{
      color: '#fff',
      fontSize: 70,
      fontWeight:'bold',
      marginLeft: 20
    },
    lowHigh:{
      alignItems:'center',
      marginTop: -5
    },
    lowHighText:{
      color: '#fff',
      fontSize: 17
    }
})
export default WeatherPageHeader
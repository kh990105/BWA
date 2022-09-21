import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Ionicons'
import WeatherIcon from 'react-native-vector-icons/Feather'


<<<<<<< HEAD
const WeatherPageHeader = ({navigation, route, highLow, NWeather,Tmx,Tmn}) => {
=======
const WeatherPageHeader = ({navigation, route, highLow, NWeather}) => {
>>>>>>> 4df2ed85120ae1c8cfb9c496c0eaf58e8092a2a8
  

  return NWeather.length !== 0 && highLow.length !== 0 ? (
    <View style={styles.headerContainer}>
      <ImageBackground source={require('../assets/images/haeun.png')} style={styles.haeundaeImg} imageStyle={{opacity:0.75}}>
        <View style={styles.headerIconBox}>
            <TouchableOpacity onPress={()=>navigation.push('InitialPage')}>
              <Icon name="chevron-small-left" size={45} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.push('SearchPage')}>
            <Icon2 name="search" size={25} color="#fff" style={{marginRight:'3%'}} />
            </TouchableOpacity>
        </View>
        <View style={styles.locationNameBox}>
            <Text style={styles.locationBigText}>{route[0]}</Text>
        </View>
        <View style={styles.temperatureBox}>
          <WeatherIcon name="sun" size={40} color="#fff" style={styles.sunIcon} />
          <Text style={styles.temperatureBigText}>{NWeather[24].fcstValue}˚</Text>
        </View>
        <View style={styles.lowHigh}>
          <Text style={styles.lowHighText}>{Math.round(Tmn)}˚ / {Math.round(Tmx)}˚</Text>
        </View>
      </ImageBackground>
    </View>
  ): (<View><Text>로딩중</Text></View>)
}



const styles = StyleSheet.create({
    headerContainer: {
      width: '100%'
    },
    haeundaeImg : {
      width: '100%', 
      height: 283
    },
    headerIconBox : {
      width:'100%',
      height: 45,
      marginTop: 8,
      marginRight: 50,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    locationNameBox:{
      marginTop: 15,
      alignItems:'center',
      //backgroundColor:'#eee'
    },
    locationBigText:{
      color:"#fff",
      fontSize: 30,
      fontWeight: '700'
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
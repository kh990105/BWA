import React, {useState, useEffect} from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Ionicons'
import WeatherIcon from 'react-native-vector-icons/Feather'
import axios from 'axios'

const WeatherPageHeader = ({navigation, route}) => {
  console.log("테스트", route)
  const dt = new Date();
  const CurrentTime = (dt.getHours())+":"+dt.getMinutes()+":"+dt.getSeconds()
  const year = dt.getFullYear();
  const month = ('0' + (dt.getMonth() + 1)).slice(-2);
  const day = ('0' + dt.getDate()).slice(-2);
  const time = dt.getHours()+"00"
  const Atime = dt.getHours()-1+"30"
  const dateString = year + month + day;
  const baseDate = (year + month + day) - 1;

  const serviceKey = 'Y4VLrNy6hcMz2TnhyK3%2BtCKiWrFOwWhhxg1R%2FgBtd9B1ty%2Fe%2FQz2z89s2e4IYd1p8hfkGw3lViB%2FGddDujE2vA%3D%3D'

  const [NWeather, setNWeather] = useState([])
  const [highLow, setHighLow] = useState([])

  useEffect(()=>{
    const WPa = async ()=>{
        const NWeather = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getUltraSrtFcstBeach?beach_num=304&base_date=${dateString}&base_time=${Atime}&ServiceKey=${serviceKey}&dataType=JSON&numOfRows=100`);
        console.log(NWeather);
        setNWeather(NWeather.data.response.body.items.item);
      } 
      WPa()
  },[]);

  useEffect(()=>{
    const WPb = async ()=>{
      const highLow = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?beach_num=304&base_date=${baseDate}&base_time=2300&ServiceKey=${serviceKey}&dataType=JSON&numOfRows=279`);
      console.log(highLow);
      setHighLow(highLow.data.response.body.items.item);
    } 
    WPb()
  },[]);

  return NWeather.length !== 0 && highLow.length !== 0 ? (
    <View style={styles.headerContainer}>
      <ImageBackground source={require('../assets/images/haeun.png')} style={styles.haeundaeImg} imageStyle={{opacity:0.75}}>
        <View style={styles.headerIconBox}>
            <TouchableOpacity onPress={()=>navigation.push('InitialPage')}>
              <Icon name="chevron-small-left" size={45} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.push('SearchPage')}>
              <Icon2 name="search" size={25} color="#fff" />
            </TouchableOpacity>
        </View>
        <View style={styles.locationNameBox}>
            <Text style={styles.locationBigText}>{route[0]}</Text>
            <Text style={styles.locationSmallText}>부산 해운대구 우동</Text>
        </View>
        <View style={styles.temperatureBox}>
          <WeatherIcon name="sun" size={40} color="#fff" style={styles.sunIcon} />
          <Text style={styles.temperatureBigText}>{NWeather[24].fcstValue}˚</Text>
        </View>
        <View style={styles.lowHigh}>
          <Text style={styles.lowHighText}>{Math.round(highLow[84].fcstValue)}˚ / {Math.round(highLow[193].fcstValue)}˚</Text>
        </View>
      </ImageBackground>
    </View>
  ): (<View><Text>로딩중</Text></View>)
}



const styles = StyleSheet.create({
    headerContainer: {
      marginTop: 30
    },
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
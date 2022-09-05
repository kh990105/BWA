import React, { useEffect,useState } from 'react'
import { ScrollView, View, Text, StyleSheet, BackHandler } from 'react-native'
import WeatherIcon from 'react-native-vector-icons/Feather'
import axios from 'axios'


const TodayTemperature = () => {
    // 하늘상태     
  const skycode = 1;

  switch(skycode) {
    case 1:
        console.log('sun');
        break;
    default:
        console.log('cloud');
  }

//강수형태 (단기)
  const PTYcode = 4;
  
  switch(PTYcode) {
    case 0:
        console.log('없음');
        break;
    case 1:
        console.log('cloud-rain');
        break;
    case 2:
        console.log('비/눈');
        break;
    case 3:
        console.log('cloud-snow');
        break;
    case 4:
        console.log('cloud-drizzle');
        break;
  }



    const dt = new Date();
    const year = dt.getFullYear();
    const month = ('0' + (dt.getMonth() + 1)).slice(-2);
    const day = ('0' + dt.getDate()).slice(-2);
    const baseDate = (year + month + day) - 1;
    const [weather,setWeather] = useState([]);

    const serviceKey = 'qk9nBBzMQRaV836surNRuBQcZb4cadI7MSWXH5dFl8sqsfuwN8xa3VFVMkb4whG8MnFIEYrCTs0cxf%2B1cVcttQ%3D%3D'
  
    useEffect(()=>{
        const TdWeather = async ()=>{
            const weather = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?serviceKey=${serviceKey}&dataType=JSON&numOfRows=266&base_date=${baseDate}&base_time=2300&beach_num=304`);
            console.log(weather.data.response.body.items.item);
            setWeather(weather.data.response.body.items.item)
          }
          TdWeather()
    },[]);

  return weather.length !== 0 ? (
    <View style={styles.container}>

        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={
                ()=> {console.log('Scrolling is End')}
        }>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{(weather[109].fcstTime).substr(0,2)}:00</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[109].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{(weather[121].fcstTime).slice()}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[121].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[133].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[133].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[145].fcstTime}</Text>
                <WeatherIcon name="sun" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[145].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[157].fcstTime}</Text>
                <WeatherIcon name="sun" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[157].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[169].fcstTime}</Text>
                <WeatherIcon name="cloud" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[169].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[181].fcstTime}</Text>
                <WeatherIcon name="cloud-drizzle" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[181].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[193].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[193].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[205].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[205].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[217].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[217].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[229].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[229].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[241].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[241].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[253].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[253].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[265].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[265].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[1].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[1].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[13].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[13].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[25].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[25].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[37].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[37].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[49].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[49].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[61].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[61].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[73].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[73].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[85].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[85].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[97].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[97].fcstValue}˚</Text>
            </View>
            <View style={styles.todayTempBox}>
                <Text style={styles.clock}>{weather[109].fcstTime}</Text>
                <WeatherIcon name="cloud-rain" size={35} color="#fff" />
                <Text style={styles.smallTemp}>{weather[109].fcstValue}˚</Text>
            </View>


        </ScrollView>
    </View>
  ): (<View><Text style={{fontSize: 100}}>로딩</Text></View>)
}

const styles = StyleSheet.create({
    container:{
        height: 150,
        margin: 20,
        borderRadius: 10,  
        backgroundColor: '#B1C1D3',
        justifyContent:'center',
        flexDirection: 'row',
        alignItems:'center',
    },
    todayTempBox:{
        width: 50,
        height:100,
        marginLeft:13,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
    },
    clock:{
        color: '#fff',
        justifyContent:'center',
        marginBottom: 10
    },
    smallTemp:{
        color:'#fff',
        fontSize: 25,
        marginTop: 8,
        marginLeft: 8
    }
})
export default TodayTemperature
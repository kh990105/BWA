import React, { useEffect,useState } from 'react'
import { ScrollView, View, Text, StyleSheet, BackHandler, ShadowPropTypesIOS } from 'react-native'
import WeatherIcon from 'react-native-vector-icons/Feather'
import axios from 'axios'


const TodayTemperature = () => {

    const dt = new Date();
    const year = dt.getFullYear();
    const month = ('0' + (dt.getMonth() + 1)).slice(-2);
    const day = ('0' + dt.getDate()).slice(-2);
    const baseDate = (year + month + day) - 1;
    const [weather,setWeather] = useState([]);
    const [skyCodeValue, setSkyCodeValue] = useState('')
    const [SKYcode,setSkyCode] = useState([]);
    const[Temp,setTemp] = useState([]);
    const serviceKey = 'qk9nBBzMQRaV836surNRuBQcZb4cadI7MSWXH5dFl8sqsfuwN8xa3VFVMkb4whG8MnFIEYrCTs0cxf%2B1cVcttQ%3D%3D'
    useEffect(()=>{
        const TdWeather = async ()=>{
            const weather = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?serviceKey=${serviceKey}&dataType=JSON&numOfRows=279&base_date=20220907&base_time=2300&beach_num=304`);
            console.log(weather.data.response.body.items.item);
            setWeather(weather.data.response.body.items.item)
          }
          TdWeather()
    },[]);
    for(let i= 0 ; i< weather.length; i++){
        if(weather[i].category ==="TMP"){
            Temp.push(weather[i]);
        }
    }

    for(let i= 0 ; i< weather.length; i++){
        if(weather[i].category==="SKY"){
            SKYcode.push(weather[i]);
        }
    }

    // const skycode = 1
    // switch(skycode) {
    //   case 1:
    //       console.log('sun')
    //       break;
    //   default:
    //       console.log('cloud')
    //       break;
    // }

// //강수형태 (단기)
//   const PTYcode = 4;

//   switch(PTYcode) {
//     case 0:
//         console.log('없음');
//         break;
//     case 1:
//         console.log('cloud-rain');
//         break;
//     case 2:
//         console.log('비/눈');
//         break;
//     case 3:
//         console.log('cloud-snow');
//         break;
//     case 4:
//         console.log('cloud-drizzle');
//         break;
//   }

 const List1 = () => {
    let arr = [];
    Temp.map((x, index)=>{
        arr.push(
            <View style={styles.todayTempBox}>
                    <Text style={styles.clock}>{(Temp[index].fcstTime).substr(0,2)}:00</Text>
                    <WeatherIcon name="sun" size={35} color="#fff" />
                    <Text style={styles.smallTemp}>{Temp[index].fcstValue}˚</Text>
            </View>
        )
    })
    return arr;
 }

  return weather.length !== 0 ? (

    <View style={styles.container}>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <List1 />
           
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
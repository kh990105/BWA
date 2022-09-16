import React,{useState, useEffect} from 'react'
import { ScrollView, StatusBar } from 'react-native'
import WeatherPageHeader from '../components/WeatherPageHeader'
import TodayTemperature from '../components/TodayTemperature'
import TwoMiddleBox from '../components/TwoMiddleBox'

import axios from 'axios'

const WeatherPage = ({navigation, route}) => {
  // console.log(route.params)

  const dt = new Date();
  const CurrentTime = (dt.getHours())+":"+dt.getMinutes()+":"+dt.getSeconds()
  const year = dt.getFullYear();
  const month = ('0' + (dt.getMonth() + 1)).slice(-2);
  const day = ('0' + dt.getDate()).slice(-2);
  const Atime = dt.getHours()-1+"30"
  const dateString = year + month + day;
  const baseDate = (year + month + day) - 1;

  const serviceKey = 'Y4VLrNy6hcMz2TnhyK3%2BtCKiWrFOwWhhxg1R%2FgBtd9B1ty%2Fe%2FQz2z89s2e4IYd1p8hfkGw3lViB%2FGddDujE2vA%3D%3D'
  const serviceKey1 = 'j4usPa71r/xJpsTJYSPScw=='
  const [NWeather, setNWeather] = useState([])
  const [highLow, setHighLow] = useState([])
  const [now, setNow] = useState([])
  
  const [Beach, setBeach] = useState([])
  const [tide, setTide] = useState([])
  const [SKYcode,setSkyCode] = useState([]);
  const[Temp,setTemp] = useState([]);

  /**헤더페이지 */
          useEffect(()=>{
            const WPa = async ()=>{
                const NWeather = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getUltraSrtFcstBeach?beach_num=${route.params[1]}&base_date=${dateString}&base_time=${Atime}&ServiceKey=${serviceKey}&dataType=JSON&numOfRows=100`);
                // console.log(NWeather);
                setNWeather(NWeather.data.response.body.items.item);
              }
            const WPb = async ()=>{
                const highLow = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?beach_num=${route.params[1]}&base_date=${baseDate}&base_time=2300&ServiceKey=${serviceKey}&dataType=JSON&numOfRows=279`);
                // console.log(highLow);
                setHighLow(highLow.data.response.body.items.item);
              } 
              WPa(),WPb()
          },[]);
  /**가운데 박스 */
            useEffect(()=>{
              const a = async ()=>{
                  const Beach = await axios.get( ` http://www.khoa.go.kr/api/oceangrid/buObsRecent/search.do?ServiceKey=${serviceKey1}&ObsCode=TW_0062&ResultType=json`);
                  // console.log(Beach.data.result.data);
                  setBeach(Beach.data.result.data)
                }
              const b = async ()=>{
                  const tide = await axios.get(` http://www.khoa.go.kr/api/oceangrid/tideObsPreTab/search.do?ServiceKey=${serviceKey1}&ObsCode=DT_0061&Date=20220904&ResultType=json`)
                  // console.log(tide)
                  setTide(tide.data.result.data)
              }
              a(),b()
          },[]);

          useEffect (()=>{
  
          },[]);

          for(let i= 0 ; i< highLow.length; i++){
            if(highLow[i].category ==="TMP"){
                Temp.push(highLow[i]);
            }
        }
    
        for(let i= 0 ; i< highLow.length; i++){
            if(highLow[i].category==="SKY"){
                SKYcode.push(highLow[i]);
            }
        }

  return (
    <ScrollView>
      <StatusBar/>
      <WeatherPageHeader navigation={navigation} route={route.params} NWeather = {NWeather} highLow = {highLow} /> 
      <TodayTemperature  Temp={Temp} SKYcode={SKYcode} />
      <TwoMiddleBox  route={route.params} tide={tide} Beach={Beach} NWeather = {NWeather} CurrentTime={CurrentTime}/> 
    </ScrollView>
  )
}


export default WeatherPage
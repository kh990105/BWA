import React from 'react'
import { ScrollView, StatusBar } from 'react-native'
import WeatherPageHeader from '../components/WeatherPageHeader'
import TodayTemperature from '../components/TodayTemperature'
import TwoMiddleBox from '../components/TwoMiddleBox'

const WeatherPage = ({navigation, route}) => {
  console.log(route.params);
  return (
    <ScrollView>
      <StatusBar/>
      <WeatherPageHeader navigation={navigation} route={route.params} /> 
      <TodayTemperature />
      <TwoMiddleBox />
    </ScrollView>
  )
}


export default WeatherPage
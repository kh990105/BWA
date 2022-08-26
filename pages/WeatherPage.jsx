import React from 'react'
import { ScrollView, StatusBar } from 'react-native'
import WeatherPageHeader from '../components/WeatherPageHeader'
import TodayTemperature from '../components/날씨페이지/TodayTemperature'
import TwoMiddleBox from '../components/TwoMiddleBox'
const WeatherPage = ({navigation}) => {
  return (
    <ScrollView>
      <StatusBar/>
      <WeatherPageHeader navigation={navigation} />
      <TodayTemperature />
      <TwoMiddleBox />
    </ScrollView>
  )
}


export default WeatherPage
import React from 'react'
import { View } from 'react-native'
import WeatherPageHeader from '../components/WeatherPageHeader'
import TodayTemperature from '../components/TodayTemperature'
import TwoMiddleBox from '../components/TwoMiddleBox'
const WeatherPage = () => {
  return (
    <View>
      <WeatherPageHeader />
      <TodayTemperature />
      <TwoMiddleBox />
    </View>
  )
}


export default WeatherPage
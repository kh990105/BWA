import React from 'react'
import { View, StatusBar } from 'react-native'
import WeatherPageHeader from '../components/WeatherPageHeader'
import TodayTemperature from '../components/TodayTemperature'
import TwoMiddleBox from '../components/TwoMiddleBox'

const WeatherPage = ({navigation}) => {
  return (
    <View>
      <StatusBar/>
      <WeatherPageHeader navigation={navigation} />
      <TodayTemperature />
      <TwoMiddleBox />
    </View>
  )
}


export default WeatherPage
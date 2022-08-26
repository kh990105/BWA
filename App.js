import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import FirstPage from './pages/FirstPage';
import WeatherPage from './pages/WeatherPage';

import axios from 'axios';



const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
    const a = async ()=>{
        const response = await axios.get(`http://apis.data.go.kr/1192000/service/OceansBeachInfoService1/getOceansBeachInfo1?pageNo=1&numOfRows=10&resultType=json&SIDO_NM=부산&ServiceKey=qk9nBBzMQRaV836surNRuBQcZb4cadI7MSWXH5dFl8sqsfuwN8xa3VFVMkb4whG8MnFIEYrCTs0cxf%2B1cVcttQ%3D%3D&`);
        console.log('데이터받아왔니??');
        console.log('제주: ', response.data.getOceansBeachInfo.item);
      }
      a();
    }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
            <Stack.Navigator initialRouteName="FirstPage">
              <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown: false }}/>
              <Stack.Screen name="WeatherPage" component={WeatherPage} options={{headerShown: false }}/>
            </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

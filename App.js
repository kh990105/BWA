import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import InitialPage from './pages/InitialPage'
import WeatherPage from './pages/WeatherPage';





const Stack = createNativeStackNavigator();

export default function App() {
    
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
          <Stack.Navigator initialRouteName="InitialPage">
            <Stack.Screen name="InitialPage" component={InitialPage} options={{headerShown: false }}/>
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

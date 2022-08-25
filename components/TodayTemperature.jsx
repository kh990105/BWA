import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WeatherIcon from 'react-native-vector-icons/Feather'
const TodayTemperature = () => {
  return (
    <View style={styles.container}>
        <View style={styles.todayTempBox}>
            <Text style={styles.clock}>12:00</Text>
            <WeatherIcon name="sun" size={35} color="#fff" />
            <Text style={styles.smallTemp}>30˚</Text>
        </View>
        <View style={styles.todayTempBox}>
            <Text style={styles.clock}>13:00</Text>
            <WeatherIcon name="sun" size={35} color="#fff" />
            <Text style={styles.smallTemp}>33˚</Text>
        </View>
        <View style={styles.todayTempBox}>
            <Text style={styles.clock}>14:00</Text>
            <WeatherIcon name="cloud" size={35} color="#fff" />
            <Text style={styles.smallTemp}>30˚</Text>
        </View>
        <View style={styles.todayTempBox}>
            <Text style={styles.clock}>15:00</Text>
            <WeatherIcon name="cloud-drizzle" size={35} color="#fff" />
            <Text style={styles.smallTemp}>26˚</Text>
        </View>
        <View style={styles.todayTempBox}>
            <Text style={styles.clock}>16:00</Text>
            <WeatherIcon name="cloud-rain" size={35} color="#fff" />
            <Text style={styles.smallTemp}>25˚</Text>
        </View>
    </View>
  )
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
        justifyContent:'space-around'
    },
    todayTempBox:{
        width: 50,
        height:100,
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
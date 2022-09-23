import React from 'react'
import { ScrollView, View, Text, StyleSheet} from 'react-native'
import {Feather , Ionicons} from 'react-native-vector-icons'



const TodayTemperature = ({Temp,realSky}) => {
    const skyCode = []
    /**20시 전
        1: sunny-outline
        3: partly-sunny-outline
        4: cloudy-outline

        20시 후
        1: moon-outline
        3,4: cloudy-night-outline 
    */
for(let i= 0; i< realSky.length; i++){
        if(realSky[i].fcstValue==="1" && Number(realSky[i].fcstTime)< 1900){
            skyCode.push('sunny-outline')
        }else if (realSky[i].fcstValue==="3 "&& Number(realSky[i].fcstTime)< 1900){
            skyCode.push('partly-sunny-outline')
        }else if (realSky[i].fcstValue==="4"&& Number(realSky[i].fcstTime)< 1900){
            skyCode.push('cloudy-outline')
        }else if (realSky[i].fcstValue==="1" && Number(realSky[i].fcstTime) >=2000){
            skyCode.push('moon-outline')
        }else{
            skyCode.push('cloudy-night-outline')
        }
}
console.log(skyCode)

 const List1 = () => {
    let arr = [];
    Temp.map((id, index,)=>{
        arr.push(
            <View style={styles.todayTempBox} key={index.toString()} >
                    <Text style={styles.clock}>{(Temp[index].fcstTime).substr(0,2)}:00</Text>
                    <Ionicons name={skyCode[index]} size={35} color="#fff" />
                    <Text style={styles.smallTemp}>{Temp[index].fcstValue}˚</Text>
            </View>
        )
    })
    return arr;
 }

  return (

    <View style={styles.container}>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <List1 />
           
        </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
    container:{
        height: 150,
        marginLeft: 10,
        marginRight:10,
        marginTop:20,
        marginBottom:20,
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
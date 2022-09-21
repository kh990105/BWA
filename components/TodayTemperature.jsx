<<<<<<< HEAD
import React ,{ useState, useEffect}from 'react'
=======
import React from 'react'
>>>>>>> 4df2ed85120ae1c8cfb9c496c0eaf58e8092a2a8
import { ScrollView, View, Text, StyleSheet, BackHandler, ShadowPropTypesIOS } from 'react-native'
import WeatherIcon from 'react-native-vector-icons/Feather'


<<<<<<< HEAD
const TodayTemperature = ({Temp,realSky}) => {
    console.log(realSky)
    const skyCode = []
for(let i= 0; i< realSky.length; i++){
    if(realSky[i]==="1"){
        skyCode.push('sun')
    }else{
        skyCode.push('cloud')
    }
}
console.log(skyCode)
=======

const TodayTemperature = ({Temp, SKYcode}) => {
//     const skycode = 1
//     switch(skycode) {
//       case 1:
//           console.log('sun')
//           break;
//       default:
//           console.log('cloud')
//           break;
//     }

>>>>>>> 4df2ed85120ae1c8cfb9c496c0eaf58e8092a2a8
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
    Temp.map((id, index,id1)=>{
        arr.push(
            <View style={styles.todayTempBox} >
                    <Text style={styles.clock}>{(Temp[index].fcstTime).substr(0,2)}:00</Text>
                    <WeatherIcon name={skyCode[index]} size={35} color="#fff" />
                    <Text style={styles.smallTemp}>{Temp[index].fcstValue}˚</Text>
            </View>
        )
    })
    return arr;
 }

  return Temp.length !== 0 ? (

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
<<<<<<< HEAD
        marginLeft: 10,
        marginRight:10,
        marginTop:20,
        marginBottom:20,
=======
        margin: 15,
>>>>>>> 4df2ed85120ae1c8cfb9c496c0eaf58e8092a2a8
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
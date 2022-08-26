import React from 'react'
import { View, StyleSheet, TextInput, Text, ImageBackground, Pressable, Button } from 'react-native'
import  Icon  from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'


const FirstPage = ({navigation}) => {

  return (
    <View style={st.BigContainer}>
        <View><Pressable><Icon name='menu' size={30} style={{marginTop:50,color:'#94A3B2',marginLeft:30}}/></Pressable></View>
        <View style={st.container}>
            <View style={st.LogoBox}>
                <Text style={st.TextLogo}>BADADA<Icon2 name='hydro-power' size={52} style={{color:'#4E84C0'}}/></Text>
            </View>
                <TextInput style={st.TextInput} placeholder='목적지를 입력해주세요'/>
                    <View style={st.TextSubTitleBox}>
                        <Text style={st.TextSubTitle}> 가장 핫한 해수욕장</Text>
                    </View>
                            <View style={st.Card}>    
                                <Pressable onPress={()=>navigation.push('WeatherPage')}>
                                    <ImageBackground source={require('../assets/images/해운대.jpg')} resizeMode='cover' style={st.CardImage} imageStyle={{ borderRadius: 15}}>
                                    <Text style={st.CardText}>해운대 해수욕장</Text>
                                    </ImageBackground>
                                </Pressable>
                            </View>
                        <View style={st.Card}>
                            <ImageBackground source={require('../assets/images/속초.jpg')} resizeMode='cover' style={st.CardImage} imageStyle={{ borderRadius: 15}}>
                            <Text style={st.CardText}>속초 해수욕장</Text>
                            </ImageBackground>
                        </View>
                        <View style={st.Card}>
                            <ImageBackground source={require('../assets/images/을왕리.jpg')} resizeMode='cover' style={st.CardImage} imageStyle={{ borderRadius: 15}}>
                            <Text style={st.CardText}>을왕리 해수욕장</Text>
                            </ImageBackground>
                        </View>
        </View>
    </View>
  )
}

const st= StyleSheet.create({

    container:{
        width:340,
        flex:1,
        marginLeft:50,
        marginRight:50,
        marginTop:20,
    },
    LogoBox:{
        height: 150,
        alignItems:'center',
        justifyContent:'center'
    },
    TextLogo:{
        fontSize:42,
        fontWeight:'bold',
        color:'#6383A6'
    },
    TextInput:{
        width:340,
        height:68, 
        borderRadius:16, 
        borderWidth:3, 
        borderColor:'#6383A6',
        paddingLeft: 25,
        marginBottom:30
    },
    TextSubTitleBox:{
        width: 300,
        height: 50
    },
    TextSubTitle:{
        fontSize:24,
        fontWeight:'400',
        marginBottom:20,
    },
    Card:{
        width:290,
        height:104,
        marginBottom:18,
    },
    CardImage:{
        width:340,
        height:104,
        justifyContent:'center' 
    },
    CardText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#ffffff',
        textAlign:'center'
    },
})
export default FirstPage
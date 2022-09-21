import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, StatusBar, StyleSheet, TextInput, ImageBackground } from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

const InitialPage = ({navigation}) => {
    
  return (
    <ScrollView style={styles.bigContainer}>
        <StatusBar />
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logoBox}>
                    <Text style={styles.TextLogo}>BADADA</Text>
                    <Icon2 name='hydro-power' size={52} color='#6383A6'/>
                </View>
                <Text style={styles.logoUnder}>지금 가고싶은 해수욕장의 날씨와 정보를 한번에!</Text>
            </View>
            <View style={styles.textInputConatainer}>
                <TouchableOpacity style={styles.TextInput} onPress={()=>navigation.push('SearchPage')} >
                    <Text style={styles.SearchText}>내가 갈 해수욕장의 날씨가 궁금하다면? </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.TextSubTitleBox}>
                <Text style={styles.TextSubTitle}> 바다다가 추천하는 해수욕장</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.Card}>    
                    <TouchableOpacity onPress={()=>navigation.push('WeatherPage',["해운대 해수욕장", 304])} >
                        <ImageBackground source={require('../assets/images/해운대.jpg')} resizeMode='cover' style={styles.CardImage} imageStyle={{ borderRadius: 15}}>
                            <Text style={styles.CardText}>해운대 해수욕장</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.Card}>
                    <TouchableOpacity onPress={()=>navigation.push('WeatherPage',["속초 해수욕장", 201])} >
                        <ImageBackground source={require('../assets/images/속초.jpg')} resizeMode='cover' style={styles.CardImage} imageStyle={{ borderRadius: 15}}>
                            <Text style={styles.CardText}>속초 해수욕장</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.Card}>
                    <TouchableOpacity onPress={()=>navigation.push('WeatherPage',["을왕리 해수욕장", 1])}>
                        <ImageBackground source={require('../assets/images/을왕리.jpg')} resizeMode='cover' style={styles.CardImage} imageStyle={{ borderRadius: 15}}>
                            <Text style={styles.CardText}>을왕리 해수욕장</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    bigContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        marginBottom: 10
    },
    container:{
        marginLeft:50,
        marginRight:50,
        marginTop:50
    },
    logoContainer:{
        height: 150,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor: '#ddd'
    },
    logoBox:{
        flexDirection:'row',
    },
    TextLogo:{
        fontSize:45,
        fontWeight:'bold',
        color:'#6383A6'
    },
    logoUnder:{
        color: '#6383A6',
        fontSize: 13
    },
    textInputConatainer:{
        marginBottom:20,
        alignItems:'center'
    },
    TextInput:{
        width:320,
        height:75, 
        borderRadius:20, 
        borderWidth:3, 
        borderColor:'#6383A6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SearchText:{
        color: "#A1A1A1",
        fontSize: 15
    },
    TextSubTitleBox:{
        width: 300,
        height: 50,
        marginTop:25
    },
    TextSubTitle:{
        fontSize:18,
        fontWeight:'bold'
    },
    cardContainer:{
        width: '100%',
        alignItems:'center'
    },
    Card:{
        width:320,
        height:100,
        marginBottom:18,
        shadowColor: '#000',
        shadowOpacity: 0.5,
    },
    CardImage:{
        width:320,
        height:100,
        justifyContent:'center' 
    },
    CardText:{
        fontSize:22,
        fontWeight:'bold',
        color:'#ffffff',
        textAlign:'center'
    }
})
export default InitialPage
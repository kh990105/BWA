import React,{ useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Emoticon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';

const TwoMiddleBox = () => {

  const dt = new Date();
  const CurrentTime = (dt.getHours())+":"+dt.getMinutes()+":"+dt.getSeconds()
  const year = dt.getFullYear();
  const month = ('0' + (dt.getMonth() + 1)).slice(-2);
  const day = ('0' + dt.getDate()).slice(-2);
  const dateString = year + month + day;


  const [sunset, setSunset] = useState([])
//   const [info, setInfo] = useState([]);

//   console.log('info: ', info);

  const serviceKey = 'Y4VLrNy6hcMz2TnhyK3%2BtCKiWrFOwWhhxg1R%2FgBtd9B1ty%2Fe%2FQz2z89s2e4IYd1p8hfkGw3lViB%2FGddDujE2vA%3D%3D'

    useEffect(()=>{
        const a = async ()=>{
            const sunset = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getSunInfoBeach?serviceKey=${serviceKey}&numOfRows=1&pageNo=10&dataType=JSON&Base_date=${dateString}&beach_num=304`);
            // return sunset.data.response.body.items.item[0];
            console.log(sunset);
          }

          a().then((e)=>setSunset(e));

        }, []);


    
   

  return (
    <>
    <View style={styles.twoBoxContainer}>
            <View style={styles.smallBox}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleBoxText}>현재 날씨</Text>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.rowBox}>
                        <Text style={styles.rowLeftText}>강수량 :</Text>
                        <Text style={styles.rowRightText}>--</Text>
                    </View>
                    <View style={styles.rowBox}>
                        <Text style={styles.rowLeftText}>습도 :</Text>
                        <Text style={styles.rowRightText}>81%</Text>
                    </View>
                    <View style={styles.rowBox}>
                        <Text style={styles.rowLeftText}>풍향 :</Text>
                        <Text style={styles.rowRightText}>남</Text>
                    </View>
                    <View style={styles.rowBox}>
                        <Text style={styles.rowLeftText}>풍속 :</Text>
                        <Text style={styles.rowRightText}>2.4m/s</Text>
                    </View>
                </View>
            </View>
            <View style={styles.smallBox}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleBoxText}>해수욕장 혼잡도</Text>
                </View>
                <View style={styles.emoticonBox}>
                    <Emoticon name='emoticon-cool-outline' size={35} color="#39B25B" />
                    <Emoticon name='emoticon-sad-outline' size={35} color="#BCBCBC" />
                    <Emoticon name='emoticon-angry-outline' size={35} color="#BCBCBC" />
                </View>
                <View style={styles.emoticonTextBox}>
                    <Text style={styles.emoticonText}> 사람이 456명 있어요!</Text>
                    <Text style={styles.emoticonText}> 놀러가기 딱 좋아요~</Text>
                </View>
                <View>
                    <Text style={styles.currentTimeText}>{CurrentTime} 업데이트</Text>
                </View>
            </View>
    </View>
    <View style={styles.BottomContainer}>
        <View style={styles.BottomBox}>
            <View style={styles.titleBox}>
                <Text style={styles.titleBoxText}>기타 날씨 정보</Text>
            </View>
            <View style={styles.BRowContainer}>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>수온</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>23.9˚</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>파고</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>0.2m</Text>
                </View>
            </View>
            <View style={styles.BRowContainer}>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>미세먼지</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>18 (좋음)</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>초미세먼지</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>12 (좋음)</Text>
                </View>
            </View>
            <View style={styles.BRowContainer}>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>일출</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>{sunset.sunrise}</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>일몰</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>{sunset.sunset}</Text>
                </View>
            </View>
            <View style={styles.BRowContainer}>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>조석정보</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>19:03</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>19:03</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>19:03</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>19:03</Text>
                </View>
            </View>
            <Text style={styles.tideInfoText}>※ 조석정보는 썰물 밀물 썰물 밀물 순으로 제공됩니다.</Text>
        </View>
        {/* <View style={styles.moreInfoBox}>
            <TouchableOpacity>
                <Text style={styles.moreInfoText}>해수욕장 정보가 궁금하다면?</Text>
            </TouchableOpacity>
        </View> */}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    twoBoxContainer:{
        marginLeft: 20,
        marginRight: 20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    smallBox:{
        width: 175,
        height: 175,
        borderColor: "#6383A6",
        borderWidth: 3,
        borderRadius: 10,
        alignItems:'center',
        paddingTop: 10
    },
    titleBox:{
        width: 130,
        height: 27,
        borderColor: '#6383A6',
        borderBottomWidth : 2,
        alignItems:'center'
    },
    titleBoxText:{
        color: '#6383A6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    rowContainer:{
        marginTop:10
    },
    rowBox:{
        width: 140,
        height: 27,
        flexDirection: 'row',
    },
    rowLeftText:{
        width: 70,
        color: '#6383A6'
    },
    rowRightText:{
        width: 70,
        fontWeight: 'bold'
    },
    emoticonBox:{
        width: 160,
        marginTop:15,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    emoticonTextBox:{
        marginTop: 10
    },
    emoticonText:{
        fontSize: 12,
        fontWeight:'bold'
    },
    currentTimeText:{
        color: "#6383A6",
        fontSize: 12,
        marginLeft: 66,
        marginTop: 10
    },
    BottomContainer:{
        marginBottom: 20
    },
    BottomBox:{
         height: 250,
         margin: 20,
         borderRadius: 10, 
         borderColor: "#6383A6",
         borderWidth: 3,
         alignItems:'center',
         paddingTop: 12
    },
    BRowContainer:{
        // backgroundColor: '#ddd',
        borderBottomColor:"#6383A6",
        borderBottomWidth: 1,
        borderStyle:'dashed',
        marginTop:7,
        width: '90%',
        height: '15%',
        flexDirection:'row',
        alignItems:'center'
    },
    BRowBox:{
        flex: 1
    },
    tideInfoText:{
        fontSize: 12,
        marginTop: 10,
        marginLeft: 10,
        alignSelf:'flex-start'
    },
    moreInfoBox:{
        marginLeft: 170,
        marginBottom: 20
    },
    moreInfoText:{
        color: "#6383A6",
        fontWeight: 'bold',
        fontSize: 16
    }

})
export default TwoMiddleBox
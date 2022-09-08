import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Emoticon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
// import BeachList from '../data/BeachList.json'

const TwoMiddleBox = () => {
  // const BeachNum = BeachList

  const dt = new Date();
  const CurrentTime = (dt.getHours())+":"+dt.getMinutes()+":"+dt.getSeconds()
  const year = dt.getFullYear();
  const month = ('0' + (dt.getMonth() + 1)).slice(-2);
  const day = ('0' + dt.getDate()).slice(-2);
  const time = dt.getHours()-1+"30"
  const dateString = year + month + day;
  const wtdate = dateString + dt.getHours() + dt.getMinutes()

  const [Beach, setBeach] = useState([])
  const [tide, setTide] = useState([])
  const [wh,setWh] = useState([])
  const [NWeather, setNWeather] = useState([])
  const [tw,setTw] = useState([])

  const serviceKey = 'j4usPa71r/xJpsTJYSPScw=='
  const serviceKey1 = 'qk9nBBzMQRaV836surNRuBQcZb4cadI7MSWXH5dFl8sqsfuwN8xa3VFVMkb4whG8MnFIEYrCTs0cxf%2B1cVcttQ%3D%3D'
    //console.log(time)
    useEffect(()=>{
        const a = async ()=>{
            const Beach = await axios.get( ` http://www.khoa.go.kr/api/oceangrid/buObsRecent/search.do?ServiceKey=${serviceKey}&ObsCode=TW_0062&ResultType=json`);
            console.log(Beach.data.result.data);
            setBeach(Beach.data.result.data)
          }
          a()
    },[]);

    useEffect (()=>{
        const b = async ()=>{
            const tide = await axios.get(` http://www.khoa.go.kr/api/oceangrid/tideObsPreTab/search.do?ServiceKey=${serviceKey}&ObsCode=DT_0061&Date=20220904&ResultType=json`)
            console.log(tide)
            setTide(tide.data.result.data)
        }
        b()  
    },[]);
    useEffect(()=>{
        const  c= async ()=>{
            const NWeather = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getUltraSrtFcstBeach?beach_num=1&base_date=${dateString}&base_time=${time}&ServiceKey=${serviceKey1}&dataType=JSON&numOfRows=100`);
            console.log(NWeather);
            setNWeather(NWeather.data.response.body.items.item);
          } 
          c()
    },[]);

  return Beach.length !== 0 && tide.length !== 0 && NWeather.length !== 0 ?(
    <>
    <View style={styles.twoBoxContainer}>
            <View style={styles.smallBox}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleBoxText}>현재 날씨</Text>
                </View> 
                {/* <View style={styles.rowContainer}>
                    <View style={styles.rowBox}>
                        <Text style={styles.rowLeftText}>강수확률 :</Text>
                        <Text style={styles.rowRightText}>{NWeather[6].fcstValue}%</Text>
                    </View>
                    <View style={styles.rowBox}>
                        <Text style={styles.rowLeftText}>강수량:</Text>
                        <Text style={styles.rowRightText}>{NWeather[12].fcstValue}</Text>
                    </View>
                    <View style={styles.rowBox}>
                        <Text style={styles.rowLeftText}>습도 :</Text>
                        <Text style={styles.rowRightText}>{NWeather[30].fcstValue}%</Text>
                    </View>
                    <View style={styles.rowBox}>
                        <Text style={styles.rowLeftText}>풍속 :</Text>
                        <Text style={styles.rowRightText}>{NWeather[54].fcstValue}m/s</Text>
                    </View>
                </View> */}
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
                    <Text style={styles.currentTimeText}>{ CurrentTime } 업데이트</Text>
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
                    <Text style={styles.rowRightText}>{Math.round(Beach.water_temp)}˚</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>파고</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>{Math.round(Beach.wave_height*10)/10}m</Text>
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
                    <Text style={styles.rowRightText}>06:02</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>일몰</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>07:32</Text>
                </View>
            </View>
            {/* <View style={styles.BRowContainer}>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowLeftText}>조석정보</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>{(tide[1].tph_time).substring (10,16)}</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>{(tide[2].tph_time).substring (10,16)}</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>{(tide[3].tph_time).substring (10,16)}</Text>
                </View>
                <View style={styles.BRowBox}>
                    <Text style={styles.rowRightText}>{(tide[0].tph_time).substring (10,16)}</Text>
                </View>
            </View> */}
            <Text style={styles.tideInfoText}>※ 조석정보는 썰물 밀물 썰물 밀물 순으로 제공됩니다.</Text>
        </View>
        {/* <View style={styles.moreInfoBox}>
            <TouchableOpacity>
                <Text style={styles.moreInfoText}>해수욕장 정보가 궁금하다면?</Text>
            </TouchableOpacity>
        </View> */}
    </View>
    </>
  ):(<View><Text>메롱</Text></View>)
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
        marginTop: 3,
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
        marginLeft: 70,
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
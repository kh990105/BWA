import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Emoticon from 'react-native-vector-icons/MaterialCommunityIcons'
import LikeIcon from 'react-native-vector-icons/AntDesign'

const TwoMiddleBox = () => {

  const dt = new Date();
  const CurrentTime = (dt.getHours())+":"+dt.getMinutes()+":"+dt.getSeconds()

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
                    <Text style={styles.currentTimeText}>{ CurrentTime } 업데이트</Text>
                </View>
            </View>
    </View>
    <View style={styles.BottomContainer}>
        <View style={styles.BottomBox}>
            <View style={styles.titleBox}>
                <Text style={styles.titleBoxText}>기타 날씨 정보</Text>
            </View>
            <View style={styles.bottomRowContainer}>
                <View style={styles.bottomRowBox}>
                        <Text style={styles.bottomRowLeftText}>수온 :</Text>
                        <Text style={styles.rowRightText}>23.9˚</Text>
                </View>
                <View style={styles.bottomRowBox}>
                        <Text style={styles.bottomRowLeftText}>파고 :</Text>
                        <Text style={styles.rowRightText}>0.2m</Text>
                </View>
            </View>
            <View style={styles.bottomRowContainer}>
                <View style={styles.bottomRowBox}>
                        <Text style={styles.bottomRowLeftText}>미세먼지 :</Text>
                        <Text style={styles.rowRightText}>18 (좋음)</Text>
                </View>
                <View style={styles.bottomRowBox}>
                        <Text style={styles.bottomRowLeftText}>초미세먼지 :</Text>
                        <Text style={styles.rowRightText}>12 (좋음)</Text>
                </View>
            </View>
            <View style={styles.bottomRowContainer}>
                <View style={styles.bottomRowBox}>
                        <Text style={styles.bottomRowLeftText}>일출 :</Text>
                        <Text style={styles.rowRightText}>05:49</Text>
                </View>
                <View style={styles.bottomRowBox}>
                        <Text style={styles.bottomRowLeftText}>일몰 :</Text>
                        <Text style={styles.rowRightText}>19:03</Text>
                </View>
            </View>
            <View style={styles.bottomRowContainer}>
                <View style={{flexDirection:'row',}}>
                        <Text style={styles.bottomRowLeftText}>조석정보 :</Text>
                        <Text style={styles.rowRightText}>00:04 (썰)</Text>
                        <Text style={styles.rowRightText}>06:15 (밀)</Text>
                        <Text style={styles.rowRightText}>12:06 (썰)</Text>
                        <Text style={styles.rowRightText}>18:35 (밀)</Text>
                </View>
            </View>

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
    bottomRowContainer:{
        width: 330,
        //backgroundColor:'blue',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    bottomRowBox:{
        //backgroundColor:'#f55',
        width: 150,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    bottomRowLeftText:{
        width: 80,
        color: '#6383A6'
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
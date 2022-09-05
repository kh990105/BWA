import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native' 
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ArrowIcon from 'react-native-vector-icons/Entypo'
import BeachList from '../data/BeachList.json'


const Item = ({ name }) => {
  return (
    <View style={styles.item}>
      <Icon name='map-marker' size={20} color="#6383A6"/>
      <Text style={styles.locationName}>{name}</Text>
    </View>
  );
};

const renderItem = ({ item }) => <Item name={item.name} />;

const SearchPage =({navigation}) => {
  const [loading,setLoading] = useState('false')
  const [data, setData] = useState(BeachList);
  const [error, setError] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const arrayholder = BeachList;
  
  const searchFunction = (text) => {
      const updatedData = arrayholder.filter((item) => {
      const item_data = `${item.name})`;
      const text_data = text;
      return item_data.indexOf(text_data) > -1;
    });
    setData(updatedData);
    setSearchValue(text)
  };

     // console.log(this.state.searchValue);
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Pressable style={styles.arrowBox} onPress={()=>navigation.push('InitialPage')}>
              <ArrowIcon name="chevron-small-left" size={45} color="#6383A6" />
            </Pressable>
            <SearchBar
              placeholder="목적지를 입력해주세요"
              lightTheme
              round
              inputStyle={{backgroundColor: '#fff'}}
              containerStyle={{ width:360, backgroundColor: '#fff', borderColor: '#6383A6', borderWidth: 2, borderBottomWidth: 2, borderBottomColor: '#6383A6', borderTopColor:'#6383A6', borderTopWidth:2, borderRadius: 20 }}
              inputContainerStyle={{backgroundColor: '#fff'}}
              underlineColorAndroid="transparent"
              value={setSearchValue}
              onChangeText={(text) => searchFunction(text)}
              autoCorrect={false}
            />
        </View>
        
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }

  
export default SearchPage;
  
const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: '#fff'
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row"
  },
  locationName:{
    marginLeft: 10
  },
  arrowBox:{
    justifyContent: 'center'
  },
  searchContainer:{
    flexDirection:'row',
    marginTop: 10
  }
});

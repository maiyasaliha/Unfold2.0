import { View, Text, FlatList, Platform, StyleSheet, TextInput, ActivityIndicator, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CheckboxButton, PurpleView, ToggleBar } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { filter } from 'lodash';


API_URL = Platform.OS === 'ios' ? 'http://192.168.0.31:5000' : 'http://192.168.0.31:5000';


const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [fullData, setFullData] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/getUsers`);
      console.log(response.data);
      setData(response.data);
      setFullData(response.data);
      setIsLoading(false);
      console.log('successfully retrieved users');
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} colour="#5500dc" />
      </View >
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error in fetching data ... Please check your internet connection!</Text>
      </View >
    );
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
  }

  const contains = ({name}, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder='Search'
        placeholderTextColor='#937CA7'
        clearButtonMode='always'
        style={styles.searchbar}
        autoCapitalize='none'
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(query) => handleSearch(query)}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
            <View style={styles.userContainer}>
              <Text style={styles.textName}>{item.name}</Text>
            </View>
        )}
      />
      <ToggleBar />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  searchbar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#D8BFD8",
    borderRadius: 20,
    top: 10
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 30,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontFamily: 'CabinCondensed-Regular',

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})
export default SearchScreen
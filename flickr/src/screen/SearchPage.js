import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Axios from 'axios';

//component
import HeaderComp from '../component/HeaderComp';

const SearchPage = () => {
  const [INPUT, setINPUT] = useState('');
  const [TAGS, setTAGS] = useState('');
  const axios = require('axios');

  const getFlickrTags = () => {
    Axios({
      method: 'GET',
      url: `https://www.flickr.com/services/feeds/photos_public.gne?nojsoncallback=true&tags=${INPUT}&format=json`,
    })
      .then((data) => {
        setTAGS(data.data.items);
      })
      .catch((err) => {
        console.log('GET Tags Error', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.searchContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <Icon name="search" size={20} color={'#c4c4c4'} />
          <TextInput
            style={styles.search}
            placeholderTextColor="#c4c4c4"
            placeholder="Search Flickr"
            onChangeText={(text) => setINPUT(text)}></TextInput>
        </View>
        <Icon
          name="send"
          size={20}
          color={'#c4c4c4'}
          onPress={() => getFlickrTags()}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={TAGS}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={{borderBottomWidth: 1, borderColor: '#0063dc'}}>
                <View
                  style={{
                    paddingHorizontal: '3%',
                    paddingVertical: 10,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icons
                    name="perm-identity"
                    size={15}
                    color={'#fff'}
                    style={{marginRight: 5}}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    {item.author.substring(20, item.author.length - 2)}
                  </Text>
                </View>
                <Image
                  style={{
                    width: '100%',
                    height: null,
                    aspectRatio: 1.78,
                  }}
                  source={{
                    uri: item.media.m,
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#1f1f1f',
                    paddingVertical: 10,
                    paddingHorizontal: '3%',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      textAlign: 'justify',
                      borderBottomWidth: 1,
                      borderColor: '#c4c4c4',
                      paddingBottom: 3,
                    }}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text
                    style={{color: '#fff', textAlign: 'justify', marginTop: 3}}
                    ellipsizeMode={'tail'}
                    numberOfLines={4}>
                    {item.tags}
                  </Text>
                  <Text
                    style={{
                      color: '#c4c4c4',
                      fontSize: 10,
                      marginTop: 3,
                      textAlign: 'right',
                    }}>
                    {item.published.substring(11, 16)},{' '}
                    {item.published.substring(0, 10)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#1f1f1f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  search: {
    marginLeft: 5,
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});

export default SearchPage;

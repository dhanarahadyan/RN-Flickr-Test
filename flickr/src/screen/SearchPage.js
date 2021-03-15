import React, {useState} from 'react';
import {
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

const SearchPage = ({navigation}) => {
  const [INPUT, setINPUT] = useState('');
  const [TAGS, setTAGS] = useState({title: ''});
  const axios = require('axios');

  const getFlickrTags = () => {
    Axios({
      method: 'GET',
      url: `https://www.flickr.com/services/feeds/photos_public.gne?nojsoncallback=true&tags=${INPUT}&format=json`,
    })
      .then((data) => {
        setTAGS(data.data);
      })
      .catch((err) => {
        console.log('GET Tags Error', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.searchContainer}>
        <View style={styles.searchContainer2}>
          <Icon name="search" size={20} color={'#c4c4c4'} />
          <TextInput
            style={styles.search}
            placeholderTextColor="#c4c4c4"
            placeholder="Search Flickr"
            onChangeText={(text) => setINPUT(text)}
          />
        </View>
        <Icon
          name="send"
          size={20}
          color={'#c4c4c4'}
          onPress={() => getFlickrTags()}
        />
      </View>
      {TAGS.title.length != 0 ? (
        <View style={styles.uploadTextContainer}>
          <Text style={styles.uploadText}>{TAGS.title}</Text>
        </View>
      ) : null}
      <View style={styles.body}>
        <FlatList
          data={TAGS.items}
          renderItem={({item}) => (
            <View style={styles.postContainer}>
              <View style={styles.postHeaderContainer}>
                <Icons
                  name="perm-identity"
                  size={15}
                  color={'#fff'}
                  style={{marginRight: 5}}
                />
                <Text style={styles.postProfileText}>
                  {item.author.substring(20, item.author.length - 2)}
                </Text>
              </View>
              <Image
                style={styles.postImage}
                source={{
                  uri: item.media.m,
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('WebView', {pass: item.link})
                }>
                <View style={styles.postSubContainer}>
                  {item.title.trim().length != 0 ? (
                    <Text
                      style={styles.postTitleSubContainer}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}>
                      {item.title}
                    </Text>
                  ) : (
                    <Text style={styles.postTitleSubContainer}>(No Title)</Text>
                  )}
                  {item.tags.length != 0 ? (
                    <Text
                      style={styles.postDescSubContainer}
                      ellipsizeMode={'tail'}
                      numberOfLines={3}>
                      {item.tags}
                    </Text>
                  ) : (
                    <Text style={styles.postDescSubContainer}>
                      (No Description)
                    </Text>
                  )}
                  <View style={styles.postFooterContainer}>
                    <Text style={styles.postDateSubContainer}>
                      {item.published.substring(11, 16)},{' '}
                      {item.published.substring(0, 10)}
                    </Text>
                    <Text style={styles.postDateSubContainer}>
                      Tap to open in WebView
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
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
  searchContainer: {
    backgroundColor: '#1f1f1f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  searchContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  search: {
    marginLeft: 5,
    color: '#fff',
  },
  uploadTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#0063dc',
  },
  uploadText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  postContainer: {
    borderBottomWidth: 1,
    borderColor: '#0063dc',
  },
  postHeaderContainer: {
    paddingHorizontal: '3%',
    paddingVertical: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postProfileText: {
    color: 'white',
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: null,
    aspectRatio: 16 / 9,
  },
  postSubContainer: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 10,
    paddingHorizontal: '3%',
  },
  postTitleSubContainer: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  postDescSubContainer: {
    color: '#fff',
    textAlign: 'justify',
    marginTop: 3,
  },
  postFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderColor: '#c4c4c4',
    paddingVertical: 3,
    marginTop: 10,
  },
  postDateSubContainer: {
    color: '#c4c4c4',
    fontSize: 12,
  },
});

export default SearchPage;

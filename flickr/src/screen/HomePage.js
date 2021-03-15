import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import 'react-native-gesture-handler';
import Axios from 'axios';
import Icons from 'react-native-vector-icons/MaterialIcons';

//components
import HeaderComp from '../component/HeaderComp';

const HomePage = ({navigation}) => {
  const axios = require('axios');
  const [DATA, setDATA] = useState('');

  const getFlickrItems = () => {
    Axios({
      method: 'GET',
      url: `https://www.flickr.com/services/feeds/photos_public.gne?nojsoncallback=true&format=json`,
    })
      .then((data) => {
        setDATA(data.data.items);
      })
      .catch((err) => {
        console.log('GET Items Error', err.message);
      });
  };

  useEffect(() => {
    getFlickrItems();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.body}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                getFlickrItems();
              }}
            />
          }
          showsVerticalScrollIndicator={false}
          data={DATA}
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

export default HomePage;

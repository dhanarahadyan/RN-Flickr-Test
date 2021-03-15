import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import 'react-native-gesture-handler';
import Axios from 'axios';
import Icons from 'react-native-vector-icons/MaterialIcons';

//components
import PostComp from '../component/PostComp';
import HeaderComp from '../component/HeaderComp';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomePage = () => {
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.body}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                // onRefresh();
                getFlickrItems();
              }}
            />
          }
          showsVerticalScrollIndicator={false}
          data={DATA}
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
  textBody: {
    color: '#000',
  },
});

export default HomePage;

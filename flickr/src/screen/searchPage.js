import * as React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

//component
import HeaderComp from '../component/HeaderComp';

const homePage = () => {
  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color={'#c4c4c4'} />
        <TextInput
          style={styles.search}
          placeholderTextColor="#c4c4c4"
          placeholder="Search Flickr"></TextInput>
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
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#333',
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

export default homePage;

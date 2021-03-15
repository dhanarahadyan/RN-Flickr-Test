import * as React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import Axios from 'axios';

//components
import PostComp from '../component/PostComp';
import HeaderComp from '../component/HeaderComp';

const axios = require('axios');

const homePage = () => {
  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PostComp />
          <PostComp />
          <PostComp />
        </ScrollView>
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

export default homePage;

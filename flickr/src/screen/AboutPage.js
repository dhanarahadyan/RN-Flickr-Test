import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import HeaderComp from '../component/HeaderComp';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.body}>
        <Image
          style={styles.profileImage}
          source={{
            uri:
              'https://media-exp1.licdn.com/dms/image/C5603AQEiD2KIq-FB9A/profile-displayphoto-shrink_800_800/0/1614914699909?e=1621468800&v=beta&t=mwW4LGoPYrbzI0Rys-ULGGSo0EGGj_tLpSas6U7BY4Y',
          }}
        />
        <Text style={styles.nameText}>Rahadyan Nandiwardhana</Text>
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
    justifyContent: 'center',
  },
  profileImage: {
    width: '33%',
    height: null,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#0063dc',
  },
  nameText: {
    color: '#0063dc',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
});

export default AboutPage;

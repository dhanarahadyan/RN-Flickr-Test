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
        <View style={styles.subContainer}>
          <Text style={styles.subTitleText}>About Apps</Text>
          <Text style={styles.detailsText}>
            A simple mobile app interface using React Native, to show image from
            Flickr public API using React Hooks with Axios. The interface, about
            the color scheme, layout, etc were created through personal
            imagination process. All similarities are just coincidences for
            educational purposes
          </Text>
          <Text style={styles.subTitleText2}>Contact Me!</Text>
          <Text style={styles.detailsText}>✉️ dhanarahadyan@yahoo.com</Text>
          <Text style={styles.detailsText}>☎️ +6287871744143</Text>
        </View>
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  subContainer: {
    width: '85%',
    borderRadius: 10,
    paddingHorizontal: '3%',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ff0084',
    marginTop: 25,
  },
  subTitleText: {
    color: '#0063dc',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 3,
  },
  subTitleText2: {
    marginTop: 15,
    color: '#0063dc',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 3,
  },
  detailsText: {
    color: '#fff',
    textAlign: 'justify',
  },
});

export default AboutPage;

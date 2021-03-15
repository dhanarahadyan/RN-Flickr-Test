import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const HeaderComp = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logoImage}
        source={{
          uri: 'https://ghost.org/images/integrations/flickr.png',
        }}
      />
      <Image
        style={styles.logoText}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flickr_logo.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#ff0084',
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '3%',
  },
  logoImage: {
    height: 12,
    width: null,
    aspectRatio: 2.1,
    marginRight: 5,
  },
  logoText: {
    height: 20,
    width: null,
    aspectRatio: 3.35,
  },
});

export default HeaderComp;

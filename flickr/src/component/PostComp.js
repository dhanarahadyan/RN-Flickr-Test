import React from 'react';
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PostComp = () => {
  const navigation = useNavigation();
  return (
    <View style={{borderBottomWidth: 1, borderColor: '#0063dc'}}>
      <Image
        style={{width: '100%', height: null, aspectRatio: 1.5}}
        source={{
          uri:
            'https://imgx.gridoto.com/crop/96x57:864x511/700x465/photo/gridoto/2018/01/03/3184431947.jpg',
        }}
      />
      <View
        style={{
          backgroundColor: '#1f1f1f',
          paddingVertical: 10,
          paddingHorizontal: '3%',
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
          Test
        </Text>
        <Text style={{color: '#fff'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim
          fermentum lorem non molestie. Duis eget fermentum lorem, quis
          convallis nisi.
        </Text>
      </View>
    </View>
  );
};
export default PostComp;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Template = (props) => {
  return (
    <View>
      <Text style={ui.text}>Testing {props.number}</Text>
    </View>
  )
}

const Testing = () => {
  return (
    <View style={ui.container}>
      <Template number="1"/>
      <Template number="2"/>
      <Template number="3"/>
    </View>
  )
}

const ui = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:50,
    color:'white'
  }
})

export default Testing
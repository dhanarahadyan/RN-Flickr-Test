import 'react-native-gesture-handler';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

//screen
import homePage from './src/screen/homePage';
import searchPage from './src/screen/searchPage';
import aboutPage from './src/screen/aboutPage';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={homePage} />
        <Tab.Screen name="Search" component={searchPage} />
        <Tab.Screen name="About" component={aboutPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

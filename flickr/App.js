import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

//screen
import HomePage from './src/screen/HomePage';
import SearchPage from './src/screen/SearchPage';
import AboutPage from './src/screen/AboutPage';
import WebViewPage from './src/screen/WebViewPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Tab.Navigator
      initialRouteName="homePage"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'About') {
            iconName = 'perm-identity';
          }
          return <Icon name={iconName} size={27} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#0063dc',
        inactiveTintColor: '#c4c4c4',
        style: {
          backgroundColor: '#000',
        },
      }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="About" component={AboutPage} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="WebView" component={WebViewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

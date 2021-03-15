import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//screen
import HomePage from './src/screen/HomePage';
import searchPage from './src/screen/SearchPage';
import aboutPage from './src/screen/AboutPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Search" component={searchPage} />
        <Tab.Screen name="About" component={aboutPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

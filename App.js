/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Images} from './app/constants/Images';
import StackNavigation from './app/navigation/StackNavigation';
import AccountScreen from './app/screens/AccountScreen/AccountScreen';
import Activity from './app/screens/Activity';
import ReelsFeed from './app/screens/ReelsFeed';
import SearchFeeds from './app/screens/Search/SearchFeeds';

const Tab = createBottomTabNavigator();
const App = () => {
  const selector = useSelector(state => state);
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: bgColor === '#fff' ? '#FD1D1D' : '#fbad50',
          tabBarInactiveTintColor: tintColor,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: bgColor,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={StackNavigation}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Images.home}
                style={styles.imageStyle(size, color)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SearchFeeds"
          component={SearchFeeds}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Images.search}
                style={styles.imageStyle(size, color)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ReelsFeed"
          component={ReelsFeed}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Images.instaReels}
                style={styles.imageStyle(size, color)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Images.heart}
                style={styles.imageStyle(size, color)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Images.name2}
                style={styles.imageStyle2(size, color)}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageStyle: (size, color) => ({
    width: size,
    height: size,
    tintColor: color,
  }),
  imageStyle2: (size, color) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 1,
    borderColor: color,
    tintColor: color,
  }),
});
export default App;

import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images} from '../constants/Images';
import SearchFeeds from '../components/Search/SearchFeeds';
import ReelsFeed from '../components/Reels/ReelsFeed';
import Activity from '../components/Activity/Activity';
import AccountScreen from '../components/AccountScreen/AccountScreen';
import Home from '../components/Home/Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const selector = useSelector(state => state);
  bgColor = selector.color.color;
  return (
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
        component={Home}
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
export default BottomTabNavigation;

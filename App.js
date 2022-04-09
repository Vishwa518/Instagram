/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import SettingScreen from './app/screens/AccountScreen/SettingScreen';
import Theme from './app/screens/AccountScreen/Theme';
import UserProfileScreen from './app/screens/AccountScreen/UserProfileScreen';
import ChatScreen from './app/screens/Home/ChatScreen';
import CommentScreen from './app/screens/Home/CommentScreen';
import Communication from './app/screens/Home/Communication';
import StoryScreen from './app/screens/Home/StoryScreen';
import BottomTabNavigation from './app/navigation/BottomTabNavigation';
import Login from './app/screens/Login';
import SavedPosts from './app/screens/AccountScreen/SavedPosts';

const Stack = createStackNavigator();

const App = () => {
  const selector = useSelector(state => state);
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          cardStyle: {backgroundColor: bgColor},
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={BottomTabNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Communication" component={Communication} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="ThemeScreen" component={Theme} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="SavedPosts" component={SavedPosts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

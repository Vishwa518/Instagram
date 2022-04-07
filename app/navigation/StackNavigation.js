import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import Home from '../screens/Home/Home';
import Communication from '../screens/Home/Communication';
import SettingScreen from '../screens/AccountScreen/SettingScreen';
import Theme from '../screens/AccountScreen/Theme';
import CommentScreen from '../screens/Home/CommentScreen';
import StoryScreen from '../screens/Home/StoryScreen';
import UserProfileScreen from '../screens/AccountScreen/UserProfileScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const selector = useSelector(state => state);
  bgColor = selector.color.color;
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: bgColor},
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Communication" component={Communication} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="ThemeScreen" component={Theme} />
      <Stack.Screen name="CommentScreen" component={CommentScreen} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

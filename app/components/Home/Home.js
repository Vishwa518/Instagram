import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { constants } from '../../constants/constants';
import Header from './Header';
import PostCardItems from './PostCardItems';
import StoryScreen from './StoryScreen';

const Home = () => {
  const {bgColor, tintColor} = constants();
  const [showDropDown, setShowDropDown] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <Header
        bgColor={bgColor}
        tintColor={tintColor}
        navigation={navigation}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
      <StoryScreen bgColor={bgColor} tintColor={tintColor} />
      <PostCardItems
        bgColor={bgColor}
        tintColor={tintColor}
        showDropDown={showDropDown}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
  }),
});
export default Home;

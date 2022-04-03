import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Header from './Header';
import PostCardItems from './PostCardItems';
import StatusBar from './StatusBar';

const Home = () => {
  const selector = useSelector(state => state);
  const [showDropDown, setShowDropDown] = useState(false);
  const navigation = useNavigation();
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;

  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <Header
        bgColor={bgColor}
        tintColor={tintColor}
        navigation={navigation}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
      <StatusBar
        bgColor={bgColor}
        tintColor={tintColor}
        showDropDown={showDropDown}
      />
      <PostCardItems bgColor={bgColor} tintColor={tintColor} />
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

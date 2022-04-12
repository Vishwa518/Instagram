import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {constants} from '../../constants/constants';

const Container = ({children}) => {
  const {bgColor} = constants();
  return (
    <SafeAreaView style={styles.container(bgColor)}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
    // marginHorizontal: 10,
  }),
});
export default Container;

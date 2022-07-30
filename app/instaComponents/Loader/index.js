import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = ({color = '#007FFF'}) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Spinner;

Spinner.propTypes = {
  color: PropTypes.string,
};

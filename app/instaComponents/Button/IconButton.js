import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const IconButton = ({
  image,
  newStyle,
  backgroundColor,
  onPress,
  newImageStyle,
  tintColor,
}) => {
  return (
    <Pressable
      style={[styles.container(backgroundColor), newStyle]}
      onPress={onPress}>
      <FastImage
        source={image}
        tintColor={tintColor}
        style={[styles.imageStyle, newImageStyle]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor || 'transparent',
  }),
  imageStyle: {
    width: 24,
    height: 24,
  },
});
export default IconButton;

IconButton.propTypes = {
  image: PropTypes.any,
  newStyle: PropTypes.any,
  newImageStyle: PropTypes.any,
  backgroundColor: PropTypes.any,
  tintColor: PropTypes.any,
  onPress: PropTypes.func,
};

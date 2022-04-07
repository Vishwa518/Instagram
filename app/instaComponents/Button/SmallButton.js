import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';

const SmallButton = ({
  text,
  image,
  newStyle,
  backgroundColor,
  onPress,
  newImageStyle,
  tintColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container(backgroundColor), newStyle]}
      onPress={onPress}>
      {text && <Text style={styles.textStyle(tintColor)}>{text}</Text>}
      {image && <Image source={image} style={newImageStyle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor || 'transparent',
    width: '40%',
    height: 34,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
  }),
  textStyle: tintColor => ({
    fontSize: 14,
    letterSpacing: 0.5,
    color: tintColor,
  }),
});
export default SmallButton;

SmallButton.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any,
  newStyle: PropTypes.any,
  newImageStyle: PropTypes.any,
  backgroundColor: PropTypes.any,
  tintColor: PropTypes.any,
  onPress: PropTypes.func,
};

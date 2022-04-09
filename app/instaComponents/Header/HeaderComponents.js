import React from 'react';
import {Image, Pressable, Text, StyleSheet, View} from 'react-native';
import {Images} from '../../constants/Images';
import PropTypes from 'prop-types';
import IconButton from '../Button/IconButton';

const styles = StyleSheet.create({
  Heading3A: color => ({
    fontSize: 20,
    color: color,
    // textAlign: 'center',
    letterSpacing: 0.3,
  }),
});
export const BackIcon = ({nav, onPress, color}) => {
  return (
    <Pressable
      onPress={() => {
        if (onPress) onPress();
        else if (nav) nav();
      }}>
      <Image
        source={Images.leftArrow}
        style={{tintColor: color, width: 26, height: 26}}
      />
    </Pressable>
  );
};

BackIcon.propTypes = {
  nav: PropTypes.func,
  onPress: PropTypes.func,
  color: PropTypes.string,
};

BackIcon.defaultProps = {
  nav: null,
  onPress: null,
  color: '#000',
};

export const TitleView = ({title, color, NewStyle}) => {
  return <Text style={[styles.Heading3A(color), NewStyle]}>{title}</Text>;
};

TitleView.propTypes = {
  title: PropTypes.string,
};

TitleView.defaultProps = {
  title: '',
};

export const ButtonGroup = ({
  color,
  image1,
  image2,
  newImageStyle1,
  newImageStyle2,
}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <IconButton
        image={image1}
        tintColor={color}
        newImageStyle={[{width: 26, height: 26}, newImageStyle1]}
      />
      <IconButton
        image={image2}
        tintColor={color}
        newImageStyle={[{width: 22, height: 22}, newImageStyle2]}
      />
    </View>
  );
};

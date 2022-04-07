import React from 'react';
import {Image, TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Images} from '../../constants/Images';
import PropTypes from 'prop-types';

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
    <TouchableOpacity
      onPress={() => {
        if (onPress) onPress();
        else if (nav) nav();
      }}>
      <Image
        source={Images.leftArrow}
        style={{tintColor: color, width: 26, height: 26}}
      />
    </TouchableOpacity>
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

export const ButtonGroup = ({color, isShare = true, image}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {isShare ? (
        <>
          <TouchableOpacity>
            <Image
              source={Images.videoCamera}
              style={{width: 28, height: 28, tintColor: color}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Images.editing}
              style={{width: 23, height: 23, tintColor: color, marginTop: 1}}
            />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={{width: '100%', alignItems: 'flex-end'}}>
          <Image
            source={image}
            style={{width: 23, height: 23, tintColor: color, marginTop: 1}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

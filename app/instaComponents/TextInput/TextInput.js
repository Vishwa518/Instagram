import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';

const CussomTextInput = ({
  image,
  value,
  handleChange,
  placeholder,
  autoFocus = false,
  isRightButton,
  RightButton,
  viewWrapperStyle,
  searchIconStyle,
}) => {
  const selector = useSelector(state => state);
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;

  return (
    <View style={[styles.ViewWrapper(tintColor), viewWrapperStyle]}>
      <Image
        style={[styles.searchIcon(tintColor), searchIconStyle]}
        source={image}
      />
      <TextInput
        value={value}
        autoCorrect={false}
        onChangeText={text => handleChange(text)}
        placeholder={placeholder}
        placeholderTextColor={tintColor}
        style={styles.textInputStyle(tintColor)}
        autoFocus={autoFocus}
      />
      {isRightButton && <RightButton />}
    </View>
  );
};

export default CussomTextInput;

const styles = StyleSheet.create({
  ViewWrapper: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 5,
    marginVertical: 12,
    borderRadius: 6,
  }),
  textInputStyle: tintColor => ({
    height: 40,
    color: tintColor,
    paddingLeft: 14,
    letterSpacing: 0.4,
    fontSize: 16,
    // backgroundColor:'red'
  }),
  searchIcon: tintColor => ({
    width: 20,
    height: 20,
    tintColor,
    marginLeft: 5,
  }),
});

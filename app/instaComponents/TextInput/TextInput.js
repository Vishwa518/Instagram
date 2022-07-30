import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';

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
  newInputStyle,
  placeholderTextColor,
  isSecureTextEntry = false,
  PasswordShowAndHide,
  isRightIcon,
}) => {
  const {tintColor} = constants();
  const [isRightIcons, setIsRightIcon] = useState(isRightIcon);

  useEffect(() => {
    setIsRightIcon(isRightIcon);
  }, [isRightIcon]);

  return (
    <View style={[styles.ViewWrapper(tintColor), viewWrapperStyle]}>
      {image && (
        <Image
          style={[styles.searchIcon(tintColor), searchIconStyle]}
          source={image}
        />
      )}
      <TextInput
        value={value}
        autoCorrect={false}
        onChangeText={text => handleChange(text)}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || tintColor}
        style={[styles.textInputStyle(tintColor), newInputStyle]}
        autoFocus={autoFocus}
        secureTextEntry={isSecureTextEntry}
      />
      {isRightIcons && (
        <TouchableOpacity
          style={{position: 'absolute', right: 10}}
          onPress={() => {
            handleChange('');
            setIsRightIcon(false);
          }}>
          <Image
            style={{
              width: 16,
              height: 16,
              tintColor: '#fff',
              transform: [{rotate: '45deg'}],
            }}
            source={Images.plus1}
          />
        </TouchableOpacity>
      )}
      {isRightButton && <RightButton />}
      {PasswordShowAndHide && <PasswordShowAndHide />}
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
    height: 38,
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

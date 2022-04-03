import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../constants/Images';
const Header = ({
  bgColor,
  tintColor,
  navigation,
  showDropDown,
  setShowDropDown,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={Images.igLogo}
          style={styles.igLogo(tintColor)}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.imageRapperView}>
        <TouchableOpacity onPress={() => setShowDropDown(!showDropDown)}>
          <FastImage
            source={Images.plus}
            tintColor={tintColor}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Communication')}>
          <FastImage
            source={Images.messenger}
            tintColor={tintColor}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  imageRapperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  imageStyle: {
    width: 25,
    height: 25,
  },
  igLogo: tintColor => ({
    width: 120,
    height: 40,
    tintColor,
  }),
});
export default Header;

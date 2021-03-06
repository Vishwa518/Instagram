import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';

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
        <IconButton
          image={Images.plus}
          tintColor={tintColor}
          onPress={() => setShowDropDown(!showDropDown)}
        />
        <IconButton
          image={Images.messenger}
          tintColor={tintColor}
          onPress={() => navigation.navigate('Communication')}
        />
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
    marginTop: 5,
  },
  imageRapperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  igLogo: tintColor => ({
    width: 120,
    height: 38,
    tintColor,
  }),
});
export default Header;

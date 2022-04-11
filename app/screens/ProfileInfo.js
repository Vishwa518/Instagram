import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {constants} from '../constants/constants';
import SmallButton from '../instaComponents/Button/SmallButton';

const ProfileInfo = ({
  item,
  onPress,
  buttonName,
  buttonBackgroundColor = '#007FFF',
  newStyle
}) => {
  const {tintColor} = constants();

  return (
    <View style={styles.shareModalView2}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FastImage source={item.profileImage} style={styles.shareModalImage3} />
        <Text style={styles.shareModalText2(tintColor)}>
          {item.accountName}
        </Text>
      </View>
      <SmallButton
        onPress={onPress}
        text={buttonName}
        newStyle={[styles.shareModalButton,newStyle]}
        backgroundColor={buttonBackgroundColor}
        tintColor={tintColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shareModalView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  shareModalImage3: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  shareModalButton: {
    width: '20%',
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  shareModalText2: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
    fontWeight: '500',
    marginLeft: 25,
  }),
});
export default ProfileInfo;

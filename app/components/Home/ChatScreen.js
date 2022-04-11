import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  ButtonGroup,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';

const ChatScreen = ({route}) => {
  const {accountName, profileImage} = route.params.item;
  const {bgColor, tintColor} = constants();
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  const ProfileDetail = () => {
    return (
      <View style={styles.headerView}>
        <FastImage source={profileImage} style={styles.headerImage} />
        <View>
          <TitleView
            title={accountName}
            color={tintColor}
            NewStyle={{textAlign: 'center', fontSize: 18}}
          />
          <Text style={styles.lastSeen(tintColor)}>Active 36m ago</Text>
        </View>
      </View>
    );
  };

  const RightButton = () => {
    return (
      <View style={styles.rightButton}>
        <IconButton
          image={Images.mic}
          tintColor={tintColor}
          newImageStyle={{width: 22}}
        />
        <IconButton
          image={Images.gallery}
          tintColor={tintColor}
          newImageStyle={{width: 26, height: 32}}
        />
        <IconButton
          image={Images.sticker}
          tintColor={tintColor}
          newImageStyle={{width: 22, height: 22}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <HeaderComponent
        nav={navigation}
        Left={() => (
          <BackIcon nav={() => navigation.goBack()} color={tintColor} />
        )}
        Center={() => <ProfileDetail />}
        Right={() => (
          <ButtonGroup
            color={tintColor}
            image1={Images.phoneCall}
            image2={Images.videoCamera}
            newImageStyle1={{width: 22, height: 22, tintColor}}
            newImageStyle2={{width: 24, height: 24, tintColor}}
          />
        )}
        NewStyle={{marginHorizontal: 10}}
      />
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewStyle}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 0}>
        <CussomTextInput
          image={Images.post3}
          value={value}
          handleChange={text => setValue(text)}
          placeholder={'Add a comment...'}
          autoFocus
          isRightButton
          RightButton={() => <RightButton />}
          searchIconStyle={styles.searchIcon}
          newInputStyle={styles.textInputStyle}
          viewWrapperStyle={styles.viewWrapperStyle(tintColor)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
  }),
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    right: 20,
  },
  headerImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 1,
  },
  lastSeen: tintColor => ({
    color: tintColor,
    fontSize: 10,
    letterSpacing: 0.3,
    paddingTop: 1,
    marginLeft: 2,
  }),
  searchIcon: {
    width: 34,
    height: 34,
    marginLeft: 5,
    borderRadius: 17,
    tintColor: null,
  },
  KeyboardAvoidingViewStyle: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '32%',
  },
  textInputStyle: {
    height: 50,
    width: '55%',
  },
  viewWrapperStyle: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: tintColor === '#fff' ? 0 : 1,
    height: 45,
  }),
});
export default ChatScreen;

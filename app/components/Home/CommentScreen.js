import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';

const CommentScreen = () => {
  const {bgColor, tintColor} = constants();
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  const RightButton = () => {
    return (
      <TouchableOpacity style={styles.rightButton}>
        <Text style={styles.rightButtonText}>Post</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <HeaderComponent
        nav={navigation}
        Left={() => (
          <BackIcon nav={() => navigation.goBack()} color={tintColor} />
        )}
        Center={() => (
          <TitleView
            title={'Comments'}
            color={tintColor}
            NewStyle={{textAlign: 'center'}}
          />
        )}
        Right={() => (
          <IconButton
            image={Images.share}
            tintColor={tintColor}
            newStyle={{alignItems: 'flex-end'}}
          />
        )}
      />
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewStyle}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 0}>
        <CussomTextInput
          image={Images.post1}
          value={value}
          handleChange={text => setValue(text)}
          placeholder={'Add a comment...'}
          autoFocus
          isRightButton
          RightButton={() => <RightButton />}
          searchIconStyle={styles.searchIcon}
          viewWrapperStyle={styles.viewWrapperStyle(tintColor)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
  }),
  searchIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    borderRadius: 15,
    tintColor: '#fff',
  },
  KeyboardAvoidingViewStyle: {position: 'absolute', bottom: 10, width: '100%'},
  rightButton: {position: 'absolute', right: 10, top: 12},
  rightButtonText: {
    color: '#007FFF',
    fontSize: 14,
    letterSpacing: 0.3,
    fontWeight: '500',
  },
  viewWrapperStyle: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: tintColor === '#fff' ? 0 : 1,
    bottom: 10,
    height: 45,
  }),
});

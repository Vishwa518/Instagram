import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Images} from '../../constants/Images';
import SmallButton from '../../instaComponents/Button/SmallButton';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';
import {useTogglePasswordVisibility} from '../../hooks/useTogglePasswordVisibility';
import {constants} from '../../constants/constants';

const Login = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const {passwordVisibility, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const {bgColor, tintColor} = constants();

  const PasswordShowAndHide = () => {
    return (
      <Pressable onPress={handlePasswordVisibility}>
        <Image
          source={passwordVisibility ? Images.eyeHide : Images.eyeIcon}
          style={{width: 22, height: 22, tintColor}}
        />
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <View style={styles.igView}>
        <Image source={Images.igLogo} style={styles.igLogo(tintColor)} />
      </View>
      <CussomTextInput
        value={value}
        handleChange={text => setValue(text)}
        placeholder={'Phone number, email or username'}
        viewWrapperStyle={styles.ViewWrapper(tintColor)}
        newInputStyle={styles.textInputStyle}
        placeholderTextColor={'#A6A6A4'}
      />
      <CussomTextInput
        isSecureTextEntry={passwordVisibility}
        value={password}
        handleChange={text => setPassword(text)}
        placeholder={'Password'}
        viewWrapperStyle={styles.ViewWrapper(tintColor)}
        newInputStyle={styles.textInputStyle}
        placeholderTextColor={'#A6A6A4'}
        PasswordShowAndHide={() => <PasswordShowAndHide />}
      />
      <View style={styles.ButtonWrapper}>
        <SmallButton
          isDisabled={false}
          text={'Log In'}
          backgroundColor={'#007FFF'}
          onPress={() => navigation.navigate('HomeScreen')}
          tintColor={tintColor}
          newStyle={{height: 50, width: '100%'}}
          newTextStyle={{fontSize: 16, color: '#eee'}}
        />
      </View>
      <View style={styles.forgotView}>
        <Text style={styles.forgotText(tintColor)}>
          Forgot your login details?
        </Text>
        <Pressable>
          <Text style={styles.forgotText2(tintColor)}>
            {' Get help logging in.'}
          </Text>
        </Pressable>
      </View>
      <View style={styles.dividerView}>
        <View style={styles.divider(1)} />
        <Text style={{fontSize: 14, color: tintColor}}>OR</Text>
        <View style={styles.divider(2)} />
      </View>
      <Pressable style={styles.facebookView}>
        <Image source={Images.facebook} style={styles.facebookLogo} />
        <Text style={styles.facebookText}>Log In with Facebook</Text>
      </Pressable>
      <View style={styles.divider2} />
      <View style={styles.signUpView}>
        <Text style={styles.forgotText(tintColor)}>
          Don't have a login account?
        </Text>
        <Pressable>
          <Text style={styles.forgotText2(tintColor)}>{' Signup here'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  }),
  igView: {
    alignItems: 'center',
    marginBottom: 2,
  },
  igLogo: tintColor => ({
    width: 250,
    height: 85,
    tintColor,
  }),
  ViewWrapper: tintColor => ({
    marginHorizontal: 20,
    marginTop: 14,
    marginBottom: 7,
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    borderWidth: tintColor === '#fff' ? 0 : 1,
    borderColor: tintColor,
  }),
  textInputStyle: {
    height: 50,
    width: '90%',
  },
  ButtonWrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  forgotView: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  forgotText: tintColor => ({
    fontSize: 14,
    color: tintColor === '#fff' ? '#C0C0BC' : '#000',
    letterSpacing: 0.3,
  }),
  forgotText2: tintColor => ({
    fontSize: 14,
    color: tintColor,
    letterSpacing: 0.3,
    fontWeight: '500',
  }),
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  divider: num => ({
    width: '40%',
    borderBottomWidth: 1,
    borderBottomColor: '#666663',
    marginRight: num === 1 ? 5 : 0,
    marginLeft: num === 1 ? 0 : 5,
  }),
  facebookView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  facebookText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007FFF',
    paddingLeft: 10,
  },
  facebookLogo: {
    width: 22,
    height: 22,
  },
  signUpView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 0,
    left: 0,
  },
  divider2: {
    backgroundColor: 'red',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#666663',
    position: 'absolute',
    bottom: 60,
  },
});
export default Login;

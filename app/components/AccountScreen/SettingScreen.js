import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import {Images} from '../../constants/Images';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';
import {constants} from '../../constants/constants';

const data = [
  {
    id: 1,
    image: Images.addUserIcon,
    name: 'Follow and invite friends',
  },
  {
    id: 2,
    image: Images.bell,
    name: 'Notifications',
  },
  {
    id: 3,
    image: Images.lockIcon,
    name: 'Privacy',
  },
  {
    id: 4,
    image: Images.security,
    name: 'Security',
  },
  {
    id: 5,
    image: Images.adsIcon,
    name: 'Ads',
  },
  {
    id: 6,
    image: Images.userIcon,
    name: 'Account',
  },
  {
    id: 7,
    image: Images.question,
    name: 'Help',
  },
  {
    id: 8,
    image: Images.aboutIcon,
    name: 'About',
  },
  {
    id: 9,
    image: Images.theme,
    name: 'Theme',
  },
];
const SettingScreen = () => {
  const {bgColor, tintColor} = constants();
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  const renderItem = item => {
    return (
      <Pressable
        key={item.id}
        onPress={() => item.id === 9 && navigation.navigate('ThemeScreen')}
        style={styles.renderItem}>
        <Image source={item.image} style={styles.renderItemImage(tintColor)} />
        <Text style={styles.renderItemText(tintColor)}>{item.name}</Text>
      </Pressable>
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
            title={'Settings'}
            color={tintColor}
            NewStyle={{textAlign: 'left', left: '28%'}}
          />
        )}
        NewStyle={{left: 15}}
      />
      <CussomTextInput
        image={Images.search}
        value={value}
        handleChange={text => setValue(text)}
        placeholder={'Search'}
        viewWrapperStyle={styles.ViewWrapper(tintColor)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(item => renderItem(item))}
        <View style={styles.accountView}>
          <Pressable>
            <Text style={styles.accountViewText}>Account Center</Text>
            <Text style={styles.accountViewText2(tintColor)}>
              control settings for connected experiences across
            </Text>
            <Text style={styles.accountViewText2(tintColor)}>
              Instagram, the FB app and Messenger.
            </Text>
          </Pressable>
        </View>
        <View style={styles.accountView2}>
          <Pressable>
            <Text style={styles.accountViewText3(tintColor)}>Logins</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.accountViewText4}>Add account</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.accountViewText5}>Log out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
  }),
  ViewWrapper: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 20,
    marginTop: 14,
    marginBottom: 7,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: tintColor,
  }),
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    paddingVertical: 10,
  },
  renderItemImage: tintColor => ({
    width: Platform.OS === 'ios' ? 24 : 22,
    height: Platform.OS === 'ios' ? 24 : 22,
    tintColor,
  }),
  renderItemText: tintColor => ({
    fontSize: 16,
    letterSpacing: 0.3,
    paddingLeft: 10,
    paddingTop: 3,
    color: tintColor,
  }),
  accountView: {marginLeft: 15, marginVertical: 12},
  accountViewText: {fontSize: 16, color: '#007FFF', letterSpacing: 0.3},
  accountViewText2: tintColor => ({
    letterSpacing: 0.3,
    paddingVertical: 4,
    fontSize: 14,
    color: tintColor,
  }),
  accountView2: {marginLeft: 15, marginVertical: 4},
  accountViewText3: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
    paddingVertical: 4,
  }),
  accountViewText4: {
    letterSpacing: 0.3,
    paddingTop: 14,
    fontSize: 16,
    color: '#007FFF',
  },
  accountViewText5: {
    letterSpacing: 0.3,
    paddingVertical: 12,
    fontSize: 16,
    color: '#007FFF',
  },
});
export default SettingScreen;

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import {BackIcon} from '../../instaComponents/Header/HeaderComponents';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';

const data = [
  {
    id: 1,
    accountName: 'Test User-0',
    profileImage: Images.post1,
  },
  {
    id: 2,
    accountName: 'Test User-1',
    profileImage: Images.post2,
  },
  {
    id: 3,
    accountName: 'Test User-2',
    profileImage: Images.post3,
  },
  {
    id: 4,
    accountName: 'Test User-3',
    profileImage: Images.post4,
  },
];

const SearchScreen = () => {
  const placeholderText = [
    'tattoo',
    'pottery',
    'crossword puzzle',
    'watercolors',
    'puzzles',
  ];
  const navigation = useNavigation();
  const {bgColor, tintColor} = constants();
  const [value, setValue] = useState('');
  const [datas, setDatas] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = () => {
      setIndex(prevIndex => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };
    setInterval(timer, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const removeItem = item => {
    const updatedRes = datas.filter(instaId => instaId.id !== item.id);
    setDatas(updatedRes);
  };

  const renderCardItem = ({item}) => {
    return (
      <View style={styles.renderCardItemStyle}>
        <Pressable>
          <View style={styles.renderCardItemView}>
            <FastImage
              source={item.profileImage}
              style={styles.renderCardItemImage}
            />
            <View>
              <Text style={styles.renderCardItemText(tintColor)}>
                {item.accountName}
              </Text>
              <Text style={styles.renderCardItemText2(tintColor)}>
                {item.accountName}
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => removeItem(item)}>
          <FastImage
            source={Images.plus1}
            tintColor={tintColor}
            style={styles.renderCardItemImage2}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <View style={styles.viewWrapperStyle}>
        <View style={{marginRight: 4}}>
          <BackIcon color={tintColor} nav={() => navigation.goBack()} />
        </View>
        <CussomTextInput
          image={Images.search}
          value={value}
          handleChange={text => setValue(text)}
          placeholder={`Search ${placeholderText[index]}`}
          viewWrapperStyle={styles.ViewWrapper(tintColor)}
          isRightIcon={value.length !== 0}
        />
      </View>
      {datas.length > 0 && (
        <View style={styles.wrap}>
          <Text style={styles.recentText(tintColor)}>Recent</Text>
        </View>
      )}
      <View>
        <FlatList
          data={datas}
          renderItem={renderCardItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
  ViewWrapper: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 6,
    width: '82%',
    height: 40,
  }),
  viewWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  recentText: tintColor => ({
    fontSize: 18,
    color: tintColor,
    letterSpacing: 0.3,
    fontWeight: '500',
  }),
  contentContainerStyle: {
    marginTop: 4,
  },
  renderCardItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  renderCardItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  renderCardItemImage: {
    width: Platform.OS === 'ios' ? 60 : 58,
    height: Platform.OS === 'ios' ? 60 : 58,
    borderRadius: Platform.OS === 'ios' ? 30 : 29,
  },
  renderCardItemText: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
    fontWeight: '500',
    marginLeft: 25,
  }),
  renderCardItemText2: tintColor => ({
    fontSize: 12,
    color: tintColor,
    letterSpacing: 0.3,
    marginLeft: 25,
    paddingTop: 6,
  }),
  renderCardItemImage2: {
    width: 18,
    height: 18,
    marginRight: 20,
    transform: [{rotate: '45deg'}],
  },
});

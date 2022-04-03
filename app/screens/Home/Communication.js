import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {Images} from '../../constants/Images';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  ButtonGroup,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';

const headerTabData = [
  {
    id: 1,
    name: 'Charts',
  },
  {
    id: 2,
    name: 'Calls',
  },
  {
    id: 3,
    name: 'Requests',
  },
];

const data = [
  {
    id: 1,
    accountName: 'vishwa_b_s',
    profileImage: Images.post1,
  },
  {
    id: 2,
    accountName: 'Instagram Account',
    profileImage: Images.post2,
  },
  {
    id: 3,
    accountName: 'Instagram Account',
    profileImage: Images.post3,
  },
  {
    id: 4,
    accountName: 'Instagram Account',
    profileImage: Images.post4,
  },
  {
    id: 5,
    accountName: 'Instagram Account',
    profileImage: Images.post5,
  },
  {
    id: 6,
    accountName: 'Instagram Account',
    profileImage: Images.post6,
  },
  {
    id: 7,
    accountName: 'Instagram Account',
    profileImage: Images.post7,
  },
  {
    id: 8,
    accountName: 'Instagram Account',
    profileImage: Images.post8,
  },
  {
    id: 9,
    accountName: 'Instagram Account',
    profileImage: Images.post4,
  },
  {
    id: 10,
    accountName: 'Instagram Account',
    profileImage: Images.post5,
  },
];

const Communication = () => {
  const selector = useSelector(state => state);
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(1);
  const [value, setValue] = useState('');
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedTab(item.id)}
        style={styles.renderItemStyle(selectedTab, item,tintColor)}>
        <Text style={styles.renderItemText(selectedTab, item, tintColor)}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCardItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderCardItemStyle}>
        <View style={styles.renderCardItemView}>
          <FastImage
            source={item.profileImage}
            style={styles.renderCardItemImage}
          />
          <View>
            <Text style={styles.renderCardItemText(tintColor)}>
              {item.accountName}
            </Text>
            <Text style={styles.renderCardItemText2(tintColor)}>{'Active Yestarday'}</Text>
          </View>
        </View>
        <FastImage
          source={Images.camera}
          tintColor={tintColor}
          style={styles.renderCardItemImage2}
        />
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
        Center={() => <TitleView title={'vishwa_b_s'} color={tintColor} />}
        Right={() => <ButtonGroup color={tintColor} />}
      />
      <View>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={headerTabData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
      <CussomTextInput
        image={Images.search}
        value={value}
        handleChange={text => setValue(text)}
        placeholder={'Search'}
        viewWrapperStyle={styles.ViewWrapper(tintColor)}
      />
      {selectedTab === 1 && (
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            renderItem={renderCardItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{height: 20}} />}
            ListFooterComponent={() => <View style={{height: 30}} />}
            contentContainerStyle={styles.contentContainerStyle2}
          />
        </View>
      )}
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
    marginVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: tintColor,
  }),
  contentContainerStyle: {
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#353839',
  },
  contentContainerStyle2: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  renderItemStyle: (selectedTab, item, tintColor) => ({
    paddingHorizontal: 42,
    paddingVertical: 12,
    borderBottomWidth: selectedTab === item.id ? 1 : 0,
    borderBottomColor: selectedTab === item.id ? tintColor : '#fff',
  }),
  renderItemText: (selectedTab, item, tintColor) => ({
    fontSize: 16,
    letterSpacing: 0.3,
    color: tintColor,
    fontWeight: selectedTab === item.id ? '500' : '400',
  }),
  renderCardItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  renderCardItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  renderCardItemImage: {width: 60, height: 60, borderRadius: 30},
  renderCardItemText: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
    fontWeight: '500',
    marginLeft: 25,
  }),
  renderCardItemText2: tintColor => ({
    fontSize: 14,
    color: tintColor,
    letterSpacing: 0.3,
    marginLeft: 25,
    paddingTop: 6,
  }),
  renderCardItemImage2: {width: 26, height: 26, marginRight: 15},
});
export default Communication;

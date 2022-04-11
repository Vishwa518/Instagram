import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {constants} from '../constants/constants';
import {Images} from '../constants/Images';
import HeaderComponent from '../instaComponents/Header/Header';
import {BackIcon, TitleView} from '../instaComponents/Header/HeaderComponents';
import BottomModal from '../instaComponents/Modal/BottomModal';
import CussomTextInput from '../instaComponents/TextInput/TextInput';
import ProfileInfo from './ProfileInfo';

const data = [
  {
    id: 1,
    name: 'Followers',
  },
  {
    id: 2,
    name: 'Following',
  },
];

const shareData = [
  {
    id: 1,
    accountName: 'Test User-1',
    profileImage: Images.post1,
  },
  {
    id: 2,
    accountName: 'Test User-2',
    profileImage: Images.post2,
  },
  {
    id: 3,
    accountName: 'Test User-3',
    profileImage: Images.post3,
  },
  {
    id: 4,
    accountName: 'Test User-4',
    profileImage: Images.post4,
  },
  {
    id: 5,
    accountName: 'Test User-5',
    profileImage: Images.post5,
  },
  {
    id: 6,
    accountName: 'Test User-6',
    profileImage: Images.post6,
  },
  {
    id: 7,
    accountName: 'Test User-7',
    profileImage: Images.post7,
  },
  {
    id: 8,
    accountName: 'Test User-8',
    profileImage: Images.post8,
  },
  {
    id: 9,
    accountName: 'Test User-9',
    profileImage: Images.post4,
  },
  {
    id: 10,
    accountName: 'Test User-10',
    profileImage: Images.post5,
  },
  {
    id: 11,
    accountName: 'Test User-11',
    profileImage: Images.post5,
  },
  {
    id: 12,
    accountName: 'Test User-12',
    profileImage: Images.post5,
  },
];

const sortOrderList = [
  {
    id: 1,
    name: 'Default',
  },
  {
    id: 2,
    name: 'Date fallowed: Latest',
  },
  {
    id: 3,
    name: 'Date fallowed: Oldest',
  },
];

const FollowAndFallowing = ({route}) => {
  const {tab} = route.params;
  const navigation = useNavigation();
  const {bgColor, tintColor} = constants();
  const [value, setValue] = useState('');
  const [selectedTab, setSelectedTab] = useState(tab);
  const [sortOrder, setSortOrder] = useState('Default');
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [selectedSort, setSelectedSort] = useState(1);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedTab(item.id)}
        style={styles.flatListTouchable(selectedTab, item, tintColor)}>
        <Text style={styles.touchableText(selectedTab, item, tintColor)}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderProfileInfo = ({item, index}) => {
    return (
      <View>
        {index === 0 && (
          <Text style={styles.fallowerText(tintColor)}>All Fallowers</Text>
        )}
        <ProfileInfo
          item={item}
          buttonName={'remove'}
          buttonBackgroundColor={'transparent'}
          newStyle={{borderWidth: 1}}
        />
      </View>
    );
  };

  const renderProfileInfoForFollowing = ({item, index}) => {
    return (
      <View>
        {index === 0 && (
          <View style={styles.viewWrapperStyle}>
            <Text style={styles.fallowerText(tintColor)}>
              {`Sorted by ${sortOrder}`}
            </Text>
            <Pressable onPress={() => setIsSortClicked(true)}>
              <Image
                source={Images.heart}
                style={{width: 24, height: 24, tintColor, right: 10}}
              />
            </Pressable>
          </View>
        )}
        <View style={styles.viewWrapperStyle}>
          <View style={{width: '95%'}}>
            <ProfileInfo
              item={item}
              buttonName={'Following'}
              buttonBackgroundColor={'transparent'}
              newStyle={{borderWidth: 1, width: '25%'}}
            />
          </View>
          <FastImage
            source={Images.vMenuIcon}
            tintColor={tintColor}
            style={styles.vMenuIcon}
          />
        </View>
      </View>
    );
  };

  const renderSortFilter = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSortOrder(item.name);
          setSelectedSort(item.id);
          setIsSortClicked(false);
        }}
        style={styles.sortFilterView}>
        <Text style={styles.sortFilterText(tintColor)}>{item.name}</Text>
        <View style={styles.outerView}>
          {selectedSort === item.id && (
            <View style={styles.innerView(bgColor)} />
          )}
        </View>
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
            title={'vishwa_b_s'}
            color={tintColor}
            NewStyle={{textAlign: 'left'}}
          />
        )}
        NewStyle={{marginHorizontal: 10}}
      />
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          data={data}
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={shareData}
          renderItem={renderProfileInfo}
          keyExtractor={item => item.id}
        />
      )}
      {selectedTab === 2 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={shareData}
          renderItem={renderProfileInfoForFollowing}
          keyExtractor={item => item.id}
        />
      )}
      <BottomModal
        visible={isSortClicked}
        minHeight={'28%'}
        onClose={() => setIsSortClicked(false)}>
        <View>
          <Text style={styles.sortByText(tintColor)}>Sort By</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={sortOrderList}
            renderItem={renderSortFilter}
            keyExtractor={item => item.id}
          />
        </View>
      </BottomModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
  }),
  contentContainerStyle: {
    justifyContent: 'space-around',
    width: '100%',
  },
  flatListTouchable: (selectedTab, item, tintColor) => ({
    width: 195,
    alignItems: 'center',
    borderBottomWidth: selectedTab === item.id ? 1 : 0,
    borderBottomColor: selectedTab === item.id ? tintColor : '#000',
    paddingVertical: 10,
  }),
  touchableText: (selectedTab, item, tintColor) => ({
    color: tintColor,
    fontSize: 16,
    letterSpacing: 0.3,
    fontWeight: selectedTab === item.id ? '500' : '400',
  }),
  ViewWrapper: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 15,
    marginTop: 14,
    marginBottom: 7,
    borderRadius: 5,
    borderWidth: tintColor === '#fff' ? 0 : 1,
    borderColor: tintColor,
  }),
  fallowerText: tintColor => ({
    color: tintColor,
    fontSize: 16,
    letterSpacing: 0.3,
    marginLeft: 15,
    marginVertical: 12,
  }),
  viewWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vMenuIcon: {
    width: 20,
    height: 20,
    right: 5,
    bottom: 1,
  },
  sortFilterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 12,
  },
  sortFilterText: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
  }),
  outerView: {
    width: 25,
    height: 25,
    borderRadius: 12,
    backgroundColor: '#007FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: bgColor => ({
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: bgColor,
  }),
  sortByText: tintColor => ({
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: tintColor,
    fontWeight: '600',
  }),
});
export default FollowAndFallowing;

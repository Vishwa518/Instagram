import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  FlatList,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import SmallButton from '../../instaComponents/Button/SmallButton';
import ProfileComponet from '../../instaComponents/Header/ProfileComponet';
import BottomModal from '../../instaComponents/Modal/BottomModal';

const data = [
  {
    id: 1,
    image: Images.dashboard,
  },
  {
    id: 2,
    image: Images.addUserIcon,
  },
];

const burgerMenuData = [
  {
    id: 1,
    image: Images.settings,
    name: 'Settings',
  },
  {
    id: 2,
    image: Images.history,
    name: 'Archive',
  },
  {
    id: 3,
    image: Images.system,
    name: 'Your activity',
  },
  {
    id: 4,
    image: Images.qrCode,
    name: 'QR code',
  },
  {
    id: 5,
    image: Images.save,
    name: 'Saved',
  },
  {
    id: 6,
    image: Images.closeFriends,
    name: 'Close Friends',
  },
  {
    id: 7,
    image: Images.coronavirus,
    name: 'COVID-19 information Center',
  },
];

const createStoryData = [
  {
    id: 1,
    image: Images.settings,
    name: 'Post',
  },
  {
    id: 2,
    image: Images.history,
    name: 'Reel',
  },
  {
    id: 3,
    image: Images.system,
    name: 'Story',
  },
  {
    id: 4,
    image: Images.qrCode,
    name: 'Story Highlight',
  },
  {
    id: 5,
    image: Images.save,
    name: 'Live',
  },
  {
    id: 6,
    image: Images.closeFriends,
    name: 'Guide',
  },
];

const profileDataList = [
  {
    id: 1,
    name: 'vishwa_b_s',
    image: Images.name1,
  },
  {
    id: 2,
    name: 'Add account',
    image: Images.name2,
  },
];
const AccountScreen = () => {
  const navigation = useNavigation();
  const selector = useSelector(state => state);
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;
  const [selectedTab, setSelectedTab] = useState(1);
  const [burgerMenuPressed, setBurgerMenuPressed] = useState(false);
  const [profileTextPressed, setProfileTextPressed] = useState(false);
  const [createStory, setCreateStory] = useState(false);

  const handleScreeenNaavigation = id => {
    if (id === 1) {
      navigation.navigate('SettingScreen');
    }
    setBurgerMenuPressed(false);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedTab(item.id)}
        style={styles.flatListTouchable(selectedTab, item, tintColor)}>
        <Image source={item.image} style={styles.flatListImage(tintColor)} />
      </TouchableOpacity>
    );
  };

  const renderBurgerMenuItem = ({item}) => {
    return (
      <Pressable
        onPress={() => handleScreeenNaavigation(item.id)}
        style={styles.renderBurgerMenuItem}>
        <FastImage
          source={item.image}
          tintColor={tintColor}
          style={styles.renderBurgerMenuItemImage}
        />
        <Text style={styles.renderBurgerMenuText(tintColor)}>{item.name}</Text>
      </Pressable>
    );
  };

  const renderCreateStory = ({item}) => {
    return (
      <Pressable style={styles.createStory}>
        <FastImage
          source={item.image}
          tintColor={tintColor}
          style={styles.createStoryImage}
        />
        <Text style={styles.createStoryText(tintColor)}>{item.name}</Text>
      </Pressable>
    );
  };
  const renderProfileList = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderProfileList}>
        <Image
          source={item.image}
          style={styles.renderProfileListImage(tintColor)}
        />
        <Text style={styles.renderProfileListText(tintColor)}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.headerTouchable}
          onPress={() => setProfileTextPressed(true)}>
          <Image
            source={Images.lockIcon}
            style={[styles.headerImage(tintColor), {marginRight: 5}]}
          />
          <Text style={styles.headerText(tintColor)}>vishwa_b_s</Text>
          <Image
            source={Images.downArrow}
            style={[styles.headerImage(tintColor), {marginLeft: 5}]}
          />
        </TouchableOpacity>
        <View style={styles.headerView2}>
          <TouchableOpacity onPress={() => setCreateStory(true)}>
            <Image
              source={Images.plus}
              style={styles.headerImage2(tintColor)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBurgerMenuPressed(true)}>
            <Image
              source={Images.menuIcon}
              style={styles.headerImage2(tintColor)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ProfileComponet
        avatar={Images.post1}
        noOfPost={1}
        noOfFollowers={214}
        noOfFollowing={284}
        tintColor={tintColor}
        userName={'Vishwa S'}
        comments={'Comments'}
      />
      <View style={styles.editButtonView}>
        <SmallButton
          text="Edit Profile"
          newStyle={{borderWidth: 1, width: '87%', height: 40}}
          tintColor={tintColor}
        />
        <SmallButton
          image={Images.addUserIcon}
          newStyle={{borderWidth: 1, width: '10%', height: 40}}
          newImageStyle={styles.newImageStyle(tintColor)}
        />
      </View>
      <View style={{justifyContent: 'space-evenly'}}>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
      <BottomModal
        onClose={() => setBurgerMenuPressed(false)}
        visible={burgerMenuPressed}
        minHeight={'50%'}>
        <FlatList
          scrollEnabled={false}
          data={burgerMenuData}
          renderItem={renderBurgerMenuItem}
          keyExtractor={item => item.id}
        />
      </BottomModal>
      <BottomModal
        visible={profileTextPressed}
        onClose={() => setProfileTextPressed(false)}
        minHeight={'20%'}>
        <FlatList
          scrollEnabled={false}
          data={profileDataList}
          renderItem={renderProfileList}
          keyExtractor={item => item.id}
        />
      </BottomModal>
      <BottomModal
        visible={createStory}
        onClose={() => setCreateStory(false)}
        minHeight={'64%'}>
        <View style={styles.createText}>
          <Text style={styles.createText2(tintColor)}>Create</Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={createStoryData}
          renderItem={renderCreateStory}
          keyExtractor={item => item.id}
        />
      </BottomModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 5 : 0,
  },
  headerTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: tintColor => ({width: 16, height: 16, tintColor: tintColor}),
  headerText: tintColor => ({
    fontSize: 22,
    color: tintColor,
    fontWeight: '500',
    letterSpacing: 0.3,
  }),
  headerView2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '26%',
  },
  headerImage2: tintColor => ({width: 24, height: 24, tintColor: tintColor}),
  commonText: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
  }),
  editButtonView: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  newImageStyle: tintColor => ({width: 20, height: 20, tintColor}),
  flatListImage: tintColor => ({width: 20, height: 20, tintColor: tintColor}),
  flatListTouchable: (selectedTab, item, tintColor) => ({
    width: 195,
    alignItems: 'center',
    borderBottomWidth: selectedTab === item.id ? 1 : 0,
    borderBottomColor: selectedTab === item.id ? tintColor : '#000',
    paddingVertical: 8,
  }),
  contentContainerStyle: {
    width: '100%',
    justifyContent: 'space-around',
  },
  createText: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F9F6EE',
  },
  createText2: tintColor => ({
    fontSize: 18,
    color: tintColor,
    letterSpacing: 0.3,
  }),
  renderBurgerMenuItem: {
    paddingVertical: 14,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderBurgerMenuItemImage: {width: 24, height: 24, marginRight: 15},
  renderBurgerMenuText: tintColor => ({
    fontSize: 18,
    color: tintColor,
    letterSpacing: 0.3,
  }),
  createStory: {
    paddingVertical: 12,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  createStoryImage: {width: 24, height: 24, marginRight: 15},
  createStoryText: tintColor => ({
    fontSize: 18,
    color: tintColor,
    letterSpacing: 0.3,
  }),
  renderProfileList: {
    paddingVertical: 14,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderProfileListImage: tintColor => ({
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: tintColor,
    tintColor: tintColor,
    marginRight: 15,
  }),
  renderProfileListText: tintColor => ({
    fontSize: 18,
    color: tintColor,
    letterSpacing: 0.3,
  }),
});
export default AccountScreen;

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Pressable,
  Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import SmallButton from '../../instaComponents/Button/SmallButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import ProfileComponet from '../../instaComponents/Header/ProfileComponet';
import BottomModal from '../../instaComponents/Modal/BottomModal';

const imageList = [
  {
    id: 1,
    image: Images.dashboard,
  },
  {
    id: 2,
    image: Images.instaReels,
  },
  {
    id: 3,
    image: Images.report,
  },
  {
    id: 4,
    image: Images.addUserIcon,
  },
];

const burgerMenuData = [
  {
    id: 1,
    name: 'Report...',
  },
  {
    id: 2,
    name: 'Block',
  },
  {
    id: 3,
    name: 'About this account',
  },
  {
    id: 4,
    name: 'Restrict',
  },
  {
    id: 5,
    name: 'Hide your story',
  },
  {
    id: 6,
    name: 'Copy profile URL',
  },
  {
    id: 7,
    name: 'Share this profile',
  },
];

const UserProfileScreen = ({route}) => {
  const numColumns = 3;
  const {accountName, profileImage} = route.params.item;
  const {bgColor, tintColor} = constants();
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(1);
  const [data, setData] = useState([]);
  const [isThreeDotPressed, setIsThreeDotPressed] = useState(false);
  const [isFallowing, setIsFallowing] = useState(false);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedTab(item.id)}
        style={styles.flatListTouchable(selectedTab, item, tintColor)}>
        <Image source={item.image} style={styles.newImageStyle2(tintColor)} />
      </TouchableOpacity>
    );
  };

  const renderUploadedPhotos = ({item}) => {
    return (
      <TouchableOpacity style={styles.uploadPhoto}>
        <FastImage
          source={{uri: item.download_url}}
          style={styles.uploadImage}
        />
      </TouchableOpacity>
    );
  };

  const renderBurgerMenuItem = ({item}) => {
    return (
      <Pressable
        onPress={() => setIsThreeDotPressed(false)}
        style={styles.renderBurgerMenuItem}>
        <Text style={styles.renderBurgerMenuText(tintColor)}>{item.name}</Text>
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
        Center={() => <TitleView title={accountName} color={tintColor} />}
        Right={() => (
          <IconButton
            image={Images.vMenuIcon}
            tintColor={tintColor}
            onPress={() => setIsThreeDotPressed(true)}
            newStyle={{alignItems: 'flex-end'}}
          />
        )}
      />
      <ProfileComponet
        avatar={profileImage}
        noOfPost={1}
        noOfFollowers={214}
        noOfFollowing={284}
        tintColor={tintColor}
        userName={accountName}
        comments={'Comments'}
        pressable1={() =>
          navigation.navigate('FollowAndFallowing', {
            tab: 1,
            accountName: accountName,
          })
        }
        pressable2={() =>
          navigation.navigate('FollowAndFallowing', {
            tab: 2,
            accountName: accountName,
          })
        }
      />
      <View style={styles.buttonView}>
        <SmallButton
          text={isFallowing ? 'Following' : 'Follow'}
          backgroundColor={isFallowing ? 'transparent' : '#007FFF'}
          tintColor={tintColor}
          onPress={() => setIsFallowing(!isFallowing)}
          newStyle={{borderWidth: isFallowing ? 1 : 0}}
        />
        <SmallButton
          text="Message"
          newStyle={{borderWidth: 1}}
          tintColor={tintColor}
          onPress={() =>
            navigation.navigate('ChatScreen', {item: route.params.item})
          }
        />
        <SmallButton
          image={Images.addUserIcon}
          newStyle={{borderWidth: 1, width: '10%'}}
          newImageStyle={styles.newImageStyle(tintColor)}
        />
      </View>
      <View>
        <FlatList
          horizontal
          data={imageList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
      {(selectedTab === 1 || selectedTab === 2) &&
        (data.length === 0 ? (
          <ActivityIndicator size="large" color={tintColor} />
        ) : (
          <FlatList
            data={data}
            renderItem={renderUploadedPhotos}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            numColumns={numColumns}
            style={{marginTop: 5}}
          />
        ))}
      {isThreeDotPressed && (
        <BottomModal
          onClose={() => setIsThreeDotPressed(false)}
          visible={isThreeDotPressed}
          minHeight={'50%'}>
          <FlatList
            scrollEnabled={false}
            data={burgerMenuData}
            renderItem={renderBurgerMenuItem}
            keyExtractor={item => item.id}
          />
        </BottomModal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
    marginHorizontal: 5,
  }),
  contentContainerStyle: {
    width: '100%',
    justifyContent: 'space-around',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  newImageStyle: tintColor => ({
    width: 20,
    height: 20,
    tintColor,
  }),
  newImageStyle2: tintColor => ({
    width: 22,
    height: 22,
    tintColor,
  }),
  flatListTouchable: (selectedTab, item, tintColor) => ({
    width: 95,
    alignItems: 'center',
    borderBottomWidth: selectedTab === item.id ? 1 : 1,
    borderBottomColor: selectedTab === item.id ? tintColor : '#111',
    paddingVertical: 10,
  }),
  renderBurgerMenuText: tintColor => ({
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
  uploadPhoto: {
    flex: 1,
    margin: 1,
  },
  uploadImage: {
    height: 130,
    width: '100%',
  },
});
export default UserProfileScreen;

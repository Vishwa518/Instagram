import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  TextInput,
  Pressable,
  Platform,
  Animated,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {Images} from '../../constants/Images';
import SmallButton from '../../instaComponents/Button/SmallButton';
import BottomModal from '../../instaComponents/Modal/BottomModal';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';
import ImageCardScreen from '../../screens/ImageCardScreen';
import ProfileInfo from '../../screens/ProfileInfo';
import {savePostToStore} from '../AccountScreen/accountScreen.action';

const dropDownList = [
  {
    id: 1,
    name: 'Post',
    image: Images.heart,
  },
  {
    id: 2,
    name: 'Story',
    image: Images.share,
  },
  {
    id: 3,
    name: 'Reel',
    image: Images.instaReels,
  },
  {
    id: 4,
    name: 'Live',
    image: Images.redHeart,
  },
];

const data = [
  {
    id: 1,
    accountName: 'Test User-1',
    profileImage: Images.post3,
    image: Images.post1,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 2,
    accountName: 'Test User-2',
    profileImage: Images.post6,
    image: Images.post2,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 3,
    accountName: 'Test User-3',
    profileImage: Images.post3,
    image: Images.post3,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 4,
    accountName: 'Test User-4',
    profileImage: Images.post7,
    image: Images.post4,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 5,
    accountName: 'Test User-5',
    profileImage: Images.post1,
    image: Images.post5,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 6,
    accountName: 'Test User-6',
    profileImage: Images.post5,
    image: Images.post6,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 7,
    accountName: 'Test User-7',
    profileImage: Images.post8,
    image: Images.post7,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 8,
    accountName: 'Test User-8',
    profileImage: Images.post3,
    image: Images.post8,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 9,
    accountName: 'Test User-9',
    profileImage: Images.post1,
    image: Images.post5,
    likes: 0,
    comments: 0,
    share: 0,
  },
];

const imageList = [
  {
    id: 1,
    name: 'Link',
    image: Images.link,
  },
  {
    id: 2,
    name: 'Share',
    image: Images.share2,
  },
  {
    id: 3,
    name: 'Report',
    image: Images.report,
  },
];

const textList = [
  {
    id: 1,
    text: "Why you're seeing this post",
  },
  {
    id: 2,
    text: 'Hide',
  },
  {
    id: 3,
    text: 'Unfollow',
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
];
let updatedSavePosts = [];
const PostCardItems = ({bgColor, tintColor, showDropDown}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [isSharePressed, setIsShaePressed] = useState(false);
  const [imageUrl, setImageUrl] = useState(Images.avatar);
  const [heartCliked, setHeartClicked] = useState([]);
  const [savePost, setSavePost] = useState([]);

  const handleChange = () => {
    setVisible(false);
  };

  const handleSharePost = item => {
    setIsShaePressed(true);
    setImageUrl(item.profileImage);
  };

  const handlePostLike = item => {
    const isAlreadyiked = heartCliked.some(data => data.id === item.id);
    if (!isAlreadyiked) {
      setHeartClicked([...heartCliked, {isCliked: true, id: item.id}]);
    } else {
      const updatedLikes = heartCliked.filter(data => data.id !== item.id);
      setHeartClicked(updatedLikes);
    }
  };

  const handlePostSave = item => {
    const isAlreadySaved = savePost.some(data => data.id === item.id);
    if (!isAlreadySaved) {
      updatedSavePosts.push({isCliked: true, id: item.id, item});
      setSavePost([...savePost, {isCliked: true, id: item.id, item}]);
    } else {
      const updatedList = savePost.filter(data => data.id !== item.id);
      updatedSavePosts = updatedList;
      setSavePost(updatedList);
    }
    dispatch(savePostToStore(updatedSavePosts));
  };

  const renderItem = ({item}) => {
    return (
      <ImageCardScreen
        item={item}
        tintColor={tintColor}
        navigation={navigation}
        styles={styles}
        setVisible={setVisible}
        handlePostLike={() => handlePostLike(item)}
        handlePostSave={() => handlePostSave(item)}
        handleSharePost={() => handleSharePost(item)}
        heartCliked={heartCliked}
        savePost={savePost}
      />
    );
  };

  const renderImageList = ({item}) => {
    return (
      <TouchableOpacity style={{alignItems: 'center'}}>
        <View style={styles.renderImageList(tintColor, item)}>
          <Image
            source={item.image}
            style={styles.renderImage(tintColor, item)}
          />
        </View>
        <Text style={styles.renderImageText(tintColor, item)}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderTextList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleChange()}
        style={styles.textList(item)}>
        <Text style={styles.textListText(tintColor)}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  const shareModal = ({item, index}) => {
    return (
      <>
        {index === 0 && (
          <>
            <View style={styles.shareModalView}>
              <FastImage
                source={imageUrl}
                style={styles.shareModalImage(tintColor)}
              />
              <TextInput
                value={value}
                autoCorrect={false}
                onChangeText={text => setValue(text)}
                placeholder="Write a message..."
                placeholderTextColor={tintColor}
                style={styles.shareModalTextinput}
              />
            </View>
            <CussomTextInput
              image={Images.search}
              value={value}
              handleChange={text => setValue(text)}
              placeholder={'Search'}
              viewWrapperStyle={styles.ViewWrapper(tintColor)}
            />
            <View style={styles.shareModalViewForImage}>
              <FastImage
                source={Images.avatar}
                tintColor={tintColor}
                style={styles.shareModalImage2(tintColor)}
              />
              <Text style={styles.shareModalText}>
                {'Add post to your story'}
              </Text>
            </View>
          </>
        )}
        <ProfileInfo
          item={item}
          buttonName={'Send'}
          onPress={() => setIsShaePressed(false)}
        />
      </>
    );
  };

  const SharePostModal = () => {
    return (
      <BottomModal
        onClose={() => setIsShaePressed(false)}
        visible={isSharePressed}
        minHeight="75%">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={shareData}
          renderItem={shareModal}
          style={{flex: 1}}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            marginVertical: 10,
          }}
        />
      </BottomModal>
    );
  };

  const DropDown = () => {
    return (
      <Animated.View style={styles.dropDownViewStyle(tintColor)}>
        <FlatList
          data={dropDownList}
          renderItem={renderDropDownItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </Animated.View>
    );
  };

  const renderDropDownItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.dropDownStyle}>
        <Text style={styles.dropDownText(tintColor)}>{item.name}</Text>
        <Image source={item.image} style={styles.dropDownImage(tintColor)} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
      <BottomModal
        onClose={() => setVisible(false)}
        visible={visible}
        minHeight={Platform.OS === 'ios' ? '40%' : '44%'}>
        <FlatList
          horizontal
          scrollEnabled={imageList.length > 3}
          showsHorizontalScrollIndicator={false}
          data={imageList}
          renderItem={renderImageList}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentStyle}
        />
        <FlatList
          scrollEnabled={textList.length > 3}
          showsVerticalScrollIndicator={false}
          data={textList}
          renderItem={renderTextList}
          keyExtractor={item => item.id}
        />
      </BottomModal>
      {isSharePressed && <SharePostModal />}
      {showDropDown && <DropDown />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  contentStyle: {
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  itemSeparator: {
    height: 10,
  },
  ViewWrapper: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: tintColor,
  }),
  shareModalView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 8,
  },
  shareModalImage: tintColor => ({
    width: 40,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: tintColor,
  }),
  shareModalTextinput: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    height: 35,
    width: '80%',
    marginLeft: 20,
    fontSize: 16,
  },
  shareModalViewForImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 10,
  },
  shareModalImage2: tintColor => ({
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: tintColor,
  }),
  shareModalText: {
    fontSize: 16,
    color: '#007FFF',
    letterSpacing: 0.3,
    fontWeight: '500',
    marginLeft: 25,
  },
  shareModalView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  shareModalImage3: {width: 50, height: 50, borderRadius: 25},
  shareModalText2: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
    fontWeight: '500',
    marginLeft: 25,
  }),
  shareModalButton: {
    width: '20%',
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  shareModalButtonText: bgColor => ({
    fontSize: 12,
    color: bgColor,
    fontWeight: '500',
    letterSpacing: 0.3,
  }),
  textList: item => ({
    padding: 15,
    borderTopWidth: item.id === 1 ? 1 : 0,
    borderBottomWidth: item.id === 1 ? 1 : 0,
    borderColor: item.id === 1 ? '#ddd' : '#000',
  }),
  textListText: tintColor => ({
    fontSize: 18,
    color: tintColor,
    letterSpacing: 0.4,
  }),
  renderImageList: (tintColor, item) => ({
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: item.id === 3 ? '#E97451' : tintColor,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  renderImage: (tintColor, item) => ({
    width: 28,
    height: 28,
    tintColor: item.id === 3 ? '#D22B2B' : tintColor,
  }),
  renderImageText: (tintColor, item) => ({
    paddingTop: 5,
    color: item.id === 3 ? '#D22B2B' : tintColor,
  }),
  dropDownViewStyle: tintColor => ({
    height: 165,
    width: 125,
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    position: 'absolute',
    top: -100,
    right: 1,
    borderRadius: 5,
  }),
  dropDownStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#353835',
  },
  dropDownText: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.4,
    fontWeight: '500',
  }),
  dropDownImage: tintColor => ({width: 23, height: 23, tintColor}),
});

export default PostCardItems;

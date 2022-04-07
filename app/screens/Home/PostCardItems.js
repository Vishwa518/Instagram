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
import {Images} from '../../constants/Images';
import SmallButton from '../../instaComponents/Button/SmallButton';
import BottomModal from '../../instaComponents/Modal/BottomModal';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';

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
    accountName: 'vishwa_b_s',
    profileImage: Images.name1,
    image: Images.post1,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 2,
    accountName: 'Instagram Account',
    profileImage: Images.name1,
    image: Images.post2,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 3,
    accountName: 'Instagram Account',
    profileImage: Images.name1,
    image: Images.post3,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 4,
    accountName: 'Instagram Account',
    profileImage: Images.name1,
    image: Images.post4,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 5,
    accountName: 'Instagram Account',
    profileImage: Images.name1,
    image: Images.post5,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 6,
    accountName: 'Instagram Account',
    profileImage: Images.name1,
    image: Images.post6,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 7,
    accountName: 'Instagram Account',
    profileImage: Images.name1,
    image: Images.post7,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 8,
    accountName: 'Instagram Account',
    profileImage: Images.name1,
    image: Images.post8,
    likes: 0,
    comments: 0,
    share: 0,
  },
  {
    id: 9,
    accountName: 'Instagram Account',
    profileImage: Images.name1,
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
const PostCardItems = ({bgColor, tintColor, showDropDown}) => {
  const navigation = useNavigation();
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
    console.log('item.profileImage', item);
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
      setSavePost([...savePost, {isCliked: true, id: item.id}]);
    } else {
      const updatedList = savePost.filter(data => data.id !== item.id);
      setSavePost(updatedList);
    }
  };

  const renderItem = ({item}) => {
    const postLikedId = heartCliked.filter(data => data.id === item.id);
    const postSavedId = savePost.filter(data => data.id === item.id);
    return (
      <View>
        <View style={styles.cardMainView}>
          <TouchableOpacity
            style={styles.headerContent}
            onPress={() => navigation.navigate('UserProfileScreen')}>
            <Image source={item.profileImage} style={styles.profileImage} />
            <Text style={styles.accountName(tintColor)}>
              {item.accountName}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image
              source={Images.vMenuIcon}
              style={styles.threeDots(tintColor)}
            />
          </TouchableOpacity>
        </View>
        <Pressable onPress={() => handlePostLike(item)}>
          <Image source={item.image} style={styles.mainImage} />
        </Pressable>
        <View style={styles.bottomContent}>
          <View style={styles.bottomContentLeft}>
            <TouchableOpacity onPress={() => handlePostLike(item)}>
              <Image
                source={
                  postLikedId[0]?.isCliked ? Images.redHeart : Images.heart
                }
                style={[
                  styles.commonImageStyle(tintColor),
                  {tintColor: postLikedId[0]?.isCliked ? 'red' : tintColor},
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('CommentScreen')}>
              <Image
                source={Images.comments}
                style={styles.commonImageStyle2(tintColor)}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSharePost(item)}>
              <Image
                source={Images.share}
                style={styles.commonImageStyle(tintColor)}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => handlePostSave(item)}>
            <Image
              source={
                postSavedId[0]?.isCliked ? Images.filledBookMark : Images.save
              }
              style={[
                styles.commonImageStyle3(tintColor),
                {tintColor: postSavedId[0]?.isCliked ? 'white' : tintColor},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
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
                tintColor={tintColor}
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
        <View style={styles.shareModalView2}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              source={item.profileImage}
              style={styles.shareModalImage3}
            />
            <Text style={styles.shareModalText2(tintColor)}>
              {item.accountName}
            </Text>
          </View>
          <SmallButton
            onPress={() => setIsShaePressed(false)}
            text="Send"
            newStyle={styles.shareModalButton}
            backgroundColor={'#007FFF'}
            tintColor={tintColor}
          />
        </View>
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
  cardMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FD1D1D',
  },
  accountName: tintColor => ({
    fontSize: 16,
    letterSpacing: 0.3,
    fontWeight: '500',
    paddingLeft: 10,
    color: tintColor,
  }),
  threeDots: tintColor => ({
    width: 18,
    height: 18,
    tintColor: tintColor,
  }),
  mainImage: {
    width: '100%',
    height: 500,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  bottomContentLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
  },
  commonImageStyle: tintColor => ({
    width: 25,
    height: 25,
    tintColor: tintColor,
  }),
  commonImageStyle2: tintColor => ({
    width: 40,
    height: 40,
    tintColor: tintColor,
  }),
  commonImageStyle3: tintColor => ({
    width: 20,
    height: 22,
    tintColor: tintColor,
  }),
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

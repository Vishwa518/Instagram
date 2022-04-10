import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import {Images} from '../constants/Images';

const ImageCardScreen = ({
  item,
  tintColor,
  navigation,
  handlePostLike,
  setVisible,
  handlePostSave,
  heartCliked,
  savePost,
  handleSharePost,
}) => {
  const postLikedId = heartCliked.filter(data => data.id === item.id);
  const postSavedId = savePost.filter(data => data.id === item.id);
  return (
    <View>
      <View style={styles.cardMainView}>
        <TouchableOpacity
          style={styles.headerContent}
          onPress={() => navigation.navigate('UserProfileScreen', {item})}>
          <Image source={item.profileImage} style={styles.profileImage} />
          <Text style={styles.accountName(tintColor)}>{item.accountName}</Text>
        </TouchableOpacity>
        <Pressable onPress={() => setVisible(true)}>
          <Image
            source={Images.vMenuIcon}
            style={styles.threeDots(tintColor)}
          />
        </Pressable>
      </View>
      <Pressable onPress={handlePostLike}>
        <Image source={item.image} style={styles.mainImage} />
      </Pressable>
      <View style={styles.bottomContent}>
        <View style={styles.bottomContentLeft}>
          <TouchableOpacity onPress={handlePostLike}>
            <Image
              source={postLikedId[0]?.isCliked ? Images.redHeart : Images.heart}
              style={[
                styles.commonImageStyle(tintColor),
                {
                  tintColor: postLikedId[0]?.isCliked ? 'red' : tintColor,
                },
              ]}
            />
          </TouchableOpacity>
          <Pressable onPress={() => navigation.navigate('CommentScreen')}>
            <Image
              source={Images.comments}
              style={styles.commonImageStyle2(tintColor)}
            />
          </Pressable>
          <Pressable onPress={handleSharePost}>
            <Image
              source={Images.share}
              style={styles.commonImageStyle(tintColor)}
            />
          </Pressable>
        </View>
        <TouchableOpacity onPress={handlePostSave}>
          <Image
            source={
              postSavedId[0]?.isCliked ? Images.filledBookMark : Images.save
            }
            style={[
              styles.commonImageStyle3(tintColor),
              {
                tintColor: postSavedId[0]?.isCliked ? 'white' : tintColor,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default ImageCardScreen;

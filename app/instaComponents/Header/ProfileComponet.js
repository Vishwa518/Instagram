import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
} from 'react-native';
import PropTypes from 'prop-types';

const ProfileComponet = ({
  tintColor,
  noOfPost,
  noOfFollowers,
  noOfFollowing,
  avatar,
  userName,
  comments,
}) => {
  return (
    <View>
      <View style={styles.subHeaderView}>
        <TouchableOpacity>
          <Image
            source={avatar}
            style={styles.profileIcon}
            resizeMode={'stretch'}
          />
        </TouchableOpacity>
        <View style={styles.tetWrapper}>
          <Pressable style={styles.pressableText}>
            <Text style={styles.commonText(tintColor)}>{noOfPost}</Text>
            <Text style={styles.commonText(tintColor)}>Post</Text>
          </Pressable>
          <Pressable style={styles.pressableText}>
            <Text style={styles.commonText(tintColor)}>{noOfFollowers}</Text>
            <Text style={styles.commonText(tintColor)}>Followers</Text>
          </Pressable>
          <Pressable style={styles.pressableText}>
            <Text style={styles.commonText(tintColor)}>{noOfFollowing}</Text>
            <Text style={styles.commonText(tintColor)}>Following</Text>
          </Pressable>
        </View>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.commonText(tintColor)}>{userName}</Text>
        <Text style={styles.commonText(tintColor)}>{comments}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  profileIcon: {width: 90, height: 90, borderRadius: 45},
  tetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
  },
  pressableText: {alignItems: 'center', justifyContent: 'center'},
  commonText: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
  }),
});
export default ProfileComponet;

ProfileComponet.propTypes = {
  tintColor: PropTypes.string,
  noOfPost: PropTypes.number,
  noOfFollowers: PropTypes.number,
  noOfFollowing: PropTypes.number,
  avatar: PropTypes.any,
  userName: PropTypes.string,
  comments: PropTypes.string,
};

ProfileComponet.defaultProps = {
  tintColor: '',
  noOfPost: null,
  noOfFollowers: null,
  noOfFollowing: null,
  avatar: null,
  userName: null,
  comments: null,
};

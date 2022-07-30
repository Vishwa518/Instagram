import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {Images} from '../../constants/Images';
import SmallButton from '../../instaComponents/Button/SmallButton';
import {useNavigation} from '@react-navigation/native';
const imageList = [
  {
    id: 1,
    image: Images.heart,
  },
  {
    id: 2,
    image: Images.comments,
  },
  {
    id: 3,
    image: Images.share,
  },
  {
    id: 4,
    image: Images.vMenuIcon,
  },
];

const data = [
  {
    id: 1,
    uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
    accountName: 'Hello',
    profileImage: Images.post1,
  },
  {
    id: 2,
    uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
    accountName: 'Hello',
    profileImage: Images.post8,
  },
  {
    id: 3,
    uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
    accountName: 'Hello',
    profileImage: Images.post3,
  },
  {
    id: 4,
    uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
    accountName: 'Hello',
    profileImage: Images.post5,
  },
];
const ReelsFeed = () => {
  const navigation = useNavigation();
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

  const onProgress = data => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = data => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = data => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={{paddingVertical: 20, marginRight: 10}}>
        <Image
          source={item.image}
          style={{
            width: index === 1 ? 40 : 26,
            height: index === 1 ? 40 : 26,
            tintColor: '#fff',
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderVideoItem = ({item}) => {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={false}
          ref={videoPlayer}
          resizeMode={'cover'}
          onFullScreen={false}
          source={{
            uri: item.uri,
          }}
          style={styles.mediaPlayer}
          volume={10}
        />
        <View style={styles.viewWrapper}>
          <View style={styles.viewWrapper2}>
            <Pressable
              style={styles.profileWrapper}
              onPress={() =>
                navigation.navigate('UserProfileScreen', {
                  item: {
                    accountName: item.accountName,
                    profileImage: item.profileImage,
                  },
                })
              }>
              <Image source={Images.post1} style={styles.imageWrapper} />
              <Text style={styles.profileName}>Hello</Text>
            </Pressable>
            <SmallButton
              text="Follow"
              newStyle={{borderWidth: 1, height: 30}}
              tintColor={'#fff'}
            />
          </View>
          <View>
            <FlatList
              data={imageList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={false}
          ref={videoPlayer}
          resizeMode={'cover'}
          onFullScreen={false}
          source={{
            uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
          }}
          style={styles.mediaPlayer}
          volume={10}
        />
        <View style={styles.viewWrapper}>
          <View style={styles.viewWrapper2}>
            <Pressable
              style={styles.profileWrapper}
              onPress={() =>
                navigation.navigate('UserProfileScreen', {
                  item: {
                    accountName: 'hello',
                    profileImage: Images.post4,
                  },
                })
              }>
              <Image source={Images.post1} style={styles.imageWrapper} />
              <Text style={styles.profileName}>Hello</Text>
            </Pressable>
            <SmallButton
              text="Follow"
              newStyle={{borderWidth: 1, height: 30}}
              tintColor={'#fff'}
            />
          </View>
          <View>
            <FlatList
              data={imageList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReelsFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  viewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  viewWrapper2: {
    width: '68%',
    justifyContent: 'space-between',
    marginBottom: 35,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 35,
    height: 35,
    borderRadius: 17,
  },
  profileName: {
    fontSize: 16,
    color: '#fff',
    letterSpacing: 0.3,
    marginLeft: 14,
  },
  contentContainerStyle: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

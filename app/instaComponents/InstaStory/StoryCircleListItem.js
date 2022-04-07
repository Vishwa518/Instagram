import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import {usePrevious} from './helpers/StateHelpers';

import DEFAULT_AVATAR from './assets/images/no_avatar.png';
import { Images } from '../../constants/Images';

const StoryCircleListItem = props => {
  const {
    item,
    unPressedBorderColor,
    pressedBorderColor,
    avatarSize,
    showText,
    textStyle,
  } = props;

  const [isPressed, setIsPressed] = useState(props?.item?.seen);

  const prevSeen = usePrevious(props?.item?.seen);

  useEffect(() => {
    if (prevSeen != props?.item?.seen) {
      setIsPressed(props?.item?.seen);
    }
  }, [props?.item?.seen]);

  const _handleItemPress = item => {
    const {handleStoryItemPress} = props;

    if (handleStoryItemPress) handleStoryItemPress(item);

    setIsPressed(true);
  };

  const size = avatarSize ?? 60;

  return (
    <View style={styles.container}>
      <View style={styles.viewWrapper(item.user_id)}>
        <TouchableOpacity
          onPress={() => item.user_id !== 1 && _handleItemPress(item)}
          style={[
            styles.avatarWrapper,
            {
                height: size + 4,
                width: size + 4,
            },
            !isPressed
              ? {
                  borderColor: unPressedBorderColor
                    ? unPressedBorderColor
                    : 'red',
                }
              : {
                  borderColor: pressedBorderColor ? pressedBorderColor : 'grey',
                },
          ]}>
          <Image
            style={{
              height: size,
              width: size,
              borderRadius: 100,
            }}
            source={item.user_image}
            defaultSource={Platform.OS === 'ios' ? DEFAULT_AVATAR : null}
          />
           {item.user_id === 1 && (
            <View style={styles.plusIconStyle}>
              <Image source={Images.plus1} style={styles.plusIcon} />
            </View>
          )}
        </TouchableOpacity>
      </View>
      {showText && (
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={{
            width: size + 4,
            ...styles.text,
            ...textStyle,
          }}>
          {item.user_name}
        </Text>
      )}
    </View>
  );
};

export default StoryCircleListItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginRight: 10,
  },
  viewWrapper: id => ({
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: id !== 1 ? 2 : 0,
    borderColor: id !== 1 ? '#FD1D1D' : '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  avatarWrapper: {
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // borderColor: 'red',
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  text: {
    marginTop: 3,
    textAlign: 'center',
    fontSize: 14,
  },
  plusIcon: {
    width: 10,
    height: 10,
    tintColor: '#fff',
  },
  plusIconStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#007FFF',
    borderRadius: 10,
    position: 'absolute',
    bottom: -1,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

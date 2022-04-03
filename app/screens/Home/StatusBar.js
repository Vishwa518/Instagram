import React from 'react';
import {
  Animated,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import {Images} from '../../constants/Images';

const data = [
  {
    id: 1,
    name: 'vishwa_b_s',
    image: Images.post1,
  },
  {
    id: 2,
    name: 'Vishwa S',
    image: Images.post2,
  },
  {
    id: 3,
    name: 'Vishwa S',
    image: Images.post3,
  },
  {
    id: 4,
    name: 'Vishwa S',
    image: Images.post4,
  },
  {
    id: 5,
    name: 'Vishwa S',
    image: Images.post5,
  },
  {
    id: 6,
    name: 'Vishwa S',
    image: Images.post6,
  },
  {
    id: 7,
    name: 'Vishwa S',
    image: Images.post7,
  },
  {
    id: 8,
    name: 'Vishwa S',
    image: Images.post8,
  },
  {
    id: 9,
    name: 'Vishwa S',
    image: Images.post4,
  },
  {
    id: 10,
    name: 'Vishwa S',
    image: Images.post2,
  },
  {
    id: 11,
    name: 'Vishwa S',
    image: Images.post1,
  },
];

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
const StatusBar = ({bgColor, tintColor, showDropDown}) => {
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

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemStyle}>
        <TouchableOpacity style={styles.touchableStyle}>
          <Image source={item.image} style={styles.imageStyle} />
          {index === 0 && (
            <View style={styles.plusIconStyle}>
              <Image source={Images.plus1} style={styles.plusIcon} />
            </View>
          )}
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.textStyle(tintColor)}>
          {index === 0 ? 'Your story' : item.name}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      {showDropDown && <DropDown />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  itemStyle: {
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableStyle: {
    width: 75,
    height: 75,
    borderRadius: 37,
    borderWidth: 2,
    borderColor: '#FD1D1D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: tintColor => ({
    paddingTop: 5,
    letterSpacing: 0.3,
    color: tintColor,
  }),
  plusIcon: {
    width: 10,
    height: 10,
    tintColor: '#fff',
  },
  imageStyle: {
    width: 64,
    height: 64,
    borderRadius: 32,
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
  dropDownViewStyle: tintColor => ({
    height: 165,
    width: 130,
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    position: 'absolute',
    top: -12,
    right: 0,
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
export default StatusBar;

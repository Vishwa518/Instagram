import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';

const SavedPosts = () => {
  const navigation = useNavigation();
  const selector = useSelector(state => state);
  const savedPosts = selector.savedPosts.savedPosts;
  const {bgColor, tintColor} = constants();

  const Postitem = ({item, index}) => {
    return (
      <IconButton
        isDisabled
        image={item.item.image}
        newImageStyle={styles.image}
        newStyle={styles.viewWrapper}
      />
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
            title={'Saved'}
            color={tintColor}
            NewStyle={{textAlign: 'left'}}
          />
        )}
        Right={() => (
          <IconButton
            image={Images.plus1}
            tintColor={tintColor}
            newImageStyle={{width: 20, height: 20}}
            newStyle={{alignItems: 'flex-end'}}
          />
        )}
      />
      <Pressable
        style={styles.pressableWrapper}
        onPress={() =>
          navigation.navigate('AllPosts', {
            savedPosts,
            bgColor,
            tintColor,
            navigation,
          })
        }>
        {savedPosts.map(
          (item, index) => index < 4 && <Postitem item={item} index={index} />,
        )}
      </Pressable>
      <Text style={styles.textStyle(tintColor)}>All Post</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
    marginHorizontal: 10,
  }),
  pressableWrapper: {
    width: '49%',
    height: 180,
    borderRadius: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  viewWrapper: {
    width: '50%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '99%',
    height: '99%',
    borderRadius: 2,
  },
  textStyle: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
    fontWeight: '500',
    marginTop: 10,
  }),
});
export default SavedPosts;

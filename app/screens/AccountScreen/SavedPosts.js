import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';

const SavedPosts = () => {
  const selector = useSelector(state => state);
  const navigation = useNavigation();
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;

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
            //   onPress={() => setIsThreeDotPressed(true)}
            newStyle={{alignItems: 'flex-end'}}
          />
        )}
      />
      <Pressable
        style={{
          width: '49%',
          height: 180,
          backgroundColor: 'red',
          borderRadius: 10,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: '50%',
                height: '50%',
                backgroundColor: 'yellow',
                borderWidth: 1,
                borderColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
    marginHorizontal: 10,
  }),
});
export default SavedPosts;

import React, {useState} from 'react';
import {FlatList, StyleSheet, View, SafeAreaView} from 'react-native';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';

const data = [
  {id: 1, icon: Images.dashboard},
  {id: 2, icon: Images.instaReels},
];
const AllPosts = ({route}) => {
  const numColumns = 3;
  const {savedPosts, bgColor, tintColor, navigation} = route.params;
  const [selectedTab, setSelectedTab] = useState(1);

  const renderSavedPosts = ({item}) => {
    return (
      <IconButton
        image={item.item.image}
        newImageStyle={styles.uploadImage}
        newStyle={styles.uploadPhoto}
      />
    );
  };

  const renderHeader = ({item}) => (
    <IconButton
      image={item.icon}
      tintColor={tintColor}
      newImageStyle={styles.flatListImage(tintColor, item)}
      onPress={() => setSelectedTab(item.id)}
      newStyle={styles.flatListTouchable(selectedTab, item, tintColor)}
    />
  );

  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <View style={{marginHorizontal: 10}}>
        <HeaderComponent
          nav={navigation}
          Left={() => (
            <BackIcon nav={() => navigation.goBack()} color={tintColor} />
          )}
          Center={() => (
            <TitleView
              title={'All Posts'}
              color={tintColor}
              NewStyle={{textAlign: 'left'}}
            />
          )}
          Right={() => (
            <IconButton
              image={Images.vMenuIcon}
              tintColor={tintColor}
              newImageStyle={{width: 20, height: 20}}
              newStyle={{alignItems: 'flex-end'}}
            />
          )}
        />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderHeader}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
      <FlatList
        data={savedPosts}
        renderItem={renderSavedPosts}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        style={{marginTop: 5}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
  }),
  uploadPhoto: {
    flex: 1,
    margin: 1,
  },
  uploadImage: {
    height: 130,
    width: '100%',
  },
  contentContainerStyle: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  flatListTouchable: (selectedTab, item, tintColor) => ({
    width: 195,
    alignItems: 'center',
    borderBottomWidth: selectedTab === item.id ? 1 : 0,
    borderBottomColor: selectedTab === item.id ? tintColor : '#000',
    paddingVertical: 8,
  }),
  flatListImage: (tintColor, item) => ({
    width: item.id === 1 ? 22 : 24,
    height: item.id === 1 ? 22 : 24,
    tintColor,
  }),
});
export default AllPosts;

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Pressable,
  Text,
} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';

const SearchFeeds = () => {
  const navigation = useNavigation();
  const {bgColor, tintColor} = constants();
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {
      name: 'TURQUOISE',
      image: Images.post1,
    },
    {
      name: 'EMERALD',
      image: Images.post2,
    },
    {
      name: 'PETER RIVER',
      image: Images.post3,
    },
    {
      name: 'AMETHYST',
      image: Images.post4,
    },
    {
      name: 'WET ASPHALT',
      image: Images.post5,
    },
    {
      name: 'GREEN SEA',
      image: Images.post6,
    },
    {
      name: 'NEPHRITIS',
      image: Images.post7,
    },
    {
      name: 'BELIZE HOLE',
      image: Images.post8,
    },
    {
      name: 'BELIZE HOLE',
      image: Images.post4,
    },
    {
      name: 'SUN FLOWER',
      image: Images.post2,
    },
    {
      name: 'ORANGE',
      image: Images.post1,
    },
    {
      name: 'PUMPKIN',
      image: Images.post7,
    },
    {
      name: 'POMEGRANATE',
      image: Images.post8,
    },
    {
      name: 'SILVER',
      image: Images.post4,
    },
    {
      name: 'SILVER',
      image: Images.post2,
    },
  ]);
  return (
    <SafeAreaView style={styles.container(bgColor)}>
      <Pressable
        onPress={() => navigation.navigate('SearchScreen')}
        style={styles.ViewWrapper(tintColor)}>
        <Text style={styles.textStyle(tintColor)}>Search</Text>
      </Pressable>
      <SectionGrid
        itemDimension={90}
        showsVerticalScrollIndicator={false}
        sections={[
          {
            title: 'Title1',
            data: items.slice(0, 6),
          },
          {
            title: 'Title2',
            data: items.slice(6, 12),
          },
          {
            title: 'Title3',
            data: items.slice(12, 20),
          },
        ]}
        style={styles.gridView}
        renderItem={({item, section, index}) => (
          <ImageBackground source={item.image} style={styles.itemContainer} />
        )}
        // renderSectionHeader={({section}) => (
        //   <Text style={styles.sectionHeader}>{section.title}</Text>
        // )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
  viewWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewWrapper: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: tintColor,
    marginTop: 6,
    height: 40,
  }),
  textStyle: tintColor => ({
    fontSize: 16,
    color: tintColor,
    marginLeft: 10,
    letterSpacing: 0.3,
  }),
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    borderRadius: 5,
    height: 130,
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});
export default SearchFeeds;

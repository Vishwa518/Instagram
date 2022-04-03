import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, ImageBackground} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import {useSelector} from 'react-redux';
import {Images} from '../constants/Images';
import CussomTextInput from '../instaComponents/TextInput/TextInput';

const SearchFeeds = () => {
  const selector = useSelector(state => state);
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;
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
      <CussomTextInput
        image={Images.search}
        value={value}
        handleChange={text => setValue(text)}
        placeholder={'Search'}
        viewWrapperStyle={styles.ViewWrapper(tintColor)}
      />
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
  ViewWrapper: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: tintColor,
    marginVertical: 2,
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

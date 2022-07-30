import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import Container from '../../instaComponents/Container';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';

const data = [
  {
    id: 1,
    image: Images.heart,
    text1: 'Time spent',
    text2: 'See how much time you usually  spend on instagram each day.',
  },
  {
    id: 2,
    image: Images.instaReels,
    text1: 'Photos and videos',
    text2: "View, archive or delete photos and videos you're shared",
  },
  {
    id: 3,
    image: Images.home,
    text1: 'Interactions',
    text2: 'Review and delete likes, comments, and your other interactions.',
  },
  {
    id: 4,
    image: Images.share2,
    text1: 'Account history',
    text2: "Review changes you're made to your account since you created it.",
  },
  {
    id: 5,
    image: Images.search,
    text1: 'Recent searches',
    text2:
      "Review things you're searched for aon instagram and clear your search history.",
  },
  {
    id: 6,
    image: Images.share,
    text1: "Links you've visited",
    text2: "See which links you've visited recentley.",
  },
  {
    id: 7,
    image: Images.bell,
    text1: 'Time spent',
    text2: 'See how much time you usually  spend on instagram each day.',
  },
];

const YourActivity = () => {
  const {tintColor} = constants();
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.viewWrapper2}>
        <Image source={item.image} style={styles.image(tintColor)} />
        <View style={{width: '72%'}}>
          <Text style={styles.activityText(tintColor)}>{item.text1}</Text>
          <Text style={styles.activityText2}>{item.text2}</Text>
        </View>
        <Image source={Images.next} style={styles.image2(tintColor)} />
      </TouchableOpacity>
    );
  };
  return (
    <Container>
      <View style={{marginHorizontal: 5}}>
        <HeaderComponent
          nav={navigation}
          Left={() => (
            <BackIcon nav={() => navigation.goBack()} color={tintColor} />
          )}
          Center={() => (
            <TitleView
              title={'Your Activity'}
              color={tintColor}
              NewStyle={{textAlign: 'center'}}
            />
          )}
        />
      </View>
      <View style={styles.viewWrapper}>
        <Text style={styles.constText(tintColor)}>
          {'One Place to manage your  activity'}
        </Text>
        <View style={styles.viewWrapper}>
          <Text style={styles.constText2}>
            We've added more tools for you to review
          </Text>
          <Text style={styles.constText2}>
            and manage your photos, videos, account
          </Text>
          <Text style={styles.constText2}>and activity on instagram.</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        //   contentContainerStyle={{marginVertical:5}}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    alignItems: 'center',
    marginVertical: 15,
  },
  constText: tintColor => ({
    fontSize: 24,
    color: tintColor,
    letterSpacing: 1.5,
    fontWeight: '500',
    textAlign: 'center',
  }),
  constText2: {
    fontSize: 14,
    color: '#8D8D8C',
    letterSpacing: 0.4,
    marginVertical: 1,
  },
  viewWrapper2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#666663',
  },
  image: tintColor => ({
    width: 24,
    height: 24,
    tintColor,
    marginLeft: 4,
  }),
  activityText: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
  }),
  activityText2: {
    fontSize: 16,
    color: '#8D8D8C',
    letterSpacing: 0.3,
    paddingVertical: 2,
  },
  image2: tintColor => ({
    width: 20,
    height: 16,
    tintColor,
    marginRight: 8,
  }),
});
export default YourActivity;

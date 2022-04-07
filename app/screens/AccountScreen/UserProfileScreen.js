import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Images} from '../../constants/Images';
import SmallButton from '../../instaComponents/Button/SmallButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  ButtonGroup,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import ProfileComponet from '../../instaComponents/Header/ProfileComponet';

const UserProfileScreen = () => {
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
        Center={() => <TitleView title={'vishwa_b_s'} color={tintColor} />}
        Right={() => (
          <ButtonGroup
            color={tintColor}
            isShare={false}
            image={Images.vMenuIcon}
          />
        )}
      />
      <ProfileComponet
        avatar={Images.post1}
        noOfPost={1}
        noOfFollowers={214}
        noOfFollowing={284}
        tintColor={tintColor}
        userName={'Vishwa S'}
        comments={'Comments'}
      />
      <View style={styles.buttonView}>
        <SmallButton
          text="Follow"
          backgroundColor={'#007FFF'}
          tintColor={tintColor}
        />
        <SmallButton
          text="Message"
          newStyle={{borderWidth: 1}}
          tintColor={tintColor}
        />
        <SmallButton
          image={Images.addUserIcon}
          newStyle={{borderWidth: 1, width: '10%'}}
          newImageStyle={styles.newImageStyle(tintColor)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
    marginHorizontal: 5,
  }),
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  newImageStyle: tintColor => ({width: 20, height: 20, tintColor}),
});
export default UserProfileScreen;

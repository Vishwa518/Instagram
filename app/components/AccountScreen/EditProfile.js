import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Image,
  Pressable,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {editProfileDetails} from './accountScreen.action';
import Spinner from '../../instaComponents/Loader';

const EditProfile = ({
  setIsEditProfileClicked,
  bgColor,
  tintColor,
  profileInfo,
}) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const [value, setValue] = useState('');
  const [userName, setUserName] = useState('');
  const [web, setWeb] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    setValue(profileInfo.name);
    setUserName(profileInfo.userName);
    setWeb(profileInfo.website);
    setAbout(profileInfo.aboutInfo);
    setImage(profileInfo.profileImage);
  }, [profileInfo]);

  const updateProfileDetails = () => {
    setLoader(true);
    const profileDetails = {
      name: value,
      userName: userName,
      profileImage: image,
      aboutInfo: about,
      website: web,
    };
    dispatch(editProfileDetails(profileDetails));
    setTimeout(() => {
      setLoader(false);
      setIsEditProfileClicked(false);
    }, 2000);
  };

  const pickSingle = (cropit, circular = false, mediaType) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    })
      .then(image => {
        setImage({
          uri: image.sourceURL,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
      })
      .catch(e => {
        console.log('error', e);
      });
  };

  const TextBox = useCallback(({value, handleChange, placeholder, heading}) => {
    return (
      <View style={{marginVertical: 8}}>
        <Text style={styles.heading(tintColor)}>{heading}</Text>
        <TextInput
          value={value}
          onChangeText={text => handleChange(text)}
          placeholder={placeholder}
          placeholderTextColor={tintColor}
          style={[styles.textInputStyle(tintColor)]}
        />
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container(bgColor)}>
      {loader && <Spinner />}
      <View style={styles.IconButton}>
        <IconButton
          image={Images.plus1}
          onPress={() => setIsEditProfileClicked(false)}
          tintColor={tintColor}
          newImageStyle={styles.newImageStyle(true)}
        />
        <IconButton
          image={Images.tickIcon}
          onPress={() => updateProfileDetails()}
          tintColor={'#007FFF'}
          newImageStyle={styles.newImageStyle(false)}
        />
      </View>
      <View style={{marginTop: 10}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={image && image.uri ? image : Images.post3}
            style={styles.profileImage}
          />
          <Pressable
            style={{marginTop: 15}}
            onPress={() => pickSingle(true, false, 'photo')}>
            <Text style={styles.profileText}>Change Profile Photo</Text>
          </Pressable>
        </View>
        <TextBox
          heading={'Name'}
          value={value}
          handleChange={setValue}
          placeholder={'Name'}
        />
        <TextBox
          heading={'User name'}
          value={userName}
          handleChange={setUserName}
          placeholder={'User name'}
        />
        <TextBox
          heading={'Web'}
          value={web}
          handleChange={setWeb}
          placeholder={'Web'}
        />
        <TextBox
          heading={'About'}
          value={about}
          handleChange={setAbout}
          placeholder={'About'}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Pressable style={{marginVertical: 8}}>
          <Text style={styles.profileText2}>Switch to business account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: bgColor => ({
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: bgColor,
  }),
  IconButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginHorizontal: 10,
  },
  newImageStyle: isRotate => ({
    width: 24,
    height: 24,
    transform: [{rotate: isRotate ? '45deg' : '0deg'}],
  }),
  textInputStyle: tintColor => ({
    height: 38,
    color: tintColor,
    paddingLeft: 5,
    letterSpacing: 0.4,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: tintColor,
    marginVertical: 6,
  }),
  heading: tintColor => ({
    fontSize: 16,
    color: tintColor,
    letterSpacing: 0.3,
  }),
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  profileText: {
    fontSize: 16,
    color: '#007FFF',
    letterSpacing: 0.3,
  },
  profileText2: {
    fontSize: 18,
    color: '#007FFF',
    letterSpacing: 0.3,
  },
});

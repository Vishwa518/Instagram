import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import CussomTextInput from '../../instaComponents/TextInput/TextInput';

const CommentScreen = () => {
  const {bgColor, tintColor} = constants();
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [msgArray, setMsgArray] = useState([]);

  const handleSendMessage = () => {
    if (value !== '') {
      const msg = {
        id: msgArray.length + 1,
        message: value,
      };
      setMsgArray([...msgArray, msg]);
      setValue('');
    }
  };

  const RightButton = () => {
    return (
      <TouchableOpacity
        style={styles.rightButton}
        onPress={() => handleSendMessage()}>
        <Text style={styles.rightButtonText}>Post</Text>
      </TouchableOpacity>
    );
  };

  const renderMessagePreView = ({item, index}) => {
    return (
      <View key={index} style={styles.singleMessageStyle}>
        <Text style={{color: tintColor, letterSpacing: 0.3}}>
          {item.message}
        </Text>
      </View>
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
            title={'Comments'}
            color={tintColor}
            NewStyle={{textAlign: 'center'}}
          />
        )}
        Right={() => (
          <IconButton
            image={Images.share}
            tintColor={tintColor}
            newStyle={{alignItems: 'flex-end'}}
          />
        )}
      />
      {msgArray.length > 0 && (
        <View>
          <Text style={styles.dateText(tintColor)}>
            {new Date().toDateString()}
          </Text>
          <FlatList
            data={msgArray}
            renderItem={renderMessagePreView}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewStyle}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 0}>
        <CussomTextInput
          image={Images.post3}
          value={value}
          handleChange={text => setValue(text)}
          placeholder={'Add a comment...'}
          autoFocus
          isRightButton
          RightButton={() => <RightButton />}
          searchIconStyle={styles.searchIcon}
          viewWrapperStyle={styles.viewWrapperStyle(tintColor)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
  }),
  searchIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    borderRadius: 15,
    tintColor: null,
  },
  KeyboardAvoidingViewStyle: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  rightButton: {position: 'absolute', right: 10, top: 12},
  rightButtonText: {
    color: '#007FFF',
    fontSize: 14,
    letterSpacing: 0.3,
    fontWeight: '500',
  },
  viewWrapperStyle: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tintColor === '#fff' ? '#343434' : '#fff',
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: tintColor === '#fff' ? 0 : 1,
    bottom: 10,
    height: 45,
  }),
  dateText: tintColor => ({
    textAlign: 'center',
    color: tintColor,
    marginVertical: 5,
  }),
  singleMessageStyle: {
    backgroundColor: '#0078fe',
    padding: 10,
    marginTop: 6,
    marginRight: '4%',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    borderRadius: 25,
  },
});

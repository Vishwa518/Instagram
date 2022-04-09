import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Appearance,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import {Images} from '../../constants/Images';
import {changeBgColor, changeTintColor} from '../../actions';

const data = [
  {
    id: 1,
    name: 'Light',
  },
  {
    id: 2,
    name: 'Dark',
  },
  {
    id: 3,
    name: 'System default',
  },
];
const Theme = () => {
  const selector = useSelector(state => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(2);
  bgColor = selector.color.color;
  tintColor = selector.color.tintColor;

  useEffect(() => {
    if (value === 3) {
      setValue(3);
    } else if (bgColor === '#fff') {
      setValue(1);
    } else if (bgColor === '#202124') {
      setValue(2);
    }
  }, [bgColor, value]);

  const darkColorScheme = () => {
    dispatch(changeBgColor('#202124'));
    dispatch(changeTintColor('#fff'));
  };

  const lightColorScheme = () => {
    dispatch(changeBgColor('#fff'));
    dispatch(changeTintColor('#000'));
  };
  const handleChangeTheme = id => {
    if (id === 1) {
      lightColorScheme();
    } else if (id === 2) {
      darkColorScheme();
    } else if (id === 3) {
      const colorScheme = Appearance.getColorScheme();
      if (colorScheme === 'dark') {
        darkColorScheme();
      } else {
        lightColorScheme();
      }
    }
    setValue(id);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleChangeTheme(item.id)}
        style={styles.renderItem}>
        <Text style={styles.renderItemText(tintColor)}>{item.name}</Text>
        <View style={styles.renderItemView(tintColor)}>
          {value === item.id && (
            <View style={styles.renderItemView2}>
              <Image source={Images.tickIcon} style={styles.renderItemImage} />
            </View>
          )}
        </View>
      </TouchableOpacity>
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
            title={'Theme'}
            color={tintColor}
            NewStyle={{right: '2%', textAlign: 'center'}}
          />
        )}
        NewStyle={{left: 8}}
      />
      <FlatList
        data={data}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{marginHorizontal: 15}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
  }),
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  renderItemText: tintColor => ({
    fontSize: 18,
    letterSpacing: 0.3,
    color: tintColor,
  }),
  renderItemView: tintColor => ({
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: tintColor,
  }),
  renderItemView2: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#007FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderItemImage: {width: 12, height: 12, tintColor: '#fff'},
});
export default Theme;

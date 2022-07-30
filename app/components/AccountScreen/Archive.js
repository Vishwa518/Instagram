import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {constants} from '../../constants/constants';
import {Images} from '../../constants/Images';
import IconButton from '../../instaComponents/Button/IconButton';
import HeaderComponent from '../../instaComponents/Header/Header';
import {
  BackIcon,
  TitleView,
} from '../../instaComponents/Header/HeaderComponents';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const headerTabData = [
  {
    id: 1,
    image: Images.aboutIcon,
  },
  {
    id: 2,
    image: Images.calendar,
  },
  {
    id: 3,
    image: Images.location,
  },
];

const Archive = () => {
  const {width, height} = Dimensions.get('window');
  const {bgColor, tintColor} = constants();
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(1);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedTab(item.id)}
        style={styles.renderItemStyle(selectedTab, item, tintColor)}>
        <Image
          style={styles.renderItemText(selectedTab, item, tintColor)}
          source={item.image}
        />
        {item.id === 2 && (
          <View style={{alignItems: 'center', bottom: 15}}>
            <Text
              style={{
                fontSize: 10,
                color: tintColor,
                fontWeight: 'bold',
              }}>
              {new Date().getDate()}
            </Text>
          </View>
        )}
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
            title={'Archive'}
            color={tintColor}
            NewStyle={{textAlign: 'center'}}
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
      <View>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={headerTabData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
      {selectedTab === 2 && (
        <Calendar
          style={{
            margin: 5,
          }}
          minDate={new Date().toISOString().split('T')[0]}
          theme={{
            backgroundColor: bgColor,
            calendarBackground: bgColor,
            textSectionTitleColor: tintColor,
            todayTextColor: tintColor,
            dayTextColor: tintColor,
            monthTextColor: tintColor,
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '500',
            textDayFontSize: 18,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
            textDisabledColor: '#d9e1e8',
          }}
          hideArrows={true}
          hideExtraDays={true}
          disableMonthChange={true}
          disableArrowLeft={true}
          disableArrowRight={true}
          // enableSwipeMonths={true}
        />
      )}
      {selectedTab === 3 && (
        <View style={{flex:1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapcontainer(width, height)}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
       }}
          showsUserLocation={true}
        />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    flex: 1,
    // marginHorizontal: 10,
  }),
  contentContainerStyle: {
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#353839',
  },
  renderItemStyle: (selectedTab, item, tintColor) => ({
    paddingHorizontal: 42,
    // paddingVertical: 2,
    borderBottomWidth: selectedTab === item.id ? 1 : 0,
    borderBottomColor: selectedTab === item.id ? tintColor : '#fff',
  }),
  renderItemText: (selectedTab, item, tintColor) => ({
    tintColor,
    width: 22,
    height: 22,
  }),
  mapcontainer: (width, height) => ({
    flex: 1,
    width,
    height,
  }),
});
export default Archive;

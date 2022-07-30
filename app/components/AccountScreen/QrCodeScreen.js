import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Images} from '../../constants/Images';

const QrCodeScreen = () => {
  const navigation = useNavigation()
  const base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <ImageBackground source={Images.smiles_bg} style={styles.container}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.plus1} style={styles.backIcon(true)} />
        </TouchableOpacity>
        <Image source={Images.share2} style={styles.backIcon(false)} />
      </View>
      <QRCode
        value="Just an image"
        logo={{uri: base64Logo}}
        logoSize={30}
        logoBackgroundColor="transparent"
        size={180}
      />
    </ImageBackground>
  );
};

export default QrCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '94%',
  },
  backIcon: isRotate => ({
    width: 22,
    height: 22,
    tintColor: '#fff',
    transform: [{rotate: isRotate ? '45deg' : '0deg'}],
  }),
});

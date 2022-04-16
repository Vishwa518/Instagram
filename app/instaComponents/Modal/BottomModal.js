import React, {memo} from 'react';
import {
  View,
  Modal,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { constants } from '../../constants/constants';

const windowHeight = Dimensions.get('window').height;
const BottomModal = ({
  onClose,
  visible = false,
  // style = {},
  children,
  minHeight,
}) => {
  const {bgColor, tintColor} = constants();
  return (
    <Modal
      // animated
      // animationType="fade"
      visible={visible}
      transparent
      onRequestClose={onClose}>
      <TouchableHighlight
        onPress={onClose}
        style={{flex: 1, backgroundColor: 'rgba(46, 46, 46, 0.3)'}}>
        <View />
      </TouchableHighlight>
      <View style={styles.overlay}>
        <Animated.View style={styles.container(minHeight, bgColor)}>
          <View style={styles.viewWrapp}>
            <TouchableOpacity
              style={styles.closeButton(tintColor)}
              onPress={onClose}
            />
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

BottomModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  minHeight: PropTypes.any,
  // style: PropTypes.objectOf(PropTypes.any)
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(46, 46, 46, 0.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: (minHeight, bgColor) => ({
    // backgroundColor: '#202124',
    backgroundColor: bgColor,
    paddingTop: 12,
    minHeight: minHeight ? minHeight : windowHeight - 550,
    height: 'auto',
    borderRadius: 15,
  }),
  closeButton: tintColor => ({
    width: 45,
    height: 4,
    backgroundColor: tintColor,
    borderRadius: 2,
  }),
  viewWrapp: {
    alignItems: 'center',
    paddingBottom: 5,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default memo(BottomModal);

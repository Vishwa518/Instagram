/* eslint-disable max-classes-per-file */
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  mainHeaderView: {
    flexDirection: 'row',
    padding: 5,
  },
  leftDiv: {
    flex: 0.18,
    justifyContent: 'center',
  },
  middleDiv: {
    flex: 0.6,
    justifyContent: 'center',
  },
  rightDiv: {
    flex: 0.2,
    justifyContent: 'center',
  },
  rightWithLeftDiv: {
    flex: 0.14,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  leftToRightDiv: {
    flex: 0.14,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  gradientLeftDiv: {
    flex: 0.2,
  },
  gradientRightDiv: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
});

const HeaderComponent = ({nav, Right, Center, Left, NewStyle, LeftToRight}) => {
  return (
    <SafeAreaView>
      <View style={[styles.mainHeaderView, NewStyle]}>
        {Left && (
          <View style={styles.leftDiv}>
            <Left nav={nav} />
          </View>
        )}

        {Center && (
          <View style={styles.middleDiv}>
            <Center />
          </View>
        )}
        {/* {LeftToRight && (
          <View style={styles.leftToRightDiv}>
            <LeftToRight nav={nav} />
          </View>
        )} */}

        {Right && (
          <View style={LeftToRight ? styles.rightWithLeftDiv : styles.rightDiv}>
            <Right nav={nav} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HeaderComponent;

HeaderComponent.propTypes = {
  nav: PropTypes.objectOf(Object),
  Right: PropTypes.func,
  LeftToRight: PropTypes.func,
  Center: PropTypes.func,
  Left: PropTypes.func,
  NewStyle: PropTypes.objectOf(Object),
};

HeaderComponent.defaultProps = {
  nav: null,
  Right: null,
  LeftToRight: null,
  Left: null,
  Center: null,
  NewStyle: null,
};

import React from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';

const { height, width } = Dimensions.get('window');

const Loader = ({ overlayColor, size, color, visible }) => {
  return visible ? (
    <View style={[styles.modalWrapper, { backgroundColor: overlayColor }]}>
      <View>
        <ActivityIndicator size={size} color={color} />
      </View>
    </View>
  ) : null;
};

Loader.defaultProps = {
  color: '#FFFFFF',
  size: 'large',
  overlayColor: 'rgba(0,0,0,0.5)',
  closeOnTouch: false,
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    position: 'absolute',
    width,
    height,
    left: 0,
    top: 0,
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalUnderlay: {
    position: 'absolute',
    width,
    height,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});

export default Loader;

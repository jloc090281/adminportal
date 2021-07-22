import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const IconButton = ({
  disabled,
  size,
  iconSize,
  primaryColor,
  disabledColor,
  iconButton,
  onPressButton,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 2,
      backgroundColor: disabled ? disabledColor : primaryColor,
    },
    centerImage: {
      width: iconSize,
      height: iconSize,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressButton}
        disabled={disabled ? disabled : false}
        style={styles.button}>
        {iconButton && <Image source={iconButton} style={styles.centerImage} />}
      </TouchableOpacity>
    </View>
  );
};

IconButton.defaultProps = {
  size: 30,
  iconSize: 25,
  iconButton: null,
  primaryColor: 'transparent',
  disabledColor: '#909596',
};

export default IconButton;

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const CircleButton = ({
  size,
  primaryColor,
  disabled,
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
      borderRadius: 360,
      backgroundColor: disabled ? '#909596' : primaryColor,
    },
    centerImage: {
      width: size - 5,
      height: size - 5,
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

CircleButton.defaultProps = {
  size: 30,
  iconButton: null,
  primaryColor: '#54AEEC',
};

export default CircleButton;

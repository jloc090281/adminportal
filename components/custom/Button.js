import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const rem = width / 411.42857142857144;
const remY = height / 683.4285714285714;

const Button = ({
  containerStyle,
  disabled,
  style,
  titleUpperCase,
  title,
  onPress,
}) => {
  const containerStyles = {
    ...styles.container,
    ...containerStyle,
  };
  const borderColor = disabled
    ? '#909596'
    : style && style.borderColor
    ? style.borderColor
    : '#282E2A';
  const backgroundColor = disabled
    ? '#909596'
    : style && style.backgroundColor
    ? style.borderColor
    : '#282E2A';
  const elementStyles = {
    ...styles.button,
    ...style,
    borderColor,
    backgroundColor,
  };
  const label = titleUpperCase ? title.toUpperCase() : title;
  return (
    <View style={containerStyles}>
      <TouchableOpacity
        style={elementStyles}
        disabled={disabled ? disabled : false}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    height: 50 * remY,
  },
  text: {
    color: 'white',
    fontFamily: 'Cochin',
    fontSize: 16 * rem,
  },
});

export default Button;

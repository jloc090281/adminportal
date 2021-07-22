import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

const Button = ({
  containerStyle,
  disabled,
  style,
  titleUpperCase,
  title,
  icon,
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
    ? style.backgroundColor
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
        {icon && <Image source={icon} style={styles.icon} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingBottom: 10,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    minHeight: 45,
  },
  text: {
    color: 'white',
    fontFamily: 'Cochin',
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: 10,
    width: 30,
    height: 30,
  },
});

export default Button;

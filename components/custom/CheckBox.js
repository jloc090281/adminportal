import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactCheckBox from 'react-native-check-box';

const CheckBox = ({ disabled, value, label, onValueChange }) => {
  return (
    <View style={styles.container}>
      <ReactCheckBox
        style={styles.checkbox}
        disabled={disabled ? disabled : false}
        isChecked={value}
        onClick={() => onValueChange()}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 15,
    marginLeft: 20,
  },
  label: {
    fontSize: 16,
  },
  checkbox: {
    paddingRight: 10,
  },
});

export default CheckBox;

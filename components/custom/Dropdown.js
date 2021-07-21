import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');
const rem = width / 411.42857142857144;
const remY = height / 683.4285714285714;

const Dropdown = ({ items, label, disabled, selectedValue, onValueChange }) => {
  const pickers = items.map((item, index) => {
    return <Picker.Item key={index} value={item.value} label={item.label} />;
  });
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Picker
        enabled={disabled ? !disabled : true}
        selectedValue={selectedValue}
        style={styles.item}
        onValueChange={onValueChange}>
        {pickers}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 5,
  },
  label: {
    paddingBottom: 10,
    fontSize: 16 * rem,
  },
  item: {
    height: 50 * remY,
    padding: 10,
  },
});

export default Dropdown;

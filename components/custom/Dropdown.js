import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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
    paddingBottom: 10,
  },
  label: {
    paddingBottom: 5,
    fontSize: 16,
  },
  item: {
    height: 45,
    padding: 10,
  },
});

export default Dropdown;

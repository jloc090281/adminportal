import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

const { width, height } = Dimensions.get('window');
const rem = width / 411.42857142857144;
const remY = height / 683.4285714285714;

const Dropdown = ({
  disabled,
  label,
  items,
  selectedItemId,
  onItemSelect,
  onTextChange,
  resetValue,
}) => {
  const [focus, setFocus] = useState(false);
  const textInputProps = {
    underlineColorAndroid: 'transparent',
    height: 45 * remY,
    style: styles.textInput,
  };
  if (selectedItemId != null) {
    const item = items.find(element => element.id === selectedItemId);
    if (item && !focus) {
      textInputProps.value = item.name;
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <SearchableDropdown
        disabled={disabled ? disabled : false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onItemSelect={onItemSelect}
        onTextChange={onTextChange}
        containerStyle={styles.dropdown}
        itemStyle={styles.item}
        itemTextStyle={styles.itemText}
        itemsContainerStyle={styles.itemsContainer}
        items={items}
        resetValue={resetValue}
        textInputProps={textInputProps}
        listProps={{ nestedScrollEnabled: true }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
  },
  label: {
    paddingBottom: 10,
    fontSize: 16 * rem,
  },
  item: {
    padding: 10,
    marginTop: 2,
    backgroundColor: '#ddd',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 4,
  },
  itemText: {
    color: '#222',
    fontFamily: 'Cochin',
    fontSize: 16 * rem,
  },
  itemsContainer: {
    maxHeight: 45 * remY * 3 + 4,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    fontFamily: 'Cochin',
    fontSize: 16 * rem,
  },
  dropdown: {
    padding: 0,
  },
});

export default Dropdown;

import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

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
    height: 45,
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
    paddingBottom: 10,
  },
  label: {
    paddingBottom: 5,
    fontSize: 16,
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
    fontSize: 16,
  },
  itemsContainer: {
    maxHeight: 196,
  },
  textInput: {
    padding: 0,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    fontFamily: 'Cochin',
    fontSize: 16,
  },
  dropdown: {
    padding: 0,
  },
});

export default Dropdown;

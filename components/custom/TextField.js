import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const rem = width / 411.42857142857144;
const remY = height / 683.4285714285714;

import { formatCurrency, roundNumber } from 'utils/formatHelper';

const TextField = ({
  label,
  value,
  currencyFormat,
  editable,
  placeholder,
  maxLength,
  secureTextEntry,
  autoCapitalize,
  spellCheck,
  keyboardType,
  onChangeText,
  onEndEditing,
}) => {
  const [focus, setFocus] = useState(false);

  const containerStyle = {
    ...styles.container,
    ...containerStyle,
  };
  const displayText =
    value.toString() !== ''
      ? currencyFormat
        ? focus
          ? value.toString()
          : formatCurrency(roundNumber(value, 2), 2)
        : value.toString()
      : '';
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={editable}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        value={displayText}
        secureTextEntry={secureTextEntry ? true : false}
        selectTextOnFocus
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        spellCheck={spellCheck}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
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
  input: {
    fontFamily: 'Cochin',
    fontSize: 16 * rem,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    paddingLeft: 10,
    height: 45 * remY,
  },
});

export default TextField;

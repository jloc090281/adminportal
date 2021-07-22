import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
  numberOfLines,
  onChangeText,
  onEndEditing,
}) => {
  const [focus, setFocus] = useState(false);
  const containerStyle = {
    ...styles.container,
    ...containerStyle,
  };
  const numLines = numberOfLines !== undefined ? numberOfLines : 1;
  const inputStyle = {
    ...styles.input,
    height: 25 * numLines + 20,
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
        multiline={numberOfLines > 1}
        numberOfLines={numberOfLines}
        editable={editable}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={inputStyle}
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
    marginBottom: 10,
  },
  label: {
    paddingBottom: 5,
    fontSize: 16,
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Cochin',
    fontSize: 16,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TextField;

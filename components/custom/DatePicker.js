import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');
const rem = width / 411.42857142857144;

const DatePicker = ({ label, value, disabled, onChange }) => {
  const [show, setShow] = useState(false);

  const handleOnChange = (event, date) => {
    setShow(false);
    if (event.type !== 'dismissed') {
      const dayFormatted = (date.getDate() < 10 ? '0' : '') + date.getDate();
      const monthFormatted =
        (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
      const dateText = `${dayFormatted}/${monthFormatted}/${date.getFullYear()}`;
      onChange(dateText);
    }
  };
  let currentDate = new Date();
  if (value !== '') {
    const parts = value.split('/');
    currentDate = new Date(parts[2], parts[1] - 1, parts[0]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Button
        disabled={disabled ? disabled : false}
        title={value}
        onPress={() => setShow(true)}
      />
      {show && (
        <DateTimePicker
          mode="date"
          value={currentDate}
          is24Hour={true}
          display="default"
          onChange={handleOnChange}
        />
      )}
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
});

export default DatePicker;

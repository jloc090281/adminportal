import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'components/custom/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

import iconCalendar from 'assets/date_icon.png';
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
    <View>
      <Text style={styles.label}>{label}</Text>
      <Button
        icon={iconCalendar}
        style={styles.button}
        disabled={disabled ? disabled : false}
        title={value}
        onPress={() => setShow(true)}
      />
      {show && (
        <DateTimePicker
          showIcon
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
  label: {
    paddingBottom: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2894f4',
    borderColor: '#2894f4',
  },
});

export default DatePicker;

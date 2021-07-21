import React from 'react';

import { Dimensions, StyleSheet, View } from 'react-native';
import Button from 'components/custom/Button';

const { height } = Dimensions.get('window');
const remY = height / 683.4285714285714;

const HomeScreen = ({ company, navigation }) => {
  return (
    <View style={styles.content}>
      <Button
        containerStyle={styles.buttonContainer}
        style={styles.button}
        titleUpperCase
        title="Datos generales"
        onPress={() => navigation.navigate('NuevaFactura')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  buttonContainer: {
    padding: 0,
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#08415C',
    borderColor: '#08415C',
    borderRadius: 2,
    height: 60 * remY,
  },
});

export default HomeScreen;

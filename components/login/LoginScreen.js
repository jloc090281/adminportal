import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logIn, setLogInError } from 'store/session/actions';

import { Dimensions, StyleSheet, ScrollView, View, Text } from 'react-native';
import Button from 'components/custom/Button';
import TextField from 'components/custom/TextField';

const { width, height } = Dimensions.get('window');
const rem = width / 411.42857142857144;
const remY = height / 683.4285714285714;

const LoginScreen = ({ error, setLogInError, logIn }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = async () => {
    setLogInError('');
    logIn(user, password);
  };

  const buttonEnabled = user !== '' && password !== '';
  return (
    <View key="2" style={StyleSheet.absoluteFill}>
      <View style={styles.header}>
        <Text style={styles.title}>Autenticación</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <TextField
            label="Usuario"
            placeholder="Código de usuario"
            spellCheck={false}
            value={user}
            onChangeText={value => setUser(value)}
          />
          <TextField
            label="Contraseña"
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Button
            title="Ingresar"
            titleUpperCase
            disabled={!buttonEnabled}
            containerStyle={styles.button}
            onPress={() => handleOnPress()}
          />
          {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70 * remY,
    backgroundColor: '#08415C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Cochin',
    fontSize: 20 * rem,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    error: state.session.logInError,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logIn,
      setLogInError,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

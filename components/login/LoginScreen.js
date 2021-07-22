import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logIn, setLogInError } from 'store/session/actions';

import { StyleSheet, ScrollView, View, Text, BackHandler } from 'react-native';
import Button from 'components/custom/Button';
import TextField from 'components/custom/TextField';

const LoginScreen = ({ error, setLogInError, logIn }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = async () => {
    setLogInError('');
    logIn(user, password);
  };

  const buttonEnabled = user !== '' && password !== '';
  return (
    <View style={styles.container}>
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
          <Button
            title="Salir"
            titleUpperCase
            onPress={() => BackHandler.exitApp()}
          />
          {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    height: 70,
    backgroundColor: '#08415C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Cochin',
    fontSize: 20,
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

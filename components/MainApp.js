import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dimensions, StyleSheet, StatusBar, View, Text } from 'react-native';
import {
  Modal,
  ModalContent,
  ScaleAnimation,
  ModalFooter,
  ModalButton,
  ModalTitle,
} from 'react-native-modals';

import { setModalError } from 'store/ui/actions';

import Loader from 'components/custom/Loader';

const { width } = Dimensions.get('window');
const rem = width / 411.42857142857144;

import LoginScreen from './login/LoginScreen';
import HomeScreen from './home/HomeScreen';

const MainApp = ({ authorized, loaderVisible, error, setModalError }) => {
  const rootComponent = !authorized ? <LoginScreen /> : <HomeScreen />;
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {rootComponent}
      <Loader visible={loaderVisible} />
      <Modal
        modalAnimation={new ScaleAnimation()}
        visible={error !== ''}
        modalStyle={styles.modal}
        modalTitle={<ModalTitle title="JLC Solutions CR - Admin" />}
        footer={
          <ModalFooter>
            <ModalButton
              bordered
              textStyle={styles.modalButtonText}
              text="Cerrar"
              onPress={() => {
                setModalError('');
              }}
            />
          </ModalFooter>
        }>
        <ModalContent>
          <View style={styles.dialogContentView}>
            <Text>{error}</Text>
          </View>
        </ModalContent>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    marginLeft: 10,
    marginRight: 10,
  },
  dialogContentView: {
    padding: 20,
  },
  modalButtonText: {
    fontFamily: 'Cochin',
    fontSize: 16 * rem,
  },
});

const mapStateToProps = state => {
  return {
    error: state.ui.error,
    authorized: state.session.authorized,
    loaderVisible: state.ui.loaderVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setModalError }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);

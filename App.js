import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ModalPortal } from 'react-native-modals';

import MainApp from 'components/MainApp';
import appReducer from 'store/reducer';
import { INITIAL_STATE } from 'store/InitialState';

const store = createStore(appReducer, INITIAL_STATE, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
      <ModalPortal />
    </Provider>
  );
}

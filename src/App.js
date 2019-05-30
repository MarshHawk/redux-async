import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import Plants from './components/plants';

import plantSaga from './sagas/sagas'

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics/index'

import createSagaMiddleware from 'redux-saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const epicMiddleware = createEpicMiddleware();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
  //composeEnhancers(applyMiddleware(epicMiddleware))
);

//epicMiddleware.run(rootEpic)
sagaMiddleware.run(plantSaga)

function App() {
  return (
    <Provider store={store}>
      <Plants />
    </Provider>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import Plants from './components/plants';

//const query = 'https://trefle.io/api/plants?q=datura&token=';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Plants />
    </Provider>
  );
}

export default App;

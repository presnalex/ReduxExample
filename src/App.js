import React, { Component } from 'react';
import './App.css';
import Registration from './components/Registration';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers';
import AuthContainer from './components/AuthContainer';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="wrapper">
          <h1>Complex State</h1>
          
          <div className="forms">
            <AuthContainer></AuthContainer>
            <Registration></Registration>
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;

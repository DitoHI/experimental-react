import React, { Component } from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

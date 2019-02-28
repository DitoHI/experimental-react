import React, { Component } from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import {  } from 'react'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Postform />
        <hr />
        <Posts/>
      </div>
    );
  }
}

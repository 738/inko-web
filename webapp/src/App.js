import React, { Component } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Converter from './components/Converter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <Converter />
      </div>
    );
  }
}

export default App;

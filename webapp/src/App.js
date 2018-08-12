import React, { Component } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Converter from './components/Converter';
import Readme from './components/Readme';
import Footer from './components/Footer';

const SUBTITLE = "English into Korea Converter Opensource library";
const DESCRIPTION = "It converts mistakenly misspelled english letters into korean or conversely";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Title subtitle={SUBTITLE} description={DESCRIPTION}/>
        <Converter />
        <Readme />
        <Footer />
      </div>
    );
  }
}

export default App;

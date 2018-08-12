import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Header from './components/Header';
import Title from './components/Title';
import Converter from './components/Converter';
import Readme from './components/Readme';
import Footer from './components/Footer';

const SUBTITLE = "English into Korea Converter Opensource library";
const DESCRIPTION = "It converts mistakenly misspelled english letters into korean or conversely";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Montserrat', 'Nanum Gothic', sans-serif;
  }
`;

const Container = styled.div`
  
`;

const TitleContainer = styled.div`
  background: linear-gradient(rgb(247, 223, 182), rgb(247, 168, 252));
  height: 100%;
  padding-bottom: 80px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
`;

class App extends Component {
  render() {
    return (
      <Container>
        <TitleContainer>
          <Header />
          <Title subtitle={SUBTITLE} description={DESCRIPTION} />
          <Converter />
        </TitleContainer>
        <Readme />
        <Footer />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import logo from './assets/inko_logo.svg';

const Title = styled.div`
  text-align: center;
`;

const LogoTitle = styled.img`
  margin-top: 110px;
  margin-bottom: 20px;
  height: 220px;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 20px;
`;

const subtitle = "English into Korea Converter Opensource library";
const description = "It converts mistakenly misspelled english letters into korean or conversely";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title>
          <LogoTitle src={logo} />
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
        </Title>
      </div>
    );
  }
}

export default App;

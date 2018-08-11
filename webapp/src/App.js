import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Title = styled.div`
  text-align: center;
`;

const LogoTitle = styled.img`
  height: 256px;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

const Description = styled.div`
  font-size: 20px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Title>
          <LogoTitle src={logo} />
          <Subtitle>English into Korea Converter Opensource library</Subtitle>
          <Description>It converts mistakenly misspelled english letters into korean or conversely</Description>
        </Title>
      </div>
    );
  }
}

export default App;

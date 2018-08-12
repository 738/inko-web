import React from 'react';
import styled from 'styled-components';
import logo from '../assets/inko_logo.svg';

const Container = styled.div`
    text-align: center;
    margin-bottom: 50px;
    @media (max-width: 700px) {
        margin-bottom: 20px;
      }
`;

const LogoTitle = styled.img`
  margin-top: 30px;
  margin-bottom: 20px;
  height: 160px;
  @media (max-width: 700px) {
    margin-top: 0;
    height: 120px;
    display: none;
  }
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 10px;
  @media (max-width: 700px) {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  margin: 0px 10px;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

class Title extends React.Component {
    render() {
        return (
            <Container>
                <LogoTitle src={logo} />
                <Subtitle>{this.props.subtitle}</Subtitle>
                <Description>{this.props.description}</Description>
            </Container>
        );
    }
}

export default Title;

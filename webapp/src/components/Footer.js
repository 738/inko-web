import React from 'react';
import styled from 'styled-components';
import holykiwi_logo from '../assets/holykiwi_logo.png';

const Container = styled.div`
    margin-top: 50px;
    height: 120px;
    width: 100%
    background: rgba(255, 251, 217, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        
    }
`;

const Power = styled.div`
    display: flex;
    align-items: center;
`;

const HolyKiwiLogo = styled.img`
    height: 40px;
    margin-bottom: 12px;
`;

const Person = styled.a`
    text-decoration: none;
    color: black;
    font-weight: bold;
`;

class Footer extends React.Component {
    render() {
        return (
            <Container>
                <HolyKiwiLogo src={holykiwi_logo} />
                <Power>Powered by 🥝 Holy Kiwi (<Person href="https://github.com/738" target="_blank" rel="noopener noreferrer">@JonJee 🇰🇷</Person>)</Power>
            </Container>
        );
    }
}

export default Footer;

import React from 'react';
import styled from 'styled-components';
import logo_bird from '../assets/inko_logo_bird.svg';
import logo_word from '../assets/inko_logo_word.svg';
import github_logo from '../assets/github_logo.svg';

const Container = styled.div`
    height: 80px;
    width: 100%
    background: transparent;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 700px) {
        position: relative;
        height: 40px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const LogoImage = styled.img`
    height: 60px;
    margin: 10px 20px;
    @media (max-width: 700px) {
        height: 30px;
        margin: 5px 10px;
    }
`;

const LogoWording = styled.img`
    height: 35px;
    @media (max-width: 700px) {
        height: 20px;
    }
`;

const Github = styled.img`
    height: 20px;
    margin-right: 20px;
    @media (max-width: 700px) {
        margin-right: 10px;
    }
`

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Logo>
                    <LogoImage src={logo_bird} />
                    <LogoWording src={logo_word} />
                </Logo>
                <a href="https://github.com/JonJee/inko" target="_blank" rel="noopener noreferrer"><Github src={github_logo} /></a>
            </Container>
        );
    }
}

export default Header;

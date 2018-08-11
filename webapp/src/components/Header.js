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
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const LogoImage = styled.img`
    height: 60px;
    margin: 10px 20px;
`;

const LogoWording = styled.img`
    height: 35px;
`;

const Github = styled.img`
    height: 20px;
    margin-right: 20px;
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
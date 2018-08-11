import React from 'react';
import Inko from 'inko';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const BeforeTextArea = styled.textarea`
    border-radius: 30px;
    border: 0px;
    width: 480px;
    height: 300px;
    background: rgba(255, 251, 217, 0.5);
    padding: 25px;
    font-size: 24px;
    resize: none;
`;

const AfterTextArea = styled.textarea`
    border-radius: 30px;
    border: 0px;
    width: 480px;
    height: 300px;
    background: rgba(255, 251, 217, 0.5);
    padding: 25px;
    font-size: 24px;
    resize: none;
`;

const Arrow = styled.img`

`;

class Converter extends React.Component {

    _inko;

    constructor() {
        super();
        this.state = {
            beforeTextValue: '',
            afterTextValue: '',
        }
        this._inko = new Inko();
    }

    onBeforeTextValueChanged(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            beforeTextValue: value,
            afterTextValue: this._inko.en2ko(value)
        });
    }

    render() {
        return (
            <Container>
                <BeforeTextArea value={this.state.beforeTextValue} onChange={this.onBeforeTextValueChanged.bind(this)}/>
                <Arrow src={arrow} />
                <AfterTextArea value={this.state.afterTextValue} disabled/>
            </Container>
        );
    }
}

export default Converter;
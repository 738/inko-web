import React from 'react';
import Inko from 'inko';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextArea = styled.textarea`
    border-radius: 30px;
    border: 0px;
    width: 480px;
    height: 300px;
    background: rgba(255, 251, 217, 0.5);
    padding: 25px;
    font-size: 24px;
    resize: none;
    margin: 0 20px;
`;

const Arrow = styled.img`
    margin: 10px;
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
                <TextArea value={this.state.beforeTextValue} onChange={this.onBeforeTextValueChanged.bind(this)}/>
                <Arrow src={arrow} />
                <TextArea value={this.state.afterTextValue} disabled/>
            </Container>
        );
    }
}

export default Converter;
import React from 'react';
import Inko from 'inko';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';
import erase from '../assets/erase.svg';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const TextAreaContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    border: 0px;
    width: 480px;
    height: 300px;
    background: rgba(255, 251, 217, 0.5);
    padding: 15px 35px;
    margin: 0 20px;
    box-shadow: 0 50px 80px rgba(0, 0, 0, 0.1); 
    @media (max-width: 700px) {
        width: 70%;
        height: 200px;
    }
`;

const Label = styled.div`
    font-weight: bold;
    font-size: 24px;
    display: inline-block;
    margin-bottom: 15px;
`;

const TextArea = styled.textarea`
    border: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 20px;
    resize: none;
    outline: none;
`;

const Arrow = styled.img`
    margin: 10px;
    cursor: pointer;
    @media (max-width: 700px) {
        transform: rotate(90deg);
        height: 30px;
        margin: 15px;
    }
`;

const Erase = styled.img`
    margin: 0px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const DEFAULT_ENGLISH = 'dkssudgktpdy!';
const DEFAULT_KOREAN = '안녕하세요!';
const ENGLISH = '영어';
const KOREAN = '한글';

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            beforeTextValue: DEFAULT_ENGLISH,
            afterTextValue: DEFAULT_KOREAN,
            isEn2koMode: true,
        }
        this._inko = new Inko();
    }

    onBeforeTextValueChanged(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            beforeTextValue: value,
            afterTextValue: this.state.isEn2koMode ? this._inko.en2ko(value) : this._inko.ko2en(value),
        });
    }

    onEraseButtonClicked() {
        this.setState({
            ...this.state,
            beforeTextValue: '',
            afterTextValue: '',
        });
    }

    onArrowButtonClicked() {
        const value = this.state.afterTextValue;
        const isEn2koModeToggled = !this.state.isEn2koMode;
        this.setState({
            ...this.state,
            beforeTextValue: value,
            afterTextValue: isEn2koModeToggled ? this._inko.en2ko(value) : this._inko.ko2en(value),
            isEn2koMode: isEn2koModeToggled,
        });
    }

    render() {
        return (
            <Container>
                <TextAreaContainer>
                    <Label>{ this.state.isEn2koMode ? ENGLISH : KOREAN }</Label>
                    <TextArea value={this.state.beforeTextValue} onChange={this.onBeforeTextValueChanged.bind(this)} />
                    <Erase src={erase} onClick={this.onEraseButtonClicked.bind(this)} />
                </TextAreaContainer>
                <Arrow src={arrow} onClick={this.onArrowButtonClicked.bind(this)}/>
                <TextAreaContainer>
                    <Label>{ this.state.isEn2koMode ? KOREAN : ENGLISH }</Label>
                    <TextArea value={this.state.afterTextValue} readOnly/>
                </TextAreaContainer>
            </Container>
        );
    }
}

export default Converter;
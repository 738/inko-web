import React from 'react';
import Inko from 'inko';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';
import erase from '../assets/erase.svg';
import clipboard_copy from '../assets/clipboard_copy.svg';
import Toast from './Toast';
import isMobile from 'ismobilejs';


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
    height: 320px;
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
    font-size: 22px;
    display: inline-block;
    margin-bottom: 15px;
    @media (max-width: 700px) {
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

const TextArea = styled.textarea`
    border: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 20px;
    resize: none;
    outline: none;
    @media (max-width: 700px) {
        font-size: 16px;
    }
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

const Paste = styled.img`
    margin: 0px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 20px;
`;

const DEFAULT_ENGLISH = 'dkssudgktpdy!';
const DEFAULT_KOREAN = '안녕하세요!';
const ENGLISH = '영어';
const KOREAN = '한글';
const MESSAGE_COPY = 'Copied!';

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            beforeTextValue: DEFAULT_ENGLISH,
            afterTextValue: DEFAULT_KOREAN,
            isEn2koMode: true,
            isToastOpen: false,
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

    onCopyButtonClicked() {
        if (this.state.isToastOpen) return;
        this.copyToClipboard(this.state.afterTextValue);
        this.setState({
            ...this.state,
            isToastOpen: true,
        });
    }

    onToastClosed() {
        this.setState({
            ...this.state,
            isToastOpen: false,
        });
    }

    // 클립보드에 텍스트 복사하는 함수
    copyToClipboard(text) {
        let textField = document.createElement('textarea');
        textField.innerText = text;
        // 모바일에서 밑으로 내려가는 현상 때문에
        textField.style.position = 'fixed';
        textField.style.top = '0px';
        textField.style.right = '0px';
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
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
                    <Label>{this.state.isEn2koMode ? ENGLISH : KOREAN}</Label>
                    <TextArea value={this.state.beforeTextValue} onChange={this.onBeforeTextValueChanged.bind(this)} />
                    <Erase src={erase} onClick={this.onEraseButtonClicked.bind(this)} />
                </TextAreaContainer>
                <Arrow src={arrow} onClick={this.onArrowButtonClicked.bind(this)} />
                <TextAreaContainer>
                    <Label>{this.state.isEn2koMode ? KOREAN : ENGLISH}</Label>
                    <TextArea value={this.state.afterTextValue} readOnly />
                    {!(isMobile.phone || isMobile.tablet) &&
                        <Paste src={clipboard_copy} onClick={this.onCopyButtonClicked.bind(this)} />
                    }
                </TextAreaContainer>
                <Toast
                    isOpen={this.state.isToastOpen}
                    message={MESSAGE_COPY}
                    autoHideDuration={3000}
                    onRequestClose={this.onToastClosed.bind(this)} />
            </Container>
        );
    }
}

export default Converter;
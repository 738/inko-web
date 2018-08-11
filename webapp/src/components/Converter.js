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
    display: inline-block;
`;

const TextArea = styled.textarea`
    border-radius: 30px;
    border: 0px;
    width: 480px;
    height: 300px;
    background: rgba(255, 251, 217, 0.5);
    padding: 35px;
    font-size: 24px;
    resize: none;
    margin: 0 20px;
    outline: none;
    box-shadow: 0 50px 80px rgba(0, 0, 0, 0.1); 
    @media (max-width: 700px) {
        width: 80%;
        height: 200px;
        margin: 0;

    }
`;

const Arrow = styled.img`
    margin: 10px;
    @media (max-width: 700px) {
        transform: rotate(90deg);
        height: 40px;
        margin: 25px;
    }
`;

const Erase = styled.img`
    margin: 0px;
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;
    @media (max-width: 700px) {
        right: 0px;
    }
`;

class Converter extends React.Component {

    constructor() {
        super();
        this.state = {
            beforeTextValue: 'dkssudgktpdy! dldRHsms duddj ↔ gksrmf qusghks dhvmsthtm fkdlqmfjfldlqslek.\n\ndurltj xptmxmgoqhtpdy!',
            afterTextValue: '안녕하세요! 잉꼬는 영어 ↔ 한글 변환 오픈소스 라이브러리입니다.\n\n여기서 테스트해보세요!',
        }
        this._inko = new Inko();
    }

    onBeforeTextValueChanged(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            beforeTextValue: value,
            afterTextValue: this._inko.en2ko(value),
        });
    }

    onEraseButtonClicked() {
        this.setState({
            ...this.state,
            beforeTextValue: '',
            afterTextValue: '',
        });
    }

    render() {
        return (
            <Container>
                <TextAreaContainer>
                    <TextArea value={this.state.beforeTextValue} onChange={this.onBeforeTextValueChanged.bind(this)} />
                    <Erase src={erase} onClick={this.onEraseButtonClicked.bind(this)} />
                </TextAreaContainer>
                <Arrow src={arrow} />
                <TextAreaContainer>
                    <TextArea value={this.state.afterTextValue} readOnly/>
                </TextAreaContainer>
            </Container>
        );
    }
}

export default Converter;
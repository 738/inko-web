import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Container = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    @media (max-width: 700px) {
        padding-top: 20px;
    }
`;

const Contents = styled.div`
    width: 55%;
    @media (max-width: 700px) {
        width: 90%;
    }
`;

const H1 = styled.h1`
    color: #F8AF46;
    font-size: 36px;
    margin: 40px 0px;
    font-family: 'Anton', sans-serif;
    font-weight: normal;
    @media (max-width: 700px) {
        font-size: 32px;
    }
`;

const H1_2 = styled.h1`
    font-size: 36px;
    margin: 60px 0px 40px;
    font-weight: bold;
    @media (max-width: 700px) {
        font-size: 32px;
    }
`;

const H2 = styled.h2`
    color: #212121;
    font-size: 28px;
    margin: 30px 0px;
    font-weight: normal;
    @media (max-width: 700px) {
        font-size: 24px;
    }
`;

const H3 = styled.h3`
    color: #212121;
    font-size: 22px;
    margin: 30px 0px;
    font-weight: normal;
    @media (max-width: 700px) {
        font-size: 18px;
    }
`;

const P = styled.p`
    font-size: 18px;
    margin: 20px 0px;
    font-weight: normal;
    @media (max-width: 700px) {
        font-size: 16px;
    }
`;

const A = styled.a`
    text-decoration: none;
    color: #EF53F9;
    font-weight: bold;
`;

const BadgeContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Badge = styled.img`
    height: 26px;
    margin: 0 20px 40px;
`;

const Pre = styled.pre`
    font-size: 16px;
    overflow: auto;
    word-wrap: normal;
    white-space: pre;
    @media (max-width: 700px) {
        font-size: 12px;
    }
`;

class Readme extends React.Component {
    render() {
        return (
            <Container>
                <Contents>
                    <BadgeContainer>
                        <a href="https://circleci.com/gh/738/inko/tree/master" target="_blank" rel="noopener noreferrer">
                            <Badge src="https://circleci.com/gh/738/inko/tree/master.svg?style=svg" />
                        </a>
                        <a href="https://github.com/738/inko" target="_blank" rel="noopener noreferrer">
                            <Badge src={`https://img.shields.io/github/stars/738/inko.svg?style=social&label=Stars`} />
                        </a>
                        <a href="https://npmjs.com/package/inko" target="_blank" rel="noopener noreferrer">
                            <Badge src="https://img.shields.io/npm/v/inko.svg" alt="version" />
                        </a>
                        <a href="https://npmjs.com/package/inko" target="_blank" rel="noopener noreferrer">
                          <Badge src="https://img.shields.io/npm/dm/inko.svg?style=flat-square" />
                        </a>
                        <a href="https://www.jsdelivr.com/package/npm/inko" target="_blank" rel="noopener noreferrer">
                            <Badge src="https://data.jsdelivr.com/v1/package/npm/inko/badge" />
                        </a>
                        <a href="https://github.com/738/inko/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
                            <Badge src="https://img.shields.io/github/license/738/inko.svg" />
                        </a>
                    </BadgeContainer>
                    <H1>Getting Started</H1>

                    <H1_2>inko.js</H1_2>
                    <P>inko.js는 영타를 한글로 쳤을 때, 혹은 한타를 영어로 변환해주는 기능을 가진 자바스크립트 오픈소스 라이브러리입니다.</P>
                    <H2>Installation</H2>

                    <H3>npm</H3>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        npm install inko
                    </Pre>

                    <H3>yarn</H3>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        yarn add inko
                    </Pre>

                    <H3>As Browser module</H3>

                    <P>CDN</P>

                    <Pre className={classNames('prettyprint', 'lang-html')}>
                        &lt;script src="https://cdn.jsdelivr.net/npm/inko@1.1.0/inko.min.js"&gt;&lt;/script&gt;
                    </Pre>

                    <P>Bower</P>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        bower install inko
                    </Pre>

                    <H2>Usage</H2>

                    <Pre className={classNames('prettyprint', 'lang-js')}>
                        var Inko = require('inko');<br />
                        var inko = Inko();
                    </Pre>

                    <H3>영어 → 한글</H3>

                    <Pre className={classNames('prettyprint', 'lang-js')}>
                        inko.en2ko('dkssudgktpdy tptkd!');<br />
                        // 안녕하세요 세상!
                    </Pre>

                    <H3>한글 → 영어</H3>

                    <Pre className={classNames('prettyprint', 'lang-js')}>
                        inko.ko2en('ㅗ디ㅣㅐ 재깅!');<br />
                        // hello world!
                    </Pre>

                    <H1_2>inko-cli</H1_2>

                    <P>inko-cli는 터미널에서 inko를 쉽게 쓰도록 해주는 커맨드라인 인터페이스 모듈입니다.</P>

                    <H2>Installation</H2>

                    <H3>npm</H3>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        npm install -g inko-cli
                    </Pre>

                    <H2>Usage</H2>

                    <H3>영어 → 한글</H3>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        $ inko -k "dkssudgktpdy ggg"<br />
                        안녕하세요 ㅎㅎㅎ
                    </Pre>

                    <H3>한글 → 영어</H3>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        $ inko -e "ㅗ디ㅣㅐ 재깅!"<br />
                        hello world!
                    </Pre>

                    <H2>Related</H2>

                    <P><A href="https://github.com/738/inko-cli" target="_blank" rel="noopener noreferrer">inko-cli</A> - Use inko on the command line</P>
                    <P><A href="https://github.com/738/inko-chrome-extension" target="_blank" rel="noopener noreferrer">inko-chrome-extension</A> - Inko chrome extension</P>
                    <P><A href="https://github.com/738/alfred-inko" target="_blank" rel="noopener noreferrer">alfred-inko</A> - Alfred 3 workflow to convert misspelled English characters into Korean letters (& vice versa) </P>

                    <H2>Contributing</H2>

                    <P>이 오픈소스 프로젝트에 누구나 기여할 수 있습니다. 기여하고 싶은 분들은 이 레포지토리를 포크한 후 풀리퀘스트 요청해주세요!</P>

                    <H2>License</H2>

                    <P>inko.js and inko-cli are released under the MIT License. See <A href="https://github.com/738/inko/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">LICENSE</A> file for details.</P>
                </Contents>
            </Container>
        );
    }
}

export default Readme;

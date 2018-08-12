import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const Container = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    @media (max-width: 700px) {
        
    }
`;

const Contents = styled.div`
    width: 75%;
`;

const H1 = styled.div`
    color: #F8AF46;
    font-size: 36px;
    margin: 40px 0px;
    font-family: 'Anton', sans-serif;
    @media (max-width: 700px) {
        font-size: 38px;
    }
`;

const H2 = styled.div`
    color: #212121;
    font-size: 28px;
    margin: 30px 0px;
    @media (max-width: 700px) {
        font-size: 30px;
    }
`;

const H3 = styled.div`
    color: #212121;
    font-size: 20px;
    margin: 30px 0px;
    @media (max-width: 700px) {
        font-size: 22px;
    }
`;

const P = styled.div`
    font-size: 18px;
    margin: 20px 0px;
    @media (max-width: 700px) {
        font-size: 14px;
    }
`;

const A = styled.a`
    text-decoration: none;
    color: #EF53F9;
    font-weight: bold;
`

const Pre = styled.pre`
    font-size: 16px;
`;

class Readme extends React.Component {
    render() {
        return (
            <Container>
                <Contents >
                    <H1>Getting Started</H1>
                    <P>영타를 한글로 쳤을 때, 혹은 한타를 영어로 변환해주는 기능을 가진 자바스크립트 오픈소스 라이브러리입니다.</P>

                    <H2>Installation</H2>

                    <H3 id="npm">npm</H3>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        npm install inko
                    </Pre>

                    <H3 id="yarn">yarn</H3>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        yarn add inko
                    </Pre>

                    <H3 id="asbrowsermodule">As Browser module</H3>

                    <P>CDN</P>

                    <Pre className={classNames('prettyprint', 'lang-html')}>
                        &lt;script src="https://cdn.jsdelivr.net/npm/inko@1.0.5/inko.min.js"&gt;&lt;/script&gt;
                    </Pre>

                    <P>Bower</P>

                    <Pre className={classNames('prettyprint', 'lang-bsh')}>
                        bower install inko
                    </Pre>

                    <H2 id="howtouse">Usage</H2>

                    <Pre className={classNames('prettyprint', 'lang-js')}>
                        var Inko = require('inko');<br/>
                        var inko = Inko();
                    </Pre>

                    <H3>영어 → 한글</H3>

                    <Pre className={classNames('prettyprint', 'lang-js')}>
                        inko.en2ko('dkssudgktpdy tptkd!');<br/>
                        // 안녕하세요 세상!
                    </Pre>

                    <H3>한글 → 영어</H3>

                    <Pre className={classNames('prettyprint', 'lang-js')}>
                        inko.ko2en('ㅗ디ㅣㅐ 재깅!');<br/>
                        // hello world!
                    </Pre>

                    <H2>Dependent tools</H2>

                    <P><A href="https://github.com/JonJee/inko-cli" target="_blank" rel="noopener noreferrer">Inko CLI</A> - Use Inko on the command line.</P>

                    <H2 id="howtocontribute">Contributing</H2>

                    <P>이 오픈소스 프로젝트에 누구나 기여할 수 있습니다. 기여하고 싶은 분들은 이 레포지토리를 포크한 후 풀리퀘스트 요청해주세요!</P>

                    <H2 id="license">License</H2>

                    <P>Inko.js is released under the MIT License. See <A href="https://github.com/jonjee/inko/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">LICENSE</A> file for details.</P>
                </Contents>
            </Container>
        );
    }
}

export default Readme;

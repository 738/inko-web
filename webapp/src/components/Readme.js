import React from 'react';
import styled from 'styled-components';

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
    font-size: 44px;
    margin: 40px 0px;
    font-family: 'Anton', sans-serif;
`;

const H2 = styled.div`
    color: #212121;
    font-size: 36px;
    margin: 40px 0px;
`;

const H3 = styled.div`
    color: #212121;
    font-size: 28px;
    margin: 40px 0px;
`;

const P = styled.div`
    margin: 40px 0px;
`;

class Readme extends React.Component {
    render() {
        return (
            <Container>
                <Contents >
                    <H1>Getting Started</H1>
                    <P>영타를 한글로 쳤을 때, 혹은 한타를 영어로 변환해주는 기능을 가진 자바스크립트 오픈소스 라이브러리입니다.</P>

                    <H2>How to install</H2>

                    <H3 id="npm">npm</H3>

                    <pre><code class="bash language-bash">npm install inko</code></pre>

                    <H3 id="yarn">yarn</H3>

                    <pre><code class="bash language-bash">yarn add inko</code></pre>

                    <H3 id="asbrowsermodule">As Browser module</H3>

                    <p>CDN</p>

                    <pre><code class="html language-html">
                        &lt;script src="https://cdn.jsdelivr.net/npm/inko@1.0.5/inko.min.js"&gt;&lt;/script&gt;
                    </code></pre>

                    <p>Bower</p>

                    <pre><code class="bash language-bash">bower install inko</code></pre>

                    <H2 id="howtouse">How to use</H2>

                    <pre><code>
                        var Inko = require('inko');
                        var inko = Inko();
                    </code></pre>

                    <H3 id="">영타 -> 한글</H3>

                    <pre><code>
                        inko.en2ko('dkssudgktpdy tptkd!');
                        // 안녕하세요 세상!
                    </code></pre>

                    <H3 id="-1">한타 -> 영문</H3>

                    <pre><code>
                        inko.ko2en('ㅗ디ㅣㅐ 재깅!');
                        // hello world!
                    </code></pre>

                    <H2>Dependent tools</H2>

                    <P><a href="https://github.com/JonJee/inko-cli">Inko CLI</a> - Use Inko on the command line.</P>

                    <H2 id="howtocontribute">How To Contribute</H2>

                    <p>이 오픈소스 프로젝트에 누구나 기여할 수 있습니다. 기여하고 싶은 분들은 이 레포지토리를 포크한 후 풀리퀘스트 요청해주세요!</p>

                    <H2 id="license">License</H2>

                    <p>MIT</p>
                </Contents>
            </Container>
        );
    }
}

export default Readme;

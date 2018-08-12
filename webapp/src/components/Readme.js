import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    @media (max-width: 700px) {
        
    }
`;

const Contents = styled.div`
    width: 75%;
`;

const H1 = styled.h1`

`;

const H2 = styled.h2`

`;

const H3 = styled.h2`

`;

class Readme extends React.Component {
    render() {
        return (
            <Container>
                <Contents >
                    <h1>Getting Started</h1>

                    <ul>
                        <li>영타를 한글로 쳤을 때, 혹은 한타를 영어로 변환해주는 기능을 가진 자바스크립트 오픈소스 라이브러리입니다.</li>
                    </ul>

                    <h2 id="releasenote">Release Note</h2>

                    <ul>
                        <li>v1.0.3 (2018.08.07) : <a href="https://github.com/JonJee/inko/issues/7">#7</a> 영타 -> 한글로 변환 시켜주는 로직 수정. 알파벳 소문자 26개, 대문자 26개 총 52개에 맞춰서 한글과 매핑함.</li>

                        <li>v1.0.4 (2018.08.11) : <a href="https://github.com/JonJee/inko/issues/4">#4</a>, <a href="https://github.com/JonJee/inko/issues/8">#8</a> Gulp로 workflow 자동화 (inko.min.js 파일 생성), Bower에 inko 등록</li>

                        <li>v1.0.5 (2018.08.11) : inko.js에서 <code>package.json</code> 파일을 import하는 부분 제거</li>
                    </ul>

                    <h2 id="dependenttools">Dependent tools</h2>

                    <ul>
                        <li><a href="https://github.com/JonJee/inko-cli">Inko CLI</a> - Use Inko on the command line.</li>
                    </ul>

                    <h2 id="howtoinstall">How to install</h2>

                    <h3 id="npm">npm</h3>

                    <pre><code class="bash language-bash">npm install inko</code></pre>

                    <h3 id="yarn">yarn</h3>

                    <pre><code class="bash language-bash">yarn add inko</code></pre>

                    <h3 id="asbrowsermodule">As Browser module</h3>

                    <p>CDN</p>

                    <pre><code class="html language-html">
                        &lt;script src="https://cdn.jsdelivr.net/npm/inko@1.0.5/inko.min.js"&gt;&lt;/script&gt;
                    </code></pre>

                    <p>Bower</p>

                    <pre><code class="bash language-bash">bower install inko</code></pre>

                    <h2 id="howtouse">How to use</h2>

                    <pre><code>
                        var Inko = require('inko');
                        var inko = Inko();
                    </code></pre>

                    <h3 id="">영타 -> 한글</h3>

                    <pre><code>
                        inko.en2ko('dkssudgktpdy tptkd!');
                        // 안녕하세요 세상!
                    </code></pre>

                    <h3 id="-1">한타 -> 영문</h3>

                    <pre><code>
                        inko.ko2en('ㅗ디ㅣㅐ 재깅!');
                        // hello world!
                    </code></pre>

                    <h2 id="howtocontribute">How To Contribute</h2>

                    <p>이 오픈소스 프로젝트에 누구나 기여할 수 있습니다. 기여하고 싶은 분들은 이 레포지토리를 포크한 후 풀리퀘스트 요청해주세요!</p>

                    <h2 id="license">License</h2>

                    <p>MIT</p>
                </Contents>
            </Container>
        );
    }
}

export default Readme;

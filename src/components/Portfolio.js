import React from "react";
import styles from '../css/Project.module.scss';

const Portfolio = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>🔸MYPOFO🔸<br/>포트폴리오 사이트</h1>
                <h2>2023.07.03 ~ 2023.07.09 🧍‍♂️</h2>
                <h2><a className={styles.codeview} href='https://github.com/ksojin1/pf_project'>👁‍🗨CodeView</a></h2>
                <p>지금 보고 계신 저의 포트폴리오 사이트이며 단독으로 제작한 프로젝트입니다.<br/>
                디바이스 종류에 따라 웹페이지의 크기가 자동으로 변경되는 반응형 웹으로 구현했습니다.</p>
                <p>Github Page로 배포할 때 여러가지 오류를 해결하는 과정에서 경로설정과 라우팅에 대해 더 자세하게 이해할 수 있었습니다.<br/>
                </p>
                <div className={styles.stack_Div}>
                    <img src={`${process.env.PUBLIC_URL}/image/vscode.png`} alt="vscode"/>
                    <img src={`${process.env.PUBLIC_URL}/image/github.png`} alt="github"/>
                    <img src={`${process.env.PUBLIC_URL}/image/react.png`} alt="react"/>
                    <img src={`${process.env.PUBLIC_URL}/image/react_router.png`} alt="react_router"/>
                    <img src={`${process.env.PUBLIC_URL}/image/sass.png`} alt="sass"/>
                </div>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍반응형 웹📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/mypofo1.png`} alt="메인페이지"/></div>
                <p>
                    🙋화면 크기에 따라 UI구조가 달라지는 반응형 웹을 구현 했습니다.
                </p>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/mypofo2.png`} alt="반응형코드"/></div>
                <p>
                    🙋반응형 UI는 CSS Media Query를 사용하지 않고 React Hook으로만 구현했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍Github Page & React Router📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/404.png`} alt="메인페이지"/></div>
                <p>
                    🙋github.io로 배포하는 과정에서 라우팅문제로 발생하는 오류를 해결했습니다.<br/>
                    원인은 React가 Single Page Application이기 때문에 index.html 페이지 하나로만 작동한다는 점과
                    Github에서는 모든 URL이 index.html 페이지로 이동하지 않고 해당 경로에 있는 페이지를 찾는다는 점이었습니다.<br/>
                    때문에 페이지를 못 찾았을 경우 출력하는 404.html에 index.html 코드를 복사해 오류를 해결했습니다.
                </p>
            </div>
            <div className={styles.end_Div}>
                <h2 style={{fontSize: '18px'}}>🐥끝까지 봐주셔서 감사합니다.🐥</h2>
            </div>
        </div>
    );
}

export default Portfolio;
import React from "react";
import styles from '../css/Project.module.scss';

const Portfolio = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>MYPOFO</h1>
                <h2>포트폴리오 사이트</h2>
                <h3>2023.07.03 ~ 2023.07.12</h3>
                <h3>개발인원 : 1명</h3>
                <h2><a className={styles.codeview} href='https://github.com/ksojin1/mypofo'><span>▶</span>GitHub</a></h2>
                <p>지금 보고 계신 저의 포트폴리오 사이트이며 디바이스 종류에 따라 웹페이지의 크기가 자동으로 변경되는 반응형 웹으로 구현했습니다.
                </p>
                <img src={`${process.env.PUBLIC_URL}/image/mypofo_skill.png`} alt="stack"/>
                
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/mypofo2.png`} alt="메인페이지"/></div>
            </div>
            <div className={styles.cont_Div}>
                <h2>배경이미지</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/mypofo1.png`} alt="메인페이지"/></div>
                <p>
                    Open API를 활용해 날씨에 따라 배경이미지가 변경되도록 구현했습니다.
                </p>
            </div>
            <div className={styles.end_Div}>
                <h2 style={{fontSize: '18px'}}>끝까지 봐주셔서 감사합니다.</h2>
            </div>
        </div>
    );
}

export default Portfolio;
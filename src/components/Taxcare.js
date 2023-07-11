import React from 'react';
import styles from '../css/Project.module.scss';

const Taxcare = () => {
    
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>TAXCARE</h1>
                <h2>종합소득세 신고용 ERP 프로그램</h2>
                <h3>2023.02.13 ~ 2023.06.30</h3>
                <h3>개발인원 : 2명</h3>
                <h2><a className={styles.codeview} href='https://velog.io/@ksojin1/series/taxcare'><span>▶</span>Velog Study</a></h2>
                <p>
                   세무법인회사에서 사용하는 ERP프로그램으로 시니어 개발자님과 함께 진행했습니다.<br/>
                   제가 구현한 주요 기능은 종합소득금액, 소득공제, 세액공제 자동계산 및 신고서 출력입니다.<br/>
                </p>
                <p>
                    소득세와 관련된 다양한 기능을 구현하면서 Java Servlet & JSP, SQL을 더 자세하게 이해할 수 있었습니다.
                </p>
                <img src={`${process.env.PUBLIC_URL}/image/taxcare_skill.png`} alt="stack"/>
            </div>
            <div className={styles.cont_Div}>
                <h2>종합소득금액계산</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax3.png`} alt="종합소득금액"/></div>
                <p>
                    DB에서 데이터를 가져와 금액을 계산하고 HashMap으로 JSP에 출력하는 방식으로 작성했습니다.<br/>
                    손익계산서는 비율을 실시간으로 사용자에게 보여주기 위해 Ajax와 jquery를 활용했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>공제계산</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax2.png`} alt="소득공제"/></div>
                <p>
                    소득공제와 세액공제는 예외사항이 많고 여러 개의 테이블을 동시에 컨트롤해야 하는 로직이 많았던 만큼
                    전 보다 다양한 데이터타입 활용법과 쿼리문에 대해 익힐 수 있었습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>UI설계</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax4.png`} alt="임대소득"/></div>
                <p>
                    신고서양식을 참고해 페이지의 UI를 만들었습니다.<br/>
                    개발자가 아닌 사용자의 입장에서 좋은 프로그램을 만들기 위해선 화면 설계가 제일 중요한 첫 단계임을 다시 한번 깨달을 수 있었습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>신고서 출력</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax5.png`} alt="신고서출력"/></div>
                <p>
                    신고서 양식을 UI로 만들고 프린트하는 기능을 구현했습니다.<br/>
                    전체 데이터를 가져와야 하므로 각 기능별 class에서 setAttribute 하는 함수를 호출해 화면에 보여주는 방식으로 구현했습니다.
                </p>
            </div>
            <div className={styles.end_Div}>
                <h2 style={{fontSize: '18px'}}>끝까지 봐주셔서 감사합니다.</h2>
            </div>
        </div>
    );
}

export default Taxcare;
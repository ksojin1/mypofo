import React from 'react';
import styles from '../css/Project.module.scss';

const Taxcare = () => {
    
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>🔸TAXCARE🔸<br/>종합소득세 신고용 ERP 프로그램</h1>
                <h2>2023.02.13 ~ 2023.06.30 👨‍👧</h2>
                <h2><a className={styles.codeview} href='https://velog.io/@ksojin1/series/taxcare'>👁‍🗨StudyView</a></h2>
                <p>
                   세무법인회사에서 사용하는 ERP프로그램으로 시니어 개발자님과 함께 진행했습니다.<br/>
                   구현한 주요 기능은 종합소득금액, 소득공제, 세액공제 자동계산 및 신고서 출력입니다.<br/>
                </p>
                <p>
                    프로그램을 개발하면서 국비지원과정에서 배웠던 JAVA Servlet & JSP를 더 자세하게 이해할 수 있었고
                    기능을 구현하려면 종합소득세 관련 다양한 수식을 공부해야 했기때문에 어려웠지만 그만큼 얻은 지식이 많았던 프로젝트였습니다.
                </p>
                <div className={styles.stack_Div}>
                    <img src={`${process.env.PUBLIC_URL}/image/eclipse.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/java.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/servlet.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/mysql.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/tomcat.png`}/>
                </div>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax1.png`} /></div>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍종합소득금액계산📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax3.png`}/></div>
                <p>
                    🙋‍♀️각 항목별로 수입금액과 비용을 입력하고 종합소득금액을 계산하는 기능을 구현했습니다.
                    DB에서 데이터를 가져와 금액을 계산하고 HashMap으로 JSP에 출력하는 코드를 작성했습니다.<br/>
                    사업소득금액 같은 경우 실시간으로 손익계산서의 비율을 사용자에게 보여주기 위해 Ajax와 jquery를 활용했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍공제계산📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax2.png`}/></div>
                <p>
                    🙋‍♀️구현하기 제일 어려웠던 소득공제와 세액공제는 예외사항이 많고 여러 개의 테이블을 컨트롤해야 하기 때문에
                    SQL과 JAVA에 대해 제일 많이 공부했던 부분입니다.<br/>
                    특히 근로소득관련 공제를 하면서 SQL함수, 다중 JOIN, CASE문 등 전보다 다양한 쿼리문을 공부하고 활용할 수 있었고
                    그 계기로 SQLD자격증도 취득할 수 있었습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍UI설계📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax4.png`}/></div>
                <p>
                    🙋‍♀️신고서양식을 참고해 새로 추가된 페이지의 UI를 만들었습니다.<br/>
                    개발자가 아닌 사용자의 입장에서 좋은 프로그램을 만들기 위해선 화면 설계가 제일 중요한 첫 단계임을 다시 한번 깨달을 수 있었습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍신고서 출력📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/tax5.png`}/></div>
                <p>
                    🙋‍♀️종합소득세신고서 양식을 UI로 만들고 프린트하는 기능을 구현했습니다.<br/>
                    프린트할 때는 전체 데이터를 가져와야 하므로 각 기능별 class에서 setAttribute 하는 함수 전체를 호출하고
                    각각의 신고서별로 데이터를 보여주는 방식으로 구현했습니다.
                </p>
            </div>
            <div className={styles.end_Div}>
                <h2 style={{fontSize: '18px'}}>🐥끝까지 봐주셔서 감사합니다.🐥</h2>
            </div>
        </div>
    );
}

export default Taxcare;
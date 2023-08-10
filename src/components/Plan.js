import React from "react";
import styles from '../css/Project.module.scss';

const Plan = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>PlanProject</h1>
                <h2>여행 계획표 만들기 프로그램</h2>
                <h3>2022.11.01 ~ 2022.12.12</h3>
                <h3>개발인원 : 2명</h3>
                <h2><a className={styles.codeview} href='https://github.com/ksojin1/Plan-project'><span>▶</span>GitHub</a></h2>
                <p>위치기반으로 여행계획을 직관적으로 볼 수 있고 작성한 계획표를 PDF로 출력해 공유할 수 있는 프로그램입니다.<br/>
                제가 구현한 기능은 계획서 작성 및 View 입니다.</p>
                <p>프로그램을 개발하면서 JSX로 Object타입을 활용하는 다양한 방법을 익힐 수 있었습니다.</p>
                <img src={`${process.env.PUBLIC_URL}/image/plan_skill.png`} alt="stack"/>
            </div>
            <div className={styles.cont_Div}>
                <h2>여행 계획표 UI 설계</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/plan1.png`} alt="여행계획날짜"/></div>
                <p>
                    실제 여행계획을 짜는 순서대로 작성할 수 있도록 페이지를 나누고 각 페이지 별로 컴포넌트 상단의 네비를 활용해
                    이동할 수 있도록 설계하였으며 React-Calendar로 커스텀 달력을 만들어 활용했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>지도 API 활용</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/plan2.png`} alt="여행계획기본정보"/></div>
                <p>
                    네이버 지도 API를 활용해 사용자가 입력한 주소를 지도에 표시해 주는 기능을 구현했습니다.<br/>
                    MongoDB를 사용하면서 NoSQL, 동적스키마 특징을 살린 Key, Value 형태의 다양한 Object 활용법을 익힐 수 있었습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>일자별 계획 작성</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/plan3.png`} alt="일자별계획"/></div>
                <p>
                    날짜별로 여러개의 일정을 추가할 수 있으며 장소를 추가할 때 마다 좌표를 활용해 이동거리와 시간을 계산하는 기능을 구현했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>여행 계획표 View</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/plan4.png`} alt="계획표보기"/></div>
                <p>
                    DB에 저장한 데이터를 활용해 작성한 일별 계획표를 보여주고 수정하기를 누르면 다시 입력페이지로 이어지는 기능을 구현했습니다.
                </p>
            </div>
            <div className={styles.end_Div}>
                <h2 style={{fontSize: '18px'}}>끝까지 봐주셔서 감사합니다.</h2>
            </div>
        </div>
    );
}

export default Plan;
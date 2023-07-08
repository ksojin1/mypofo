import React from "react";
import styles from '../css/Project.module.scss';

const Plan = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>🔸PlanProject🔸<br/>여행 계획표 만들기 프로그램</h1>
                <h2>2022.11.01 ~ 2022.12.12 🧍‍♂️🧍‍♂️</h2>
                <h2><a className={styles.codeview} href='https://github.com/wonjun12/Team-PlanProject'>👁‍🗨CodeView</a></h2>
                <p>위치기반으로 여행계획을 직관적으로 볼 수 있고 작성한 계획표를 PDF로 출력해 공유할 수 있는 프로그램입니다.<br/>
                제가 구현한 기능은 계획서 작성 및 View 입니다.</p>
                <p>단기간에 두명이서 진행한 프로젝트로 좀 더 많은 기능을 구현하지 못해 아쉬웠지만 JSX로 Object타입을 활용하는 다양한 방법을 익힐 수 있었습니다.</p>
                <div className={styles.stack_Div}>
                    <img src={`${process.env.PUBLIC_URL}/image/vscode.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/github.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/react.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/react_router.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/axios.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/naver.png`} style={{width: '90%', borderRadius: '15px'}}/>
                    <img src={`${process.env.PUBLIC_URL}/image/sass.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/nodeexpress.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/mongodb.png`}/>
                </div>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍여행 계획표 UI 설계 및 Calendar활용📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/plan1.png`} /></div>
                <p>
                    🙋‍♀️여행 계획표 페이지 UI를 설계했습니다.<br/>
                    사용자가 실제 여행계획을 짜는 순서대로 작성할 수 있도록 기본정보입력 페이지와 일별계획작성 페이지로 나눴고
                    각 페이지 별로 컴포넌트 상단의 네비를 활용해 이동할 수 있도록 설계했으며 React-Router를 활용해 충접라우팅을 구현했습니다.<br/>
                    또한 일정입력 화면에서는 React-Calendar로 커스텀 달력을 만들어 활용했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍지도 API와 MongoDB 활용📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/plan2.png`}/></div>
                <p>
                    🙋‍♀️네이버 지도 API를 활용해 사용자가 입력한 주소를 지도에 표시해 주는 기능을 구현했습니다.<br/>
                    DB에 저장할 데이터는 React-Context를 활용해 전역변수로 만들고 자식 컴포넌트에서 수정할 수 있도록 만들었으며
                    지도 좌표를 포함해 단계별로 입력한 기본정보는 Axios로 DB에 저장했습니다.<br/>
                    MongoDB를 사용하면서 NoSQL, 동적스키마 특징을 살린 Key, Value 형태의 다양한 Object 활용법을 익힐 수 있었습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍일자별 계획 작성📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/plan3.png`}/></div>
                <p>
                    🙋사용자가 입력한 기본정보를 토대로 일자별 계획을 작성하는 페이지를 구현했습니다.<br/>
                    날짜별로 여러개의 일정을 추가할 수 있으며 장소를 추가할 때 마다 좌표를 활용해 이동거리와 시간을 계산하는 기능을 구현했습니다.<br/>
                    UI특성상 DB CRUD를 한페이지안에서 동적으로 구현해야하기 때문에 가장 어려웠던 만큼 가장 많은 공부가 됐던 부분입니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍여행 계획표 View📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/plan4.png`}/></div>
                <p>
                    🙋‍♀️DB에 저장한 데이터를 활용해 작성한 일별 계획표를 보여주고 수정하기를 누르면 다시 입력페이지로 이어지는 기능을 만들었습니다.<br/>
                    View페이지에서 수정페이지로 넘어가는 부분에서 중첩라우팅설계가 꼬여 전체적으로 코드를 수정해야 하는 상황이 발생했었습니다.<br/>
                    멘탈이 무너질 뻔했지만 정신을 부여잡고 밤샘작업을 통해 완성했고 초반 라우팅설계의 중요성을 다시 한번 깨달을 수 있었습니다.
                </p>
            </div>
            <div className={styles.end_Div}>
                <h2 style={{fontSize: '18px'}}>🐥끝까지 봐주셔서 감사합니다.🐥</h2>
            </div>
        </div>
    );
}

export default Plan;
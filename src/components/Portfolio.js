import React from "react";
import styles from '../css/Project.module.scss';

const Portfolio = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>🔸MYPOFO🔸<br/>지금 보고계신 Portfolio 사이트</h1>
                <h2>2023.07.03 ~ 2023.07.09 🧍‍♂️</h2>
                <h2><a className={styles.codeview} href='https://github.com/wonjun12/MyFF-Project'>👁‍🗨CodeView</a></h2>
                <p>맛집의 위치를 지도에 표시해 나만의 맛집 스토리를 기록할 수 있고 실시간으로 팔로워와 소통할 수 있는 SNS입니다.<br/>
                제가 맡은 역할은 메인페이지, 게시물 상세보기, 댓글 CRUD 구현입니다.</p>
                <p>국비지원과정에서 만난 팀원들과 함께 학원수업과는 별개로 같이 스터디하면서 React와 Node를 공부해 완성한 프로젝트입니다.<br/>
                그만큼 어려운 부분도 많았지만 처음부터 끝까지 팀원들과 같이 적극적으로 소통하며 가장 재밌게 만들었던 프로젝트이기도 합니다.
                </p>
                <div className={styles.stack_Div}>
                    <img src={`${process.env.PUBLIC_URL}/image/vscode.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/github.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/react.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/react_router.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/sass.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/axios.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/nodeexpress.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/image/mysql.png`}/>
                </div>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍메인화면 View📍</h1>
                <h1>팔로워, 게시글 간략보기 및 무한 스크롤기능 구현</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff1.png`} /></div>
                <p>
                    🙋팔로워와 게시글을 간략하게 볼 수 있는 메인페이지를 구현했습니다.<br/>
                    DB에서 N:N 관계의 팔로워정보, 해당 팔로워의 게시글, 그리고 각 게시글의 댓글정보까지
                    추출해 사용자에게 보여주는 페이지입니다.<br/>
                    이미지는 DB에 Blob타입으로 저장하기 때문에 프론트에서 Base64로 변환해 보여주었습니다.
                </p>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff2.png`} /></div>
                <p>
                    🙋‍♀️스크롤의 움직임에 따라 게시글을 추가로 보여주는 무한 스크롤 기능을 구현했습니다.<br/>
                    사용자의 ViewPort와 타겟 요소의 교차점을 감지하는 Intersection Observer API를 활용해 마지막 게시글을 감지하면
                    서버에서 게시물을 추가로 가져오는 Custom Hook을 만들어 사용했습니다.<br/>
                    개인적으로 프로젝트를 하면서 가장 구현하기 어려웠던 기능으로 React 랜더링 방식과 Axios의 비동기식 통신에 대해
                    더 자세히 공부할 수 있었습니다.
                    <br/>
                </p>
            </div>
        </div>
    );
}

export default Portfolio;
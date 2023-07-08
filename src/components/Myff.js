import React from "react";
import styles from '../css/Project.module.scss';

const Myff = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>🔸MYFF🔸<br/>위치기반 먹거리 SNS</h1>
                <h2>2022.10.15 ~ 2022.12.02 🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️</h2>
                <h2><a className={styles.codeview} href='https://github.com/wonjun12/MyFF-Project'>👁‍🗨CodeView</a></h2>
                <p>맛집의 위치를 지도에 표시해 나만의 맛집 스토리를 기록할 수 있고 실시간으로 팔로워와 소통할 수 있는 SNS입니다.<br/>
                제가 맡은 역할은 메인페이지, 게시물 상세보기, 댓글 CRUD 구현입니다.</p>
                <p>국비지원과정에서 만난 팀원들과 함께 학원수업과는 별개로 같이 스터디하면서 React와 Node를 공부해 완성한 프로젝트입니다.<br/>
                그만큼 어려운 부분도 많았지만 처음부터 끝까지 팀원들과 같이 적극적으로 소통하며 가장 재밌게 만들었던 프로젝트이기도 합니다.
                </p>
                <div className={styles.stack_Div}>
                    <img src={`${process.env.PUBLIC_URL}/image/vscode.png`} alt="vscode"/>
                    <img src={`${process.env.PUBLIC_URL}/image/github.png`} alt="github"/>
                    <img src={`${process.env.PUBLIC_URL}/image/react.png`} alt="react"/>
                    <img src={`${process.env.PUBLIC_URL}/image/react_router.png`} alt="react_router"/>
                    <img src={`${process.env.PUBLIC_URL}/image/sass.png`} alt="sass"/>
                    <img src={`${process.env.PUBLIC_URL}/image/axios.png`} alt="axios"/>
                    <img src={`${process.env.PUBLIC_URL}/image/nodeexpress.png`} alt="nodeexpress"/>
                    <img src={`${process.env.PUBLIC_URL}/image/mysql.png`} alt="mysql"/>
                </div>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍메인화면 View📍</h1>
                <h1>팔로워, 게시글 간략보기 및 무한 스크롤기능 구현</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff1.png`} alt="메인페이지"/></div>
                <p>
                    🙋팔로워와 게시글을 간략하게 볼 수 있는 메인페이지를 구현했습니다.<br/>
                    DB에서 N:N 관계의 팔로워정보, 해당 팔로워의 게시글, 그리고 각 게시글의 댓글정보까지
                    추출해 사용자에게 보여주는 페이지입니다.<br/>
                    이미지는 DB에 Blob타입으로 저장하기 때문에 프론트에서 Base64로 변환해 보여주었습니다.
                </p>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff2.png`} alt="무한스크롤"/></div>
                <p>
                    🙋‍♀️스크롤의 움직임에 따라 게시글을 추가로 보여주는 무한 스크롤 기능을 구현했습니다.<br/>
                    사용자의 ViewPort와 타겟 요소의 교차점을 감지하는 Intersection Observer API를 활용해 마지막 게시글을 감지하면
                    서버에서 게시물을 추가로 가져오는 Custom Hook을 만들어 사용했습니다.<br/>
                    개인적으로 프로젝트를 하면서 가장 구현하기 어려웠던 기능으로 React 랜더링 방식과 Axios의 비동기식 통신에 대해
                    더 자세히 공부할 수 있었습니다.
                    <br/>
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍BEST 게시물, BEST 유저📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff3.png`} alt="베스트페이지"/></div>
                <p>
                    🙋무한 스크롤 기능을 구현하면서 만든 Custom Hook을 활용해 BEST 페이지를 구현했습니다.<br/>
                    게시글은 좋아요가 많은 순서대로, 유저는 팔로워가 많은 순서대로 보여주었습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍게시글 상세보기📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff4.png`} alt="게시글상세보기"/></div>
                <p>
                    🙋‍♀️해당 게시글을 클릭하면 볼 수 있는 게시글 상세보기 페이지를 구현했습니다.<br/>
                    본인 게시글일 경우 수정, 삭제까지 할 수 있도록 만들었습니다.<br/>
                    또한 Axios를 활용해 비동기식으로 좋아요와 팔로우를 DB에 저장하는 기능을 구현했습니다.<br/>
                </p>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff5.png`} alt="댓글"/></div>
                <p>
                    🙋게시글에 남길 수 있는 댓글 CRUD 기능을 구현했습니다.<br/>
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍사진 미리보기📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff8.png`} alt="사진미리보기"/></div>
                <p>
                    🙋글쓰기에서 사진 업로드 및 미리보기 기능을 구현했습니다.<br/>
                    사용자가 이미지파일을 업로드하면 FileReader를 활용해 URL로 미리보기를 만들고
                    이미지파일을 State에 담아 추가, 삭제 기능을 구현했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h1>📍비밀번호 찾기📍</h1>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff6.png`} alt="비밀번호"/></div>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff7.png`} alt="메일"/></div>
                <p>
                    🙋비밀번호 찾기 및 변경 기능을 구현했습니다.<br/>
                    이메일로 회원가입을 하기때문에 비밀번호 찾기에서 이메일을 입력하면 백에서 메일을 보내고
                    암호화된 비밀번호가 포함된 주소를 클릭하면 비밀번호를 체크하고 변경할 수 있도록 해주는 기능입니다.
                </p>
            </div>
            <div className={styles.end_Div}>
                <h2 style={{fontSize: '18px'}}>🐥끝까지 봐주셔서 감사합니다.🐥</h2>
            </div>
        </div>
    );
}

export default Myff;
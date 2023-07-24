import React from "react";
import styles from '../css/Project.module.scss';

const Myff = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.cont_Div}>
                <h1>MYFF</h1>
                <h2>위치기반 먹거리 SNS</h2>
                <h3>2022.10.15 ~ 2022.12.02</h3>
                <h3>개발인원 : 4명</h3>
                <h2><a className={styles.codeview} href='https://github.com/wonjun12/MyFF-Project'><span>▶</span>GitHub</a></h2>
                <p>맛집의 위치를 지도에 표시해 나만의 맛집 스토리를 기록할 수 있고 실시간으로 팔로워와 소통할 수 있는 SNS입니다.<br/>
                제가 맡은 역할은 메인페이지, 게시물 상세보기, 댓글 CRUD 입니다.</p>
                <p>학원에서 만난 팀원들과 함께 독학으로 React와 Node를 공부해 완성한 프로젝트입니다.<br/>
                그만큼 어려운 부분도 많았지만 처음부터 끝까지 팀원들과 같이 적극적으로 소통하며 가장 재밌게 만들었던 프로젝트이기도 합니다.
                </p>
                <img src={`${process.env.PUBLIC_URL}/image/myff_skill.png`} alt="stack"/>
            </div>
            <div className={styles.cont_Div}>
                <h2>메인페이지</h2>
                <h2>팔로워, 게시글 간략보기 및 무한 스크롤기능 구현</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff1.png`} alt="메인페이지"/></div>
                <p>
                    팔로워와 게시글을 간략하게 볼 수 있는 메인페이지를 구현했습니다.<br/>
                    이미지는 DB에 Blob타입으로 저장하고 화면에는 Base64로 변환해 보여주었습니다.
                </p>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff2.png`} alt="무한스크롤"/></div>
                <p>
                    스크롤의 움직임에 따라 게시글을 추가로 보여주는 무한 스크롤 기능을 구현했습니다.<br/>
                    사용자의 ViewPort와 타겟 요소의 교차점을 감지하는 Intersection Observer API를 활용해 마지막 게시글을 감지하면
                    서버에서 게시물을 추가로 가져오는 Custom Hook을 만들어 사용했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>BEST 게시물, BEST 유저</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff3.png`} alt="베스트페이지"/></div>
                <p>
                    무한 스크롤 기능을 구현하면서 만든 Custom Hook을 활용해 BEST 페이지를 구현했습니다.<br/>
                    게시글은 좋아요가 많은 순서대로, 유저는 팔로워가 많은 순서대로 보여주었습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>게시글 상세보기</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff4.png`} alt="게시글상세보기"/></div>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff5.png`} alt="댓글"/></div>
                <p>
                    게시글 상세보기와 게시글에 남길 수 있는 댓글 기능을 구현했습니다.<br/>
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>사진 미리보기</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff8.png`} alt="사진미리보기"/></div>
                <p>
                    사용자가 이미지파일을 업로드하면 FileReader를 활용해 URL로 미리보기를 만들고
                    이미지파일을 State에 담아 추가, 삭제 기능을 구현했습니다.
                </p>
            </div>
            <div className={styles.cont_Div}>
                <h2>비밀번호 찾기</h2>
                <br/>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff6.png`} alt="비밀번호"/></div>
                <div className={styles.img_Div}><img src={`${process.env.PUBLIC_URL}/image/myff7.png`} alt="메일"/></div>
                <p>
                    이메일로 회원가입을 하기때문에 비밀번호 찾기에서 이메일을 입력하면 백에서 메일을 보내고
                    암호화된 비밀번호가 포함된 주소를 클릭하면 비밀번호를 체크하고 변경할 수 있도록 해주는 기능입니다.
                </p>
            </div>
            <div className={styles.end_Div}>
                <h2 style={{fontSize: '18px'}}>끝까지 봐주셔서 감사합니다.</h2>
            </div>
        </div>
    );
}

export default Myff;
import styles from '../css/Main.module.scss';

const Main = ({scroll, mobile}) => {
    return (
        <div className={styles.container} >
            <div className={styles.header_Box} style={scroll ? {height: '80px'} : {height: '120px'}}></div>
            <div className={styles.wrap}>
                <div className={styles.intro_Div}>
                    <div className={styles.img_Div}>
                        <img src={`${process.env.PUBLIC_URL}/image/me.jpg`}/>
                        <div className={styles.text_Div}>
                        <div className={styles.text_Box}>
                            <br/>
                            <p style={mobile ? {fontSize: '10px'} : {fontSize: '20px'}} className={styles.intro_coment}>안녕하세요.<br/>풀스택을 목표로 성장하고 있는 신입개발자 김소진입니다.<br/>
                            한계가 없는 아이디어와 그 아이디어를 곧바로 실행으로 옮길 수 있는 다양한 스킬을 가진 개발자를 꿈꾸고 있습니다.<br/>
                            멈추지않고 미래를 바라보며 함께 나아가는 개발자가 되겠습니다.<br/><br/>
                            Name : 김 소 진<br/>
                            Phone : 010-8447-6184<br/>
                            Email : trueksj1121@naver.com<br/>
                            Address : 인천광역시 서구<br/>
                            <br/>
                            </p>
                        </div>
                        {!mobile && <div className={styles.bub_Div}></div>}
                    </div>
                    </div>
                </div>
                <div className={styles.stack_Div}>
                    <h1 className={styles.title}>📚Skill</h1>
                    <div className={styles.stack_Box}>
                        <img src={`${process.env.PUBLIC_URL}/image/skill.png`}/>
                    </div>
                </div>
                <div className={styles.career_Div}>
                    <h1 className={styles.title}>🏃‍♀️Education & Career</h1>
                    <div className={styles.career_Box}>
                        <img src={`${process.env.PUBLIC_URL}/image/career.png`}/>
                    </div>
                </div>
                <div className={styles.pj_Div}>
                    <h1 className={styles.title}>💡Project</h1>
                    <div className={styles.pj_Box}>
                        <img src={`${process.env.PUBLIC_URL}/image/tax1.png`}/>
                        <div className={styles.text_Box}>
                            <h2>
                                🔸MYPOFO🔸<br/>
                                개인 포트폴리오 사이트<br/>
                                React, SCSS
                            </h2>
                            <h2 className={styles.pj_View} onClick={() => window.location = '/project/portfolio'}>
                                👁‍🗨Project View</h2>
                        </div>
                    </div>
                    <div className={styles.pj_Box}>
                        <div className={styles.text_Box}>
                            <h2>
                                🔸TaxCare🔸<br/>
                                종합소득세신고 ERP 프로그램<br/>
                                Java Servlet & Jsp, Jquery, MySQL
                            </h2>
                            <h2 className={styles.pj_View} onClick={() => window.location = '/project/taxcare'}>
                                👁‍🗨Project View</h2>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/image/tax1.png`}/>
                    </div>
                    <div className={styles.pj_Box}>
                        <img src={`${process.env.PUBLIC_URL}/image/plan1.png`}/>
                        <div className={styles.text_Box}>
                            <h2>
                                🔸Plan🔸<br/>여행계획표 만들기 프로그램<br/>
                                React, SCSS, Node express, MongoDB
                            </h2>
                            <h2 className={styles.pj_View} onClick={() => window.location = '/project/plan'}>
                                👁‍🗨Project View</h2>
                        </div>
                    </div>
                    <div className={styles.pj_Box}>
                        <div className={styles.text_Box}>
                            <h2>
                                🔸MyFF🔸<br/>지도기반 맛집 SNS<br/>
                                React, SCSS, Node express, MySQL
                            </h2>
                            <h2 className={styles.pj_View} onClick={() => window.location = '/project/myff'}>
                                👁‍🗨Project View</h2>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/image/myff1.png`}/>
                    </div>
                </div>
                <div style={{backgroundColor: '#F5F5F5'}} className={styles.end_Div}>
                    <h2 style={{fontSize: '18px'}}>🐥끝까지 봐주셔서 감사합니다.🐥</h2>
                </div>
            </div>
        </div>
    );
}

export default Main;
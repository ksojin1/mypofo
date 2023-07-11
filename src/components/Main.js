import React, { useState } from "react";
import styles from '../css/Main.module.scss';
import {Link} from 'react-router-dom';

const project = [
    {
        title: 'MyPofo',
        url: `${process.env.PUBLIC_URL}/image/intro_mypofo.png`,
        text: '개인 포트폴리오 사이트',
        cnt: '1명',
        stack: 'React, SCSS',
        link: '/project/portfolio'
    },
    {
        title: 'TaxCare',
        url: `${process.env.PUBLIC_URL}/image/intro_tax.png`,
        text: '종합소득세신고 ERP 프로그램',
        cnt: '2명',
        stack: 'Java Servlet & Jsp, Jquery, MySQL',
        link: '/project/taxcare'
    },
    {
        title: 'Plan',
        url: `${process.env.PUBLIC_URL}/image/intro_plan.png`,
        text: '여행계획표 만들기 프로그램',
        cnt: '2명',
        stack: 'React, SCSS, Node express, MongoDB',
        link: '/project/plan'
    },
    {
        title: 'MyFF',
        url: `${process.env.PUBLIC_URL}/image/intro_myff.png`,
        text: '지도기반 맛집 SNS',
        cnt: '4명',
        stack: 'React, SCSS, Node express, MySQL',
        link: '/project/myff'
    },
];

const Main = () => {
    const [currentImg, setCurrentImg] = useState(0);
    
    return (
        <div className={styles.container} >
            <div className={styles.nav_Box}></div>
            <div className={styles.wrap}>
                <div className={styles.career_Div}>
                    <h1 className={styles.title}>Education & Career</h1>
                    <br/>
                    <div className={styles.career_Box}>
                        <h4>● 부평디자인과학고등학교</h4>
                        <p>2010 - 2013</p>
                        <h4>● (주)인바이트 - AutoCAD 라이브러리 ERP 프로그램</h4>
                        <p>2012.08 - 2013.05</p>
                        <p>C++로 개발한 제조업 ERP 프로그램 유지보수 업무 담당</p>
                        <h4>● 국비지원 풀스택 개발 과정 수료</h4>
                        <p>2022.07 - 2022.12</p>
                        <p>이젠아카데미 반응형 웹퍼블리싱기초 과정 수료 - Html, CSS, JS</p>
                        <p>이젠아카데미 Java웹 개발 과정 수료 - Java Servlet, Spring</p>
                        <h4>● TaxCare - 종합소득세신고 ERP 프로그램 개발</h4>
                        <p>2023.02 - 2023.06</p>
                        <p>세무법인회사에서 사용하는 종합소득세 신고용 ERP 프로그램 개발업무 담당</p>
                    </div>
                </div>
                <div className={styles.pj_Div}>
                    <h1 className={styles.title}>Project</h1>
                    <br/>
                    <div className={styles.icon_Box}>
                        {(currentImg > 0) &&
                            <img className={styles.left} src={`${process.env.PUBLIC_URL}/image/left.png`} alt="left"
                            onClick={() => {if(currentImg > 0) setCurrentImg((prev) => prev-1)}}/>
                        }
                        {(currentImg < project.length-1) && 
                            <img className={styles.right} src={`${process.env.PUBLIC_URL}/image/right.png`} alt="right"
                            onClick={() => {if(currentImg < project.length-1) setCurrentImg((prev) => prev+1)}}/>
                        }
                    </div>
                    <div className={styles.pj_Box}>
                        <div className={styles.img_Box}>
                            <Link to={project[currentImg].link}><img src={project[currentImg].url}></img></Link> 
                        </div>
                        <div className={styles.text_Box}>
                            <Link to={project[currentImg].link}><h2><span>▶</span>{project[currentImg].title}</h2></Link>
                            <p>{project[currentImg].text}</p>
                            <p>{project[currentImg].stack}</p>
                            <p>개발 인원 : {project[currentImg].cnt}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.stack_Div}>
                    <h1 className={styles.title}>SKill</h1>
                    <br/>
                    <div className={styles.stack_Box}>
                        <img src={`${process.env.PUBLIC_URL}/image/skill.png`} alt='skill'/>
                    </div>
                </div>
                <div className={styles.end_Div}><h4 style={{textAlign: 'center'}}>끝까지 봐주셔서 감사합니다.</h4></div>
            </div>
        </div>
    );
}

export default Main;
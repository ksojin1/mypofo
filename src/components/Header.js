import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import styles from '../css/Header.module.scss';

const Header = ({sideNav}) => {

    return (
        <div className={styles.container} style={sideNav ? {width: '400px'} : {width: '0px'}}>
            {sideNav && (
                <div className={styles.nav_Div}>
                    <ul className={styles.pf_List}>
                        <li style={{textAlign: 'center'}}><img src={`${process.env.PUBLIC_URL}/image/me.jpg`}/></li>
                        <li>Name : 김 소 진</li>
                        <li>Birth : 1994.11.21</li>
                        <li>Address : 인천광역시 서구</li>
                        <li>Phone : 010 8447 6184</li>
                        <li>Email : trueksj1121@naver.com</li>
                        <li>
                            <div className={styles.study_Div}>
                                <img src={`${process.env.PUBLIC_URL}/image/github.png`} alt="github"
                                    onClick={() => window.location = 'https://github.com/ksojin1'}/>
                                <img src={`${process.env.PUBLIC_URL}/image/velog.png`} alt="velog"
                                    onClick={() => window.location = 'https://velog.io/@ksojin1'}/> 
                            </div>
                        </li>
                    </ul>
                    <ul className={styles.menu_List}>
                        <Link to='/main'><li><h1 className={styles.intro_title}>INTRO</h1></li></Link>
                        <li className={styles.pj_title}><h1>PROJECT</h1>
                            <ul className={styles.pj_List}>
                                <li><Link to='/project/portfolio'><h2>MYPOFO</h2></Link></li>
                                <li><Link to='/project/taxcare'><h2>TAXCARE</h2></Link></li>
                                <li><Link to='/project/plan'><h2>PLAN</h2></Link></li>
                                <li><Link to='/project/myff'><h2>MYFF</h2></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
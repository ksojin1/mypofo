import React, { useEffect, useState } from "react";
import styles from '../css/Header.module.scss';
import {Link} from 'react-router-dom';

const Header = ({setSideNav, sideNav, mobile, scroll}) => {

    const [hdStyle, sethdStyle] = useState({
        height: '120px',
        fontSize: '50px'
    });

    const [navbtnStyle, setNavbtnStyle] = useState({
        top: '0px',
        height: '60px',
        padding: '30px 20px 30px 20px',
    });

    useEffect(() => {
        if(scroll){
            sethdStyle({
                ...hdStyle,
                height: '80px',
                fontSize: '40px',
                boxShadow: '0px 3px 7px 0px #cfcfcf'
            });
            if(sideNav) setNavbtnStyle({...navbtnStyle, height: '60px', padding: '30px 20px 30px 20px', top: mobile ? '80px' : '0px'});
            else setNavbtnStyle({...navbtnStyle, height: '40px', padding: '20px', top: '0px'});
        }else {
            sethdStyle({
                ...hdStyle,
                height: '120px',
                fontSize: '50px',
                boxShadow: '0px 0px 0px 0px #cfcfcf'
            });
            if(sideNav) setNavbtnStyle({...navbtnStyle, height: '60px', padding: '30px 20px 30px 20px', top: mobile ? '120px' : '0px'});
            else setNavbtnStyle({...navbtnStyle, height: '60px', padding: '30px 20px 30px 20px', top: '0px'});
        }
    }, [scroll]);

    useEffect(() => {
        if(sideNav){     
            if(mobile) {
                if(scroll) setNavbtnStyle({...navbtnStyle, top: '80px', height: '40px', padding: '20px'});
                else setNavbtnStyle({...navbtnStyle, top: '120px', height: '60px', padding: '30px 20px 30px 20px'});
            }else setNavbtnStyle({...navbtnStyle, top: '0px', height: '60px', padding: '30px 20px 30px 20px'});
        }else {
            if(scroll) setNavbtnStyle({...navbtnStyle, top: '0px', height: '40px', padding: '20px'});
            else setNavbtnStyle({...navbtnStyle, top: '0px', height: '60px', padding: '30px 20px 30px 20px'});
        }
    }, [sideNav]);

    useEffect(() => {
        if(mobile){
            if(sideNav && scroll) setNavbtnStyle({...navbtnStyle, top: '80px'});
            else if(sideNav && !scroll) setNavbtnStyle({...navbtnStyle, top: '120px'});
            else setNavbtnStyle({...navbtnStyle, top: '0px'});
        }else {
            setNavbtnStyle({...navbtnStyle, top: '0px'});
        }
    },[mobile]);

    return (
        <div className={styles.container}>
            <div className={styles.nav_Btn} onClick={() => setSideNav((prev) => !prev)} style={navbtnStyle}>
                <div className={styles.line1} style={sideNav ? {display: 'none'} : {display: 'block'}}></div>
                <div className={styles.line1} style={sideNav ? {position: 'absolute', top: '50%', transform: 'rotate(-45deg)', width: '50px'} : {position: 'unset'}}></div>
                <div className={styles.line1} style={sideNav ? {position: 'absolute', top: '50%', transform: 'rotate(45deg)', width: '50px'} : {position: 'unset'}}></div>
                <div className={styles.line1} style={sideNav ? {display: 'none'} : {display: 'block'}}></div>
            </div>
            <div className={styles.header} style={hdStyle}>
                <div className={styles.blank}></div>
                <div className={styles.title}><p onClick={() => window.location = '/'}>{scroll ? 'KSJ' : "MYPOFO"}</p></div>
                <div className={styles.icon}>
                    <img alt="github" onClick={() => window.location = 'https://github.com/ksojin1'} src={`${process.env.PUBLIC_URL}/image/github.png`}/>
                    <img alt='velog' onClick={() => window.location = 'https://velog.io/@ksojin1'} src={`${process.env.PUBLIC_URL}/image/velog.png`}/>
                </div>
            </div>
            <div className={styles.sideNav} style={sideNav ? (!mobile ? {width: '20%'} : {width: '100%', top: scroll ? '80px' : '120px'}) : {width: '0px', top: scroll ? '80px' : '120px'}}>
                {(sideNav) && (
                    <div className={styles.nav_Div}>
                        <ul>
                            <li className={styles.intro}><p onClick={() => window.location = '/'}>INTRO</p></li>
                            <li><p>PROJECT</p>
                                <div className={styles.pj_list}>
                                    <Link to='/project/portfolio'><div>Portfolio</div></Link>
                                    <Link to='/project/taxcare'><div>Taxcare</div></Link>
                                    <Link to='/project/plan'><div>Plan</div></Link>
                                    <Link to='/project/myff'><div>MyFF</div></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
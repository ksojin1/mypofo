import {useLocation, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Project from './components/Project';
import NotFound from './components/NotFound';
import reset_Style from './css/reset.css';
import styles from './css/App.module.scss';
import axios from 'axios';

const Front = () => {
  useEffect(() => {
    setTimeout(() => window.location = '/main', 9000);
  }, []);

  return(
    <div className={styles.front}>
      <h1>Portfolio</h1>
      <h2>풀스택을 목표로 성장하고 있는 개발자 김소진입니다.</h2>
      <h3>혁신적인 아이디어를 바탕으로</h3>
      <h3>다양한 스킬을 적용시킬 수 있는 개발자를 꿈 꾸고 있습니다.</h3>
      <h3>개인적인 성장을 넘어 팀에 일조할 수 있는 개발자가 되겠습니다.</h3>
    </div>
  );
}



let currentUrl = "/";

function App() {
  const [sideNav, setSideNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [smallSize, setSmallSize] = useState(false);
  const [bgimg, setBgimg] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    if(window.scrollY > 50) setScroll(true);
    else setScroll(false);
  }

  const handleResize = () => {
    if(window.innerWidth < 850) setSmallSize(true);
    else setSmallSize(false);
  }

  const getWeather = async() => {
    //현재 위도,경도
    const lat = 37.566535;
    const lon = 126.9779692;

    //API
    const API_KEY = "29e6fdb8f4a2c1394c290696729a9c86";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    try {
      const res = await axios.get(url);  
      const weather = res.data.weather[0].id;
      console.log(weather);
      if(weather != 800 && weather > 700){
        setBgimg(2);
      }else if(weather > 600){
        setBgimg(3);
      }else if(weather > 300){
        setBgimg(4);
      }else if(weather >= 200){
        setBgimg(5);
      }else {
        setBgimg(1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(currentUrl === '/' && location.pathname === '/main') setSideNav(true);
    else setSideNav(false);
    currentUrl = location.pathname;

    window.scrollTo(0,0);
  }, [location]);
  
  useEffect(() => {
    getWeather();
    
    if(window.innerWidth < 850) setSmallSize(true);
    else setSmallSize(false);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.bgimg} src={`${process.env.PUBLIC_URL}/image/paint${bgimg}.jpg`} alt='background'/>
      <Header sideNav={sideNav}/>
      <div className={styles.empty_Box} style={sideNav? {width: '500px'} : {width: '0px'}}></div>
      <div className={styles.nav_Btn} onClick={() => setSideNav((sideNav) => !sideNav)}>
        <div className={styles.line1} style={sideNav ? {display: 'none'} : {display: 'block'}}></div>
        <div className={styles.line1} style={sideNav ? {position: 'absolute', top: '50%', transform: 'rotate(-45deg)', width: '50px'} : {position: 'unset'}}></div>
        <div className={styles.line1} style={sideNav ? {position: 'absolute', top: '50%', transform: 'rotate(45deg)', width: '50px'} : {position: 'unset'}}></div>
        <div className={styles.line1} style={sideNav ? {display: 'none'} : {display: 'block'}}></div>
      </div>
      {!sideNav && (
        <div className={styles.title}>
          {scroll ? (
            <img src={`${process.env.PUBLIC_URL}/image/up.png`} alt='up' onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}/>
            ) : (
            <h1 onClick={() => window.location = '/'}>MYPOFO</h1>
          )}
        </div>
      )}
      <Routes>
        <Route path='/' element={<Front/>}/>
        {(!smallSize || (smallSize && !sideNav)) && (
          <>
            <Route path='/main' element={<Main/>}/>
            <Route path='/project/*' element={<Project/>}/>
            <Route path='*' element={<NotFound />}/>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

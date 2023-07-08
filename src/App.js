import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Project from './components/Project';
import NotFound from './components/NotFound';

function App() {
  const [sideNav, setSideNav] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scroll, setScroll] = useState(false);
  
  const handleScroll = () => {
      if(window.scrollY > 50) setScroll(true);
      else setScroll(false);
  }

  const handleResize = () => {
    if(window.innerWidth < 850){
      setMobile(true);
    }else {
      setMobile(false);
    }
  }

  useEffect(() => {
    if(window.innerWidth < 850) setMobile(true);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  return (
    <BrowserRouter>
    <div className="App">
      <Header setSideNav={setSideNav} sideNav={sideNav} mobile={mobile} scroll={scroll}/>
      <div style={{display:'flex', width: '100%'}}>
        <div style={(sideNav && !mobile) ? {width: '20%', transition: 'width 0.5s'} : {width: '0px', transition: 'width 0.5s'}}></div>
        <div style={(sideNav && !mobile) ? {width: '80%', transition: 'width 0.5s'} : {width: '100%', transition: 'width 0.5s'}}>
        <Routes>
          <Route path='/' element={<Main scroll={scroll} mobile={mobile}/>}></Route>
          <Route path='/project/*' element={<Project />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

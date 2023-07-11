import React from "react";
import styles from '../css/Project.module.scss';
import { Routes, Route } from "react-router-dom";
import Taxcare from './Taxcare';
import Portfolio from './Portfolio';
import Plan from './Plan';
import Myff from './Myff';
import NotFound from "./NotFound";

const Project = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_Box} style={{height: '120px'}}></div>
            <Routes>
                <Route path="/taxcare" element={<Taxcare/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/plan" element={<Plan/>} />
                <Route path="/myff" element={<Myff/>} />
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default Project;
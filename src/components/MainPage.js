import React from 'react';
import styles from '../styles/MainPage.module.scss';
import SideBar from "./SideBar";
import Search from "./Search";
// import ChatList from "./ChatList";

const MainPage = () => {

    return (
        <div className={styles.mainPage}>
            <SideBar></SideBar>
            <Search></Search>
        </div>
    );
};

export default MainPage;

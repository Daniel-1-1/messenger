import React from 'react';
import styles from '../styles/MainPage.module.scss';
import SideBar from "./SideBar";
import Search from "./Search";
import ChatList from "./ChatList";

const MainPage = () => {

    const chats = [
        {id: 1, profileIcon: "../assets/ProfileIcon.svg", userName: "User 1", lastMessage: "Hello!"},
        {}
    ]

    return (
        <div className={styles.mainPage}>
            <SideBar></SideBar>
            <Search></Search>
            <ChatList chats={chats} />
        </div>
    );
};

export default MainPage;

import React from 'react';
import styles from "../styles/SideBar.module.scss";
import menu from "../assets/меню.svg";
import messageIcon from "../assets/message-circle.svg";
import unreadMessageIcon from "../assets/message-circle-check.svg";
import settingsIcon from "../assets/adjustments-alt.svg";

const sideBar = () => {
    return (
        <div className={styles.sideBar}>
            <button className={styles.sideBarButtonMenu}>
                <img src={menu} alt="Menu" />
            </button>
            <button className={styles.sideBarButtonMessage}>
                <img src={messageIcon} alt="All Chats" />
                Все чаты
            </button>
            <button className={styles.sideBarButtonUnread}>
                <img src={unreadMessageIcon} alt="Unread Messages" />
                Непрочитанные сообщения
            </button>
            <button className={styles.sideBarButtonSettings}>
                <img src={settingsIcon} alt="Edit Settings" />
                Редактировать
            </button>
        </div>
    );
};

export default sideBar;
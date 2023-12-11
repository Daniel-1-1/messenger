import React from "react";
import styles from "../styles/ChatList.module.scss";
import profileIcon from "../assets/ProfileIcon.svg";
import ellipse from "../assets/Ellipse 4.svg";
import ChatListItem from "./ChatListItem";

const ChatList = ({ chats }) => {
    return (
        <div className={styles.chatList}>
            {chats.map((chat) => (
                <ChatListItem key={chat.id} chat={chat} />
                ))}
        </div>
    );
};

export default ChatList;
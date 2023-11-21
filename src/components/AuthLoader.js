/*
import React, { useEffect } from "react";
import styles from "../styles/AuthLoader.module.scss";
import { useNavigate } from 'react-router-dom';

const AuthLoader = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const delay = 3000;                                 // Устанавливаем задержку в 2 секунды
        const timer = setTimeout(() => {        // Запускаем таймер, который перенаправит пользователя на страницу авторизации

            navigate('/auth-screen');                            // Перенаправляем пользователя на страницу авторизации
        }, delay);

        return () => clearTimeout(timer);                     // Очищаем таймер при размонтировании компонента (предотвращаем утечку памяти)
    }, [navigate]);

    return (
        <div className={styles.centerContainer}>
            <div className={styles.authLoaderContainer}>
                <div className={styles.authLoaderText}>iМессенджер</div>
                <div className={styles.textShadow}>iМессенджер</div>
            </div>
        </div>
    );
};


export default AuthLoader;
*/

import React from "react";
import styles from "../styles/AuthLoader.module.scss";



const AuthLoader = () => {
    return (
        <div className={styles.centerContainer}>
            <div className={styles.authLoaderContainer}>
                <div className={styles.authLoaderText}>iМессенджер</div>
                <div className={styles.textShadow}>iМессенджер</div>
            </div>
        </div>

    );
};



export default AuthLoader;
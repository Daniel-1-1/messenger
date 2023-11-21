import React, { useEffect } from "react";
import styles from "../styles/AuthLoader.module.scss";
import { useNavigate } from 'react-router-dom';

const AuthLoader = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const delay = 3000;
        const timer = setTimeout(() => {

            navigate('/auth-screen');
        }, delay);

        return () => clearTimeout(timer);
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

/*
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



export default AuthLoader;*/

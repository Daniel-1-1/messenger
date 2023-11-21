import React, {useState} from 'react';
import styles from "../styles/AuthScreen.module.scss";
import {useNavigate} from 'react-router-dom';

const AuthScreen = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    // const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const navigate = useNavigate();

    const handleNextButtonClick = () => {
        if (isEmailValid(email)) {
            navigate("./code-input");
        } else {
            setEmailError("Введите корректный емейл");
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailError(true);
                break;
            default:
                break;
        }
    }

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <div className={styles.AuthScreenContainer}>
            <h1 className={styles.AuthTitle}>
                Авторизация
            </h1>
            <div className={styles.EmailInputContainer}>
                <label className={styles.EmailInputLabel}>
                    Введите почту
                </label>
                {(emailError) && <div className={styles.emailAuthError}>{emailError}</div>}
                <input
                    onBlur={e => blurHandler(e)}
                    type="email"
                    className={styles.EmailInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                />
                <div className={styles.MailInputLine}>
                </div>
                <button className={styles.NextButton} onClick={handleNextButtonClick}>
                    Далее
                </button>
            </div>
        </div>
    );
};

export default AuthScreen;

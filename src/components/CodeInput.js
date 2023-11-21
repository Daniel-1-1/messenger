import React, {useState} from "react";
import styles from "../styles/CodeInput.module.scss";
import {useNavigate} from "react-router-dom";

const CodeInput = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(["", "", "", "", ""]);

    const handleInputChange = (index, e) => {
        const isNumber = /^\d+$/.test(e.target.value);
        if (isNumber) {
            const newCode = [...code];
            newCode[index] = e.target.value;
            setCode(newCode);
        }
    };

    const handleNextButtonClick = () => {
        navigate("./code-input");
    };

    return (
        <div className={styles.CodeScreenContainer}>
            <h1 className={styles.CodeTitle}>
                Авторизация
            </h1>
            <div className={styles.CodeInputContainer}>
                <label className={styles.CodeInputLabel}>
                    Введите 5-ти значный пароль
                </label>
                <div className={styles.CodeInputWrapper}>
                    {code.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            value={value}
                            className={styles.CodeInput}
                            maxLength={1}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    ))}
                </div>
                <button className={styles.NextButton} onClick={handleNextButtonClick}>
                    Далее
                </button>
            </div>
        </div>
    );
};

export default CodeInput;

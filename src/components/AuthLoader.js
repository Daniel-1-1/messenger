/*
import React, { useEffect, useState  } from "react";
import "../styles/AuthLoader.scss";

const AuthLoader = () => {
    return (
        <div className="center-container">
            <div className="auth-loader-container">
                <div className="auth-loader-text">iМессенджер</div>
                <div className="text-shadow">iМессенджер</div>
            </div>
        </div>
    );
};



*/
import React, { useState } from 'react';

function AuthLoader() {
    const [count, setCount] = useState(10);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 345)}>Increment</button>
        </div>
    );
}
export default AuthLoader;
import React, {useEffect, useState} from "react";
import AuthLoader from "./components/AuthLoader";
import AuthScreen from "./components/AuthScreen";
import CodeInput from "./components/CodeInput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
   /* const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')*/
  return (
      <Router>
        <Routes>
          <Route path="/" element={<AuthLoader />} />
            {<Route path="/auth-screen" element={<AuthScreen />} />}
            {<Route path="/auth-screen/code-input" element={<CodeInput />} />}
        </Routes>

      </Router>
  );
};

export default App;

import React from "react";
import AuthLoader from "./components/AuthLoader";
import AuthScreen from "./components/AuthScreen";
import CodeInput from "./components/CodeInput";
import MainPage from "./components/MainPage";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
const App = () => {
  return (
        <Routes>
          <Route path="/" element={<AuthLoader />} />
            <Route path="/auth-screen" element={<AuthScreen />} />
            <Route path="/code-input" element={<CodeInput />} />
            <Route path="/main-page" element={<MainPage />} />
        </Routes>
  );
};

export default App;

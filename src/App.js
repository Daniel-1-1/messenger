import React from "react";
import AuthLoader from "./components/AuthLoader";
import AuthScreen from "./components/AuthScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<AuthLoader />} />
            {<Route path="/auth-screen" element={<AuthScreen />} />}
        </Routes>

      </Router>
  );
};

export default App;

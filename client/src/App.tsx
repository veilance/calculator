import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/sign-in">{/* <SignInPage /> */}</Route>
          <Route path="/sign-up">{/* <SignUpPage /> */}</Route>
        </Routes>
      </Router>
  );
}

export default App;

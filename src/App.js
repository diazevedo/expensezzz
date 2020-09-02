import React from "react";
import { createBrowserHistory } from "history";
import { Router, Link } from "react-router-dom";
import Routes from "./routes/index";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Link to="/">HOME</Link>
      <Link to="/register">REGISTER</Link>
      <Link to="/dashboard">dashboard</Link>
      <Routes></Routes>
    </Router>
  );
}

export default App;

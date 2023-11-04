import React, { lazy } from "react";
import "./styles/App.css";
const ShowCase = lazy(() => import("components/ShowCase"));
const Login = lazy(() => import("components/Login"));

function App() {
  return (
    <div className="App">
      <ShowCase />
      <Login />
    </div>
  );
}

export default App;

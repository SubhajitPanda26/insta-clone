import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home/Home";
import "./styles/app.css";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <Home /> */}
      {/* <Login /> */}
      <div style={{ height: "100vh", display: "flex", alignItem: "center" }}>
        <Register />
      </div>
    </div>
  );
}

export default App;

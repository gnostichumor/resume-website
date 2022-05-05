import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Welcome from "./pages/Welcome/Welcome";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Welcome />
      </Router>
    </div>
  );
}

export default App;

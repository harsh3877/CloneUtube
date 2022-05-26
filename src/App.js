import "./App.css";
import React from "react";
import Errorpage from "./Component/Errorpage/Errorpage";
import Homepage from "./Component/Homepage";
import Videopage from "./Component/Videopage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Errorpage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/watch/:id" element={<Videopage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

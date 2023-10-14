import "./Styles/main.scss";
import Signin from "./Pages/Authentication/Signin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

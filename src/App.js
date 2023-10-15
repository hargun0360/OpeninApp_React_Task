import "./Styles/main.scss";
import Signin from "./Pages/Authentication/Signin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import PrivateRoute, {AuthRoute} from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AuthRoute path="/" element={<Signin />} />} />
        <Route exact path="/dashboard" element={<PrivateRoute path="/dashboard" element={<Dashboard />} />} />
      </Routes>
    </div>
  );
}

export default App;

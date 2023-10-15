// Importing necessary modules and components
import "./Styles/main.scss";
import Signin from "./Pages/Authentication/Signin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import PrivateRoute, {AuthRoute} from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* Define the main routes of the application */}
      <Routes>
        {/* Route for the Signin page, using custom `AuthRoute` for possible additional checks */}
        <Route exact path="/" element={<AuthRoute path="/" element={<Signin />} />} />

        {/* Route for the Dashboard page, wrapped with `PrivateRoute` to possibly ensure user authentication */}
        <Route exact path="/dashboard" element={<PrivateRoute path="/dashboard" element={<Dashboard />} />} />
      </Routes>
    </div>
  );
}

// Exporting the App component to be used in index.js
export default App;

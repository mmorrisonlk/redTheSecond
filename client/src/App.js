import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import AuthHome from "./pages/AuthHome";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const context = useContext(AuthContext);
  const loggedIn = context.loggedIn;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AuthHome />}></Route>
          {!loggedIn && <Route path="home" element={<Home />}></Route>}
          <Route path="signIn" element={<SignIn />}></Route>
          <Route path="register" element={<Registration />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

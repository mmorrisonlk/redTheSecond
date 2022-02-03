import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthHome from "./pages/AuthHome";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AuthHome />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="signIn" element={<SignIn />}></Route>
          <Route path="register" element={<Registration />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

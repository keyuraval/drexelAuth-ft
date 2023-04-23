import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp/index";
import Login from "./components/Login";
import HomePage from "./components/cont";
import Inpt from "./components/quant";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/pge" exact element={<HomePage />} />
      <Route path="/inpt" exact element={<Inpt />} />


      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;

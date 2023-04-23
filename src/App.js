import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp/index";
import Login from "./components/Login";
import HomePage from "./components/cont";
import Inpt from "./components/quant";
import Demo from "./components/dmo";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/pge" exact element={<HomePage />} />
      <Route path="/inpt" exact element={<Inpt />} />
      <Route path="/dmo" exact element={<Demo />} />



      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;

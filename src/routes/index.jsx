import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

export const RoutesMain = ({ userData, setUserData }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUserData={setUserData} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Dashboard userData={userData} setUserData={setUserData} />} />
    </Routes>
  );
};

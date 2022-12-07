import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DashMain from "../../components/DashMain";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { api } from "../../services/api";

const Dashboard = ({ userData, setUserData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async (token) => {
      try {
        const data = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await api.get("profile", data);
        setUserData(response.data);
      } catch (error) {
        toast.error("Ops! Algo deu errado");
        navigate("/login");
        window.localStorage.clear();
      }
    };

    const token = localStorage.getItem("@TOKEN");
    !token ? navigate("/login") : getUserData(token);
  }, [navigate, setUserData]);

  return (
    <>
      <Navbar />
      <Header userData={userData} />
      <DashMain userData={userData} />
    </>
  );
};

export default Dashboard;

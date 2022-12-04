import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashMain from "../../components/DashMain";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const Dashboard = ({ userData, setUserData }) => {
  // const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  // const getUserData = async (token) => {
  //   try {
  //     const data = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     const response = await api.get("profile", data);
  //     setUserData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    !token && navigate("/login");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Header userData={userData} />
      <DashMain userData={userData} />
    </>
  );
};

export default Dashboard;

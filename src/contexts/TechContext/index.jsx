import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techModal, setTechModal] = useState("disabled");
  const { setUserData } = useContext(UserContext);

  async function getUserData() {
    const token = localStorage.getItem("@TOKEN");

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
    }
  }

  async function registerNewTech(data) {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      getUserData();
      setTechModal("disabled");
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }

  return <TechContext.Provider value={{ techModal, setTechModal, registerNewTech }}>{children}</TechContext.Provider>;
};

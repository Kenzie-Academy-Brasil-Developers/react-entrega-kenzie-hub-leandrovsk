import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techModal, setTechModal] = useState("disabled");
  const [editTechModal, setEditTechModal] = useState("disabled");
  const [techData, setTechData] = useState({});
  const [selectChange, setSelectChange] = useState(false);
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
      await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getUserData();
      setTechModal("disabled");
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTech(techId) {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getUserData();
      setEditTechModal("disabled");
      toast.success("Tecnologia deletada com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }

  async function editTech(techId, data) {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.put(`users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getUserData();
      setEditTechModal("disabled");
      setSelectChange(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TechContext.Provider value={{ techModal, setTechModal, registerNewTech, editTechModal, setEditTechModal, deleteTech, techData, setTechData, editTech, selectChange, setSelectChange }}>
      {children}
    </TechContext.Provider>
  );
};

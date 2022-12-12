import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
        return;
      }

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
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLogin = async (data) => {
    try {
      setBtnLoading(true);
      const response = await api.post("sessions", data);
      window.localStorage.clear();
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUserData(response.data.user);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message === "Incorrect email / password combination" ? "Erro: usuário ou senha incorretos" : "Ops, Algo deu errado");
    } finally {
      setBtnLoading(false);
    }
  };

  const userRegister = async (data) => {
    try {
      setBtnLoading(true);
      await api.post("users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Ops, algo deu errado");
    } finally {
      setBtnLoading(false);
    }
  };

  return <UserContext.Provider value={{ userData, setUserData, showPassword, setShowPassword, btnLoading, loading, userLogin, userRegister }}>{children}</UserContext.Provider>;
};

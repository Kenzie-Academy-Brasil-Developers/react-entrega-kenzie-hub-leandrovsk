import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain as Routes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <GlobalStyle />
      <Routes userData={userData} setUserData={setUserData} />
    </>
  );
}

export default App;

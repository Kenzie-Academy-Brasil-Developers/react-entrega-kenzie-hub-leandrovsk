import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTechModal from "./components/EditTechModal";
import NewTechModal from "./components/NewTechModal";
import { RoutesMain as Routes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <NewTechModal />
      <EditTechModal />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;

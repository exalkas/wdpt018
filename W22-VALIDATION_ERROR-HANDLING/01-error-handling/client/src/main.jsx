import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes.jsx";
import UserProvider from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <Routes />
  </UserProvider>
);

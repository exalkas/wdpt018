import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    _id: "",
    username: "",
    image: "",
  });

  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("socialUser"));
    console.log("🚀 ~ storedUser:", storedUser);

    if (storedUser) setUser(storedUser);
  }, []);

  console.log("User Context here", user);
  return (
    <UserContext.Provider
      value={{ user, setUser, listOfUsers, setListOfUsers }}
    >
      {children}
    </UserContext.Provider>
  );
}

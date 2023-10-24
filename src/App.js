import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import AddUserCard from "./components/AddUserCard";

function App() {
  const defaultUsers = [
    {
      name: "Harish",
      age: 23,
    },
    {
      name: "Naidu",
      age: 32,
    },
  ];
  const [usersList, setUsersList] = useState(defaultUsers);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, { name: userName, age: userAge }];
    });
  };
  return (
    <div className="">
      <AddUser onAddUser={addUserHandler} />
      <AddUserCard userData={usersList} />
    </div>
  );
}

export default App;

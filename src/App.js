import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import AddUserCard from "./components/AddUserCard";

function App() {
  const defaultUsers = [
    {
      name: "Harish",
      college: "PVPSIT",
      age: 23,
    },
    {
      name: "Naidu",
      college: "Siddhartha Eng",
      age: 32,
    },
  ];
  const [usersList, setUsersList] = useState(defaultUsers);

  const addUserHandler = (userName, userCollege, userAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        { name: userName, college: userCollege, age: userAge },
      ];
    });
  };
  return (
    <div className="justify-center ">
      <AddUser onAddUser={addUserHandler} />
      <AddUserCard userData={usersList} />
    </div>
  );
}

export default App;

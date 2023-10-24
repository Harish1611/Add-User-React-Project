import { useState } from "react";
import ErrorPopupModel from "./ErrorPopupModel";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userSubmissionHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter Valid Input( no empty values )",
      });
      return;
    }
    if (userAge.trim().length <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Age > 0",
      });
      return;
    }

    console.log(`Entered Data : ${userName}, ${userAge}`);
    props.onAddUser(userName, userAge);

    setUserName("");
    setUserAge("");
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorPopupModel
          title={error.title}
          message={error.message}
          onConfrim={errorHandler}
        />
      )}
      <div>
        <form onSubmit={userSubmissionHandler}>
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={userNameHandler}
          />

          <label>Age ( Years )</label>

          <input
            type="number"
            name="userAge"
            value={userAge}
            onChange={userAgeHandler}
          />

          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

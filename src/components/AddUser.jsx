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

    if (userAge.trim() <= 0) {
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
      <div className=" ">
        {error && (
          <ErrorPopupModel
            title={error.title}
            message={error.message}
            onConfrim={errorHandler}
          />
        )}
        <div className="flex p-4 ">
          <div className="mt-14 p-8   bg-gradient-to-r from-sky-900 via-sky-600 to-sky-950 border-x-gray-700 	items-center border-2 rounded-xl w-full lg:w-[35%]  shadow-lg mx-auto ">
            <form onSubmit={userSubmissionHandler} className="">
              <label
                htmlFor="username"
                className="block mt-2 w-full text-md font-bold leading-6 text-black"
              >
                User Name
              </label>
              <div className="flex rounded-md w-full  bg-white   shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={userNameHandler}
                  className="block flex-1  border-0 bg-transparent py-1.5 pl-1 text-gray-800 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>

              <label
                htmlFor="age"
                className="  block mt-2  text-md font-bold leading-6 text-black"
              >
                Age ( Years )
              </label>
              <div className="flex rounded-md  bg-white   shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="number"
                  name="userAge"
                  value={userAge}
                  onChange={userAgeHandler}
                  className="block flex-1  border-0 bg-transparent py-1.5 pl-1 text-gray-800 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>

              <button
                type="submit"
                className="mt-5 bg-slate-950 hover:bg-slate-800 shadow-md text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

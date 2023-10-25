import React from "react";

const AddUserCard = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="flex p-4">
        <div className="mt-14 p-8   bg-gradient-to-r from-sky-900 via-sky-600 to-sky-950 border-x-gray-700 	items-center border-2 rounded-xl w-full lg:w-[35%] shadow-lg mx-auto">
          {props.userData.map((item) => (
            <p
              key={Math.random().toString()}
              className="text-lg text-white font-semibold"
            >
              {" "}
              {` ${item.name} ( ${item.age} Years Old), ${item.college}`}
            </p>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddUserCard;

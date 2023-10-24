import React from "react";

const ErrorPopupModel = (props) => {
  return (
    <div className=" fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 ">
      <div
        onClick={props.onConfrim}
        className="absolute flex w-full top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  "
      >
        <div className="border-white shadow-lg	items-center border-2 rounded-md mx-auto ">
          <header className="py-2 px-12 rounded-md bg-black text-white">
            <h2>{props.title}</h2>
          </header>
          <div className="bg-gradient-to-r from-[#bd97ff] to-[#cd97ff]">
            <p className="py-2 px-12 text-black  bg-gradient-to-r from-[#bd97ff] to-[#cd97ff]">
              {props.message}
            </p>

            <footer className="flex justify-center pb-4">
              <button
                onClick={props.onConfirm}
                className="mt-5  bg-slate-950 hover:bg-slate-800 shadow-md  text-white font-bold py-2 px-4 rounded w-auto"
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopupModel;

import React from "react";

const ErrorPopupModel = (props) => {
  return (
    <div onClick={props.onConfrim} className="">
      <div>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>

        <footer>
          <button onClick={props.onConfirm}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorPopupModel;

import React from "react";

const Alert = (props) => {
    console.log(props);
  return (
    <div className={props.class} style={{style: props.style}} role="alert">
      {props.message}
    </div>
  );
};

export default Alert;

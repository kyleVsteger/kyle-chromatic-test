import React from "react";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "30px 50px" }}>
      {label}
    </button>
  );
};

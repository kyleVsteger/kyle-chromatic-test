import React from "react";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "20px 40px" }}>
      {label}
    </button>
  );
};

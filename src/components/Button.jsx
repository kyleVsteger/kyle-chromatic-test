import React from "react";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "12px 20px" }}>
      {label}
    </button>
  );
};

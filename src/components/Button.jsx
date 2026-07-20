import React from "react";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "2px 4px" }}>
      {label}
    </button>
  );
};

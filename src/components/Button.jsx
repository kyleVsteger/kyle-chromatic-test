import React from "react";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "8px 12px" }}>
      {label}
    </button>
  );
};

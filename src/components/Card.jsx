import React from "react";

export const Card = ({ title, content, children }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>{children}</div>
    </div>
  );
};

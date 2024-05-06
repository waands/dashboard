import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, width }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} w-${width} p-3 hover:drop-shadow-xl`}

    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="px-4 py-1 m-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm whitespace-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;

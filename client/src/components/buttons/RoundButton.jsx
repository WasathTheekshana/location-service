import React from "react";

const RoundButton = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick} className="border border-black rounded-full py-2 px-4 hover:bg-black hover:text-white transition">
      <div className="flex items-center">
        <h1 className={icon ? `pr-6` : ``}>{text}</h1>
        {icon}
      </div>
    </button>
  );
};

export default RoundButton;

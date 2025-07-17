import { InputType } from "@/@types/InputType";
import { FC } from "react";

const Input: FC<InputType> = ({ placeholder, type, classList, icon, iconPosition="left", inputClass }) => {
  return (
    <div className={`flex items-center relative bg-white rounded-[20px] w-[500px] h-[60px] ${classList}`}>
      {iconPosition == "left" && (
        <div className="absolute left-4 text-[#333332] flex items-center">
          {icon}
        </div>
      )}
      <input
        className={`bg-transparent pl-[50px] outline-none text-[20px] px-[20px]  text-black ${inputClass}`}
        type={type}
        placeholder={placeholder}
      />
      {iconPosition == "right" && icon}
    </div>
  );
};

export default Input;
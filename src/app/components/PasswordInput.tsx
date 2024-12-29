import React, { useState } from "react";
import Image from "next/image";

interface PasswordInputProps {
  name: string;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex items-center relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        className="p-3 bg-zinc-800 text-white border border-zinc-700 rounded w-80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary text-center"
      />
      <Image
        alt={showPassword ? "Hide password" : "Show password"}
        src={showPassword ? "/hide.png" : "/show.png"}
        width={20}
        height={20}
        className="absolute flex items-center right-4"
        onClick={togglePasswordVisibility}
      />
    </div>
  );
};

export default PasswordInput;

import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  ...rest
}) => {
  const base =
    "group relative overflow-hidden px-6 py-2 rounded-full font-bold focus:outline-none transition duration-150";

  const variants = {
    primary: "bg-blue-600 text-white border border-blue-600 hover:text-blue-600",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(base, variants[variant], className)}
      {...rest}
    >
      <span className="relative z-10">{children}</span>

      {/* Hover effect background */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out z-0"></span>
      )}
    </button>
  );
};

export default Button;

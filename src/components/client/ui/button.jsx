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
    "group relative overflow-hidden px-5 py-2 font-bold  focus:outline-none transition duration-300";

  const variants = {
    primary: "bg-emerald-700  text-white border border-blue-600 hover:text-emerald-700 rounded-full ",
    emerald: "bg-emerald-700  text-white border border-blue-600 hover:text-emerald-700 rounded-xl ",

 
  };

  return (
    <button
      type="submit"
      onClick={onClick}
      className={clsx(base, variants[variant], className)}
      {...rest}
    >
      <span className="relative z-10">{children}</span>

      {/* Hover effect background */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out z-0"></span>
      )}
      {variant === "emerald" && (
      <span className="absolute left-0 top-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-800 ease-out z-0 pointer-events-none" />
    )}



    </button>
  );
};

export default Button;

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClass = variant === "ghost" ? "btn btn2" : "btn";
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

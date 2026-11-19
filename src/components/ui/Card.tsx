import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
}

export function Card({ dark = false, className = "", children, style, ...props }: CardProps) {
  const darkStyle = dark
    ? { background: "#0F1B2D", borderColor: "#0F1B2D", color: "#F6F3EC" }
    : {};
  return (
    <div
      className={`card ${className}`}
      style={{ ...darkStyle, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

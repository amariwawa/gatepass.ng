import React from "react";

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  mint?: boolean;
}

export function Label({ mint = false, className = "", children, style, ...props }: LabelProps) {
  const mintStyle = mint ? { color: "#8FD3B1" } : {};
  return (
    <div className={`lbl ${className}`} style={{ ...mintStyle, ...style }} {...props}>
      {children}
    </div>
  );
}

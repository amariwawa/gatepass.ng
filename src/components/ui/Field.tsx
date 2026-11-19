import React from "react";

interface FieldProps {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export function Field({ label, htmlFor, children, className = "" }: FieldProps) {
  return (
    <div className={className}>
      <label className="fl" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}

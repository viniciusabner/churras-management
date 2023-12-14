import React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`w-72 h-48 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.26)] font mr-6 bg-white rounded-sm ${className}`}
    >
      {children}
    </div>
  );
};

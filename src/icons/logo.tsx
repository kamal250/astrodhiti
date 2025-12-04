import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className="flex">
      <img src="/logo/logo.png" alt="Logo" className={`h-16 w-auto ${className}`} /> {/* Adjust height here */}
    </div>
  );
};

export default Logo;

import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface CustomLinkProps {
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children }) => {
  return (
    <div className="link-container">
      <RouterLink to="/" className="link-button">
        {children}
      </RouterLink>
    </div>
  );
};

export default CustomLink;

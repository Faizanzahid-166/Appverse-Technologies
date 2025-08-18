// src/components/Card.jsx
import React from "react";

const Card = ({ title, content, footer, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded p-4 max-w-xs ${className}`}>
      {/* Title */}
      <h2 className="font-bold text-lg mb-2">{title}</h2>

      {/* Content (image, text, etc.) */}
      {content && <div className="mb-4">{content}</div>}

      {/* Footer (button, etc.) */}
      {footer && <div>{footer}</div>}
    </div>
  );
};

export default Card;

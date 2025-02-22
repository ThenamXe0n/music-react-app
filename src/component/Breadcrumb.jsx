import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pagePath = location.pathname.slice(1);
  return (
    <div className="pl-8 text-gray-600">
      <strong className="text-black">Home</strong> /{" "}
      <span className="text-medium text-blue-600">{pagePath}</span>
    </div>
  );
};

export default Breadcrumb;

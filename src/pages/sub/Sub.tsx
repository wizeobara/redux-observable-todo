import React from "react";
import { Link } from "react-router-dom";

const Sub: React.FC = () => {
  return (
    <div>
      <h1>I am hungry...</h1>
      <Link to="/">back to main page</Link>
    </div>
  );
};

export default Sub;

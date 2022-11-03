import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/adddeveloper ">Add developer</Link>
      <Link to="/deletedeveloper">Delete developer</Link>
    </div>
  );
}

export default Navigation;

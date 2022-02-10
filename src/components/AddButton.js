import React from 'react';
import { ReactComponent as Add } from "../assets/add.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AddButton = () => {
  return (
     <Link to="/note/new" className="floating-button">
     <Add/>
     </Link>
)
};

export default AddButton;

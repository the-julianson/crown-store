import React from "react";
import "./custom-botton.styles.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
  <button
    className={
      `${inverted ? "inverted" : "null"}
      ${isGoogleSignIn ? "google-sign-in" : "null"} 
      custom-button`}
    {...otherProps}
  >
    {children}
  </button>
); 

export default CustomButton;

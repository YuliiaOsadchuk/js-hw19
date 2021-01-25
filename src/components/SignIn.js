import React, { useState } from "react";

import SignForm from "./SignForm";

const SignIn = () => {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [userData, setUserData] = useState({
    emailAddress: savedUser?.emailAddress,
    password: savedUser?.password,
  });

  const [isRemember, setIsRemember] = useState(false);

  const handleEmailChange = ({ target: { value } }) => {
    setUserData({ ...userData, emailAddress: value });
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setUserData({ ...userData, password: value });
  };

  const handleSignInButtonClick = () => {
    isRemember && localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleRememberCheck = ({ target: { checked } }) => {
    setIsRemember(checked);
  };

  return (
    <SignForm
      titleText="Sign In"
      emailAddress={userData.emailAddress}
      password={userData.password}
      buttonText="sign in"
      linkTextLeft="Forgot Password?"
      linkTextRight="Don't have an account? Sign up"
      labelText="Remember me"
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSignButtonClick={handleSignInButtonClick}
      onCheckedChange={handleRememberCheck}
      linkUrl="/signup"
    />
  );
};

export default SignIn;

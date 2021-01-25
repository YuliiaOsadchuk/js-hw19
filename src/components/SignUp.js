import React, { isValidElement, useState } from "react";

import SignForm, { FlexBox, Input } from "./SignForm";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });
  const [invalidFields, setInvalidFields] = useState({});

  const handleFirstNameInput = ({ target: { value } }) => {
    setFormData({ ...formData, firstName: value });
  };

  const handleLastNameInput = ({ target: { value } }) => {
    setFormData({ ...formData, lastName: value });
  };

  const handleEmailInput = ({ target: { value } }) => {
    setFormData({ ...formData, emailAddress: value });
  };

  const handlePasswordInput = ({ target: { value } }) => {
    setFormData({ ...formData, password: value });
  };

  const handleInputBlur = (fieldName) => {
    setInvalidFields({
      ...invalidFields,
      [fieldName]: isFieldValid(fieldName),
    });
  };

  const checkEmailAddress = (email) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(String([email]).toLowerCase());
  };

  const checkPassword = (passwordStr) => {
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    return mediumRegex.test(String([passwordStr]).toLowerCase());
  };

  const isFieldValid = (fieldName) => {
    if (fieldName === "firstName" || fieldName === "lastName") {
      return formData[fieldName].length >= 3;
    } else if (fieldName === "emailAddress") {
      return checkEmailAddress(formData[fieldName]);
    } else if (fieldName === "password") {
      return checkPassword(formData[fieldName]);
    }
  };

  return (
    <SignForm
      emailAddress={formData.emailAddress}
      password={formData.password}
      titleText="Sign Up"
      buttonText="sign up"
      linkTextLeft=""
      linkTextRight="Already have an account? Sign in"
      labelText="I want to receive inspiration, marketing promotions and updates via email"
      onEmailInput={handleEmailInput}
      onPasswordInput={handlePasswordInput}
      onBlurInput={handleInputBlur}
      invalidFields={invalidFields}
      linkUrl="/signin"
    >
      <FlexBox
        flexDirection="row"
        width="100%"
        height="65px"
        justifyContent="space-between"
      >
        <Input
          width="43%"
          placeholder="First Name"
          onChange={handleFirstNameInput}
          onBlur={() => handleInputBlur("firstName")}
          isValid={invalidFields["firstName"]}
        ></Input>
        <Input
          width="43%"
          placeholder="Last Name"
          onChange={handleLastNameInput}
          onBlur={() => handleInputBlur("lastName")}
          isValid={invalidFields["lastName"]}
        ></Input>
      </FlexBox>
    </SignForm>
  );
};

export default SignUp;

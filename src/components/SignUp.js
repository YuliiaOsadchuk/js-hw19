import React, { useState } from "react";

import SignForm, { FlexBox, Input } from "./SignForm";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });
  const [invalidFields, setInvalidFields] = useState({});

  const handleFirstNameChange = ({ target: { value } }) => {
    setFormData({ ...formData, firstName: value });
    setInvalidFields({
      ...invalidFields,
      firstName: isFieldValid("firstName"),
    });
  };

  const handleLastNameChange = ({ target: { value } }) => {
    setFormData({ ...formData, lastName: value });
    setInvalidFields({
      ...invalidFields,
      lastName: isFieldValid("lastName"),
    });
  };

  const handleEmailChange = ({ target: { value } }) => {
    setFormData({ ...formData, emailAddress: value });
    setInvalidFields({
      ...invalidFields,
      emailAddress: isFieldValid("emailAddress"),
    });
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setFormData({ ...formData, password: value });
    setInvalidFields({
      ...invalidFields,
      password: isFieldValid("password"),
    });
  };

  const checkName = (name) => {
    const regex = new RegExp("^(?=.{2,})");
    return regex.test(String([name]).toLowerCase());
  };

  const checkEmailAddress = (email) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(String([email]).toLowerCase());
  };

  const checkPassword = (passwordStr) => {
    const regex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    return regex.test(String([passwordStr]).toLowerCase());
  };

  const isFieldValid = (fieldName) => {
    if (fieldName === "firstName" || fieldName === "lastName") {
      return checkName(formData[fieldName]);
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
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
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
          onChange={handleFirstNameChange}
          isValid={invalidFields["firstName"]}
        />
        <Input
          width="43%"
          placeholder="Last Name"
          onChange={handleLastNameChange}
          isValid={invalidFields["lastName"]}
        />
      </FlexBox>
    </SignForm>
  );
};

export default SignUp;

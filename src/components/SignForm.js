import React from "react";
import { NavLink } from "react-router-dom";
import WebFont from "webfontloader";
import styled from "styled-components";

import IconLock from "../icons/padlock.svg";

WebFont.load({
  google: {
    families: ["Roboto", "sans-serif"],
  },
});

const StyledForm = styled.div`
  background-color: black;
  font-family: "Roboto";
  width: 30%;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? "row" : "column")};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
`;

const ImgBlock = styled.div`
  display: flex;
  align-self: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f48fb2;
  position: relative;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 10px;
  top: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  text-align: center;
`;

export const Input = styled.input`
  outline: none;
  width: ${(props) => props.width};
  height: 50px;
  padding-left: 10px;
  border: 1px solid grey;
  border-color: ${(props) =>
    props.isValid === undefined ? "grey" : props.isValid ? "green" : "red"};
  background-color: black;
  border-radius: 5px;
  color: white;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #91caf9;
  text-transform: uppercase;
  border: none;
`;

const Text = styled.h6`
  font-size: 10px;
  color: grey;
  width: max-content;
`;

export const AsLink = styled.h3`
  font-size: 12px;
  color: #91caf9;
`;

const StyledLink = styled(NavLink)`
  font-size: 12px;
  color: #91caf9;
  padding-top: 10px;
`;

const Label = styled.label`
  color: white;
  width: 100%;
`;

const Checkbox = styled.input`
  width: 10%;
`;

const SignForm = ({
  titleText,
  emailAddress = "",
  password = "",
  buttonText,
  linkTextLeft,
  linkTextRight,
  linkUrl,
  labelText,
  onEmailChange = () => {},
  onPasswordChange = () => {},
  onSignButtonClick = () => {},
  onCheckedChange = () => {},
  invalidFields = {},
  children,
}) => (
  <FlexBox width="100%" alignItems="center">
    <StyledForm>
      <FlexBox padding="30px">
        <FlexBox height="120px">
          <ImgBlock alignItems="center" paddingBottom="20px">
            <Img src={IconLock} alt="padlock icon" />
          </ImgBlock>
          <Title>{titleText}</Title>
        </FlexBox>
        {children}
        <FlexBox justifyContent="space-around" width="100%" height="150px">
          <Input
            placeholder="Email Address *"
            value={emailAddress}
            onChange={onEmailChange}
            isValid={invalidFields["emailAddress"]}
          />
          <Input
            placeholder="Password *"
            value={password}
            onChange={onPasswordChange}
            isValid={invalidFields["password"]}
          />
        </FlexBox>
        <FlexBox justifyContent="flex-start">
          <FlexBox
            flexDirection="row"
            alignItems="center"
            paddingTop="10px"
            paddingBottom="20px"
          >
            <Checkbox type="checkbox" onChange={onCheckedChange} />
            <Label>{labelText}</Label>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%">
          <Button onClick={onSignButtonClick}>{buttonText}</Button>
        </FlexBox>
        <FlexBox flexDirection="row" justifyContent="space-between">
          <AsLink>{linkTextLeft}</AsLink>
          <StyledLink to={linkUrl}>{linkTextRight}</StyledLink>
        </FlexBox>
        <FlexBox alignItems="center">
          <Text>Copyright@ Your Website 2020</Text>
        </FlexBox>
      </FlexBox>
    </StyledForm>
  </FlexBox>
);

export default SignForm;

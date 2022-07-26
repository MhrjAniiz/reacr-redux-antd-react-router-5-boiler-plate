import React, { useEffect, useState } from "react";

import "./Login.css";
import "./SignUp.css";

import { Link } from "react-router-dom";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useHistory } from "react-router-dom";
import { isLogin } from "../../Utils/localStorage";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { registerRequest } from "../../Redux/actions/AuthActions";
import { useSelector } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const auth = useSelector((state) => state.auth);
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const { loggedIn } = auth;

  const history = useHistory();
  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (
      userName.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      confirmPassword !== 0
    ) {
      if (password === confirmPassword) {
        const user = {
          name: userName,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        };
        dispatch(registerRequest(user));
      } else {
        notification.error({
          message: "Error",
          description: "Password doesn't match",
        });
      }
    } else {
      notification.error({
        message: "Error",
        description: "Fill all the credentials",
      });
    }
  };
  useEffect(() => {
    isLogin() && history.push("/adminpanel");
  }, [loggedIn]);
  return (
    <div className="login">
      <div className="login__box">
        <div className="login__box__header__section">
          <h1 className="login__box__headerMain">Sign Up</h1>
          <Link style={{ color: "grey" }} to="/login" className="account__link">
            I have an account
          </Link>
        </div>
        <CustomInput
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
        />
        <CustomInput
          type="text"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <CustomInput
          type="password"
          placeholder="Password"
          showPassword={showPassword}
          onChange={handlePasswordChange}
        />
        <CustomInput
          type="password"
          placeholder="Confirm Password"
          showPassword={showPassword}
          onChange={handleConfirmPasswordChange}
        />

        <div className="radio_button">
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleShowPassword}
            className="radio_box"
          />
          <label for="checkbox" className="radio_label">
            Show Password
          </label>
        </div>
        <p className="signup__condition">
          By signing up, you agree to the <span>Terms and Conditions </span> and{" "}
          <span>Privacy Policy</span>.
        </p>

        <CustomButton
          margin="2rem 0 0 0"
          height="4rem"
          onClickMethod={handleSubmit}
        >
          Agree and Sign Up
        </CustomButton>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useEffect, useState } from "react";

import "./Login.css";

import { Link } from "react-router-dom";

import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../Redux/actions/AuthActions";
import { isLogin } from "../../Utils/localStorage";
import { useHistory } from "react-router-dom";
import { notification } from "antd";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loggedIn } = auth;

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (email.length !== 0 && password.length !== 0) {
      dispatch(
        loginRequest({
          email: email,
          password: password,
        })
      );
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
          <h1 className="login__box__headerMain">Sign In</h1>
          <meta name="csrf-token" content="{{ csrf_token() }}" />
          {/* <Link
            style={{ color: "grey" }}
            to="/register"
            className="account__link"
          >
            I don't have an account
          </Link> */}
        </div>

        <CustomInput
          type="text"
          placeholder="Email"
          value={email}
          showPassword={showPassword}
          onChange={handleEmailChange}
        />
        <CustomInput
          type="password"
          value={password}
          placeholder="Password"
          showPassword={showPassword}
          onChange={handlePasswordChange}
        />
        <div className="radio_button">
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleShowPassword}
            checked={showPassword}
            className="radio_box"
          />
          <label for="checkbox" className="radio_label">
            Show Password
          </label>
        </div>
        <CustomButton
          margin="2rem 0 0 0"
          height="4rem"
          onClickMethod={handleSubmit}
        >
          Sign In
        </CustomButton>
        <div className="login__box__troubleShoot">
          <Link
            style={{ color: "grey" }}
            to="/signup"
            className="login__box__troubleShoot_link"
          >
            Dont Have An Account ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

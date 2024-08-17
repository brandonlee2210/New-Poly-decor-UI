import React, { createContext, useState, useEffect } from "react";
import { Button, message } from "antd";

// Create the context
export const LoginContext = createContext();
import axios from "axios";

// Create the provider component
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // get id from lcoal storage
    let id = localStorage.getItem("id");
    if (id) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (username, password) => {
    try {
      let res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        username: username,
        password: password,
      });

      // set id to localstorage
      localStorage.setItem("id", res.data.user);

      // navigate to homepage
      message.success("Đăng nhập thành công");
      //   navigate to homepage
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      message.error("Tài khoản hoặc mật khẩu không đúng");
      console.error("Error logging in", err);
    }
  };

  const signup = async (username, password) => {
    try {
      let res = await axios.post("http://localhost:8000/api/v1/auth/signup", {
        username: username,
        password: password,
        password_confirmation: password,
      });

      message.success("Đăng kí tài khoản thành công");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (err) {
      console.error("Error signing up", err);
      message.error("Error signing up. Please try again.");
    }
  };
  const logout = () => {
    localStorage.removeItem("id");
    setIsLoggedIn(false);
    message.success("Đăng xuất thành công");

    // navigate to login page
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, signup }}>
      {children}
    </LoginContext.Provider>
  );
};

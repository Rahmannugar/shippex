"use client";

import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  setIsLoggedIn: any;
}

const Signin = ({ setIsLoggedIn }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username !== "" && password !== "" && checked) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, password, checked]);

  const api_url = process.env.NEXT_PUBLIC_API_SIGNIN_URL!;
  const api_username = process.env.NEXT_PUBLIC_API_USERNAME!;
  const api_password = process.env.NEXT_PUBLIC_API_PASSWORD!;

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value === "") {
      setUserNameError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordError("");
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserNameError("");
    setPasswordError("");
    setLoading(true);

    if (username != api_username) {
      setUserNameError("User doesn't exist");
      setLoading(false);
      return;
    }
    if (password != api_password) {
      setPasswordError("Incorrect password");
      setLoading(false);
      return;
    } else {
      try {
        const formData = new FormData();
        formData.append("usr", username);
        formData.append("pwd", password);

        const response = await axios.post(api_url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
        if (response.status == 200) {
          setUsername("");
          setPassword("");
          setLoading(false);
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
        
          // window.location.reload();
        }
      } catch (error: any) {
        console.error("Login failed:", error);
      }
    }
  };

  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <div className="space-y-4">
        <div className="space-y-2 text-center px-8">
          <h1 className="text-[#000000] font-bold text-2xl">Sign in</h1>
          <h1 className="text-[#4B5563] text-sm cursor-pointer">
            Don't have an account yet?{" "}
            <span className="text-primary font-semibold hover:underline">
              Sign up here
            </span>
          </h1>
        </div>

        <form onSubmit={handleSignIn} className="space-y-[0.875rem]">
          {/* username */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="username"
              className="text-[#1F2937] font-semibold text-sm"
            >
              Username
            </label>
            <div
              tabIndex={0}
              id="here"
              className={`flex items-center w-full h-full space-x-2 border-2 p-3 rounded-lg ${
                userNameError == "" ? "focus-within:border-primary" : ""
              }  ${
                userNameError == ""
                  ? " focus-within:ring-4 focus-within:ring-[CEE0FF]"
                  : "ring-4 ring-[#f6d5d5] border-error"
              }" ${userNameError == "" ? "" : "border-error"} `}
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 14.5V13.1667C10.6667 12.4594 10.3858 11.7811 9.88566 11.281C9.38556 10.781 8.70728 10.5 8.00004 10.5H4.00004C3.2928 10.5 2.61452 10.781 2.11442 11.281C1.61433 11.7811 1.33337 12.4594 1.33337 13.1667V14.5"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.00004 7.83333C7.4728 7.83333 8.66671 6.63943 8.66671 5.16667C8.66671 3.69391 7.4728 2.5 6.00004 2.5C4.52728 2.5 3.33337 3.69391 3.33337 5.16667C3.33337 6.63943 4.52728 7.83333 6.00004 7.83333Z"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6666 14.5V13.1667C14.6662 12.5758 14.4695 12.0019 14.1075 11.5349C13.7455 11.0679 13.2387 10.7344 12.6666 10.5867"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6666 2.58667C11.2402 2.73354 11.7487 3.06714 12.1117 3.53488C12.4748 4.00262 12.6719 4.57789 12.6719 5.17C12.6719 5.76212 12.4748 6.33739 12.1117 6.80513C11.7487 7.27287 11.2402 7.60647 10.6666 7.75334"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="text"
                placeholder="ali@brandim"
                required
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className="border-none focus:outline-none w-full h-full placeholder:text-[#6B7280] text-[#000000] text-[0.938rem] font-medium"
              />
            </div>
            {userNameError && (
              <h1 className="text-error font-medium text-sm">
                {userNameError}
              </h1>
            )}
          </div>

          {/* password */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="Password"
                className="text-[#1F2937] font-semibold text-sm"
              >
                Password
              </label>
              <h1 className="text-primary font-semibold text-sm cursor-pointer hover:underline">
                Forgot Password?
              </h1>
            </div>
            <div
              tabIndex={0}
              id="here"
              className={`flex items-center w-full h-full space-x-2 border-2 p-3 rounded-lg ${
                passwordError == "" ? "focus-within:border-primary" : ""
              }  ${
                passwordError == ""
                  ? " focus-within:ring-4 focus-within:ring-[CEE0FF]"
                  : "ring-4 ring-[#f6d5d5] border-error"
              }" ${passwordError == "" ? "" : "border-error"} `}
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 7.83334H3.33333C2.59695 7.83334 2 8.4303 2 9.16668V13.8333C2 14.5697 2.59695 15.1667 3.33333 15.1667H12.6667C13.403 15.1667 14 14.5697 14 13.8333V9.16668C14 8.4303 13.403 7.83334 12.6667 7.83334Z"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.66663 7.83334V5.16668C4.66663 4.28262 5.01782 3.43478 5.64294 2.80965C6.26806 2.18453 7.1159 1.83334 7.99996 1.83334C8.88401 1.83334 9.73186 2.18453 10.357 2.80965C10.9821 3.43478 11.3333 4.28262 11.3333 5.16668V7.83334"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="your password"
                required
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="border-none focus:outline-none w-full h-full placeholder:text-[#6B7280] text-[#000000] text-[0.938rem] font-medium"
              />

              <svg
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.58669 7.08667C6.39019 7.26977 6.23259 7.49057 6.12327 7.7359C6.01396 7.98123 5.95518 8.24607 5.95045 8.51461C5.94571 8.78315 5.99511 9.04989 6.0957 9.29893C6.19629 9.54796 6.346 9.77419 6.53592 9.96411C6.72584 10.154 6.95206 10.3037 7.2011 10.4043C7.45013 10.5049 7.71688 10.5543 7.98542 10.5496C8.25396 10.5448 8.51879 10.4861 8.76412 10.3768C9.00946 10.2674 9.23026 10.1098 9.41336 9.91334"
                  stroke={showPassword ? "#2563EB" : "#6B7280"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15332 3.88668C7.43419 3.85168 7.71694 3.83387 7.99999 3.83334C12.6667 3.83334 14.6667 8.50001 14.6667 8.50001C14.3686 9.13809 13.9948 9.73797 13.5533 10.2867"
                  stroke={showPassword ? "#2563EB" : "#6B7280"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.40665 4.90668C3.08081 5.80976 2.01989 7.05018 1.33331 8.50001C1.33331 8.50001 3.33331 13.1667 7.99998 13.1667C9.27725 13.1701 10.5272 12.7967 11.5933 12.0933"
                  stroke={showPassword ? "#2563EB" : "#6B7280"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33331 1.83334L14.6666 15.1667"
                  stroke={showPassword ? "#2563EB" : "#6B7280"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {passwordError && (
              <h1 className="text-error font-medium text-sm">
                {passwordError}
              </h1>
            )}
          </div>

          {/* Remember me checkbox and submit button */}
          <div className="space-y-7">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={checked}
                onChange={(e) => setChecked(!checked)}
                required
              />
              <label
                htmlFor="checkbox"
                className="text-[#1F2937] font-semibold text-sm"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={disabled}
              className="bg-primary flex items-center justify-center space-x-3 disabled:bg-[#60A5FA] w-full h-full py-3 font-semibold text-[0.938rem] text-white rounded-lg"
            >
              {loading ? (
                <>
                  <CircularProgress size="0.875rem" sx={{ color: "white" }} />
                  <h1>Signing in</h1>
                </>
              ) : (
                <h1>Sign in</h1>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;

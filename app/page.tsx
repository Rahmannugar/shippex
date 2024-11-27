"use client";

import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const page = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    setToken(storedToken || null);
  }, []);
  return (
    <div>
      {token ? (
        <div>
          <div>
            <h1>Welcome! Your token: {token}</h1>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <Signin />
        </div>
      )}
    </div>
  );
};
export default page;
